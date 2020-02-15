/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

/* Esta es la página principal, usenla para probar sus componenetes, la idea es que aquí se hagan las modificaciones en
 * memoria y se envien datos a los componentes. El código actualmente está con un ejemplo del listado de cursos */

import { LitElement, html, css, property, PropertyValues, customElement } from 'lit-element';
import { setPassiveTouchGestures } from '@polymer/polymer/lib/utils/settings.js';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { installMediaQueryWatcher } from 'pwa-helpers/media-query.js';
import { installOfflineWatcher } from 'pwa-helpers/network.js';
import { installRouter } from 'pwa-helpers/router.js';
import { updateMetadata } from 'pwa-helpers/metadata.js';
import { store, RootState } from '../store.js';
import { customCss } from './style';

// Importen sus tipos de datos y funciones
import { getAllCursos } from '../actions/cursos';
import { ListaCursos } from '../reducers/cursos';

// These are the actions needed by this element.
import {
  navigate,
  updateOffline,
  updateDrawerState
} from '../actions/app.js';

import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-scroll-effects/effects/waterfall.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import './snack-bar.js';

// Aqui se importan los componentes.
import './horario-clases';
import './perfil-alumno';
import './search-box';
import './view-notices';

@customElement('main-page')
export class MainPage extends connect(store)(LitElement) {
  @property({type: Object})
  private _cursos: ListaCursos = {};

  @property({type: Boolean})
  private _loggedIn: boolean = false;

  @property({type: String})
  private _page: string = "Inicio";

  private appTitle : string = 'Siga';
  
  static get styles() {
    return [customCss,
      css`
        :host {
          display: block;
          height: 100vh;
        }

        #main {
          display: grid;
          height: 100%;
          width: 100%;
          grid-template-columns: 300px calc(100% - 300px);
          grid-template-rows: 80px calc(100% - 160px) 80px;
        }
        
        
        
        #header {
          background-color: #0d1e52;
          text-align: left;
          color: white;
          padding: 2%;
          grid-row: 1;
          grid-column: 1/4 ;
          display: block;
        }
        #titulo {
          grid-row: 1;
          grid-column: 1/2;
          margin-right: 300px;
        }
        #miBusqueda {
          height: 25px;
        }
        
        #botonBusqueda {
          height: 25px;
          font-size: 14px;
        }
        #search {
          margin-left: 600px;
          width: 300px;
          height: 300px;
          clear: left;
          
        }
        #home {
          float: left;
        }
        
        #box {
          
          margin-left: 1350px;
          float: right;
        }
        
        #nav-bar {
          width:100%;
          text-align: auto;
          background: antiquewhite;
          height: 639px;
          width: 260px;
          color: black;
          border:#0D1E52 3px solid;
          border-radius: 10px;
        }
        #menu {
          margin-top: 10px;
          margin-left: 10px;
          margin-right: 10px;
          margin-bottom: 10px;
          width: 238px;
          height: 615px;
          background-color: #FE9900;
          font-size: 25px; 
          display: inline-block;
          padding: 0%;
          border: black 2px solid;
          border-radius: 10px;
          font-family: Arial, Helvetica, sans-serif;
        }
        #menu li {
          list-style: none;
          font-weight: 620;
        }
        #menu li a{
          background-color: #FE9900;
          color: black;
          text-decoration: none;
        }
        
        #menu li a:hover{
          background-color:antiquewhite;
          opacity: 0.7;
        }
        #menu li ul{
          font-weight: 400;
          display: none;
        }
        #menu li:hover > ul{
          display: block;
        }
        #menu li ul li {
          list-style: circle;
        }
        #menu li ul li a{
          color: black;
          text-decoration: none;
          display: block;
          font-size: 22px;
        }
        #linkPerfil {
          width: 200px;
          height: 200px;
          float: right;
        }
        #linkPerfil:hover {
          opacity: 0.7;
        }
        #linkPerfil img {
          float: right;
        }
        
        
      #content {
          grid-row: 2;
          grid-column: 2;
        }

        #logInButton {
          border: none;
          outline: none;
          background: #FE9900;
          color: #000;
          font-size: 18px;
          border-radius: 20px;
          padding-top:10px;
          border-radius: 4px;
          height: 40px;
          display:block;
          text-align:center;
        }

        #logInButton:hover {
          cursor: pointer;
          background: #ffc107;
          color: #000;
        }

        #logOutButton {
          cursor: pointer;
          border: 1px solid white;
          border-radius: 4px;
          padding: 3px;
          background: coral;
          grid-column: 1/1;
          
          float: right;
          
        }

        #logOutButton:hover {
          background: orangered;
        }
        
        #footer {
        grid-column: 1 / 4;
        background-color: #FE9900;
        align-content: center;
        background-image: url("images/logo.gif");
        background-position-x: center;
        background-repeat: no-repeat;
        background-size: auto;
        border: black 2px solid;
        border-radius: 0px;
        }

        .centered {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          width: 100%;
        }
        
        .component-margin {
          margin: 10% 10%
        }
        .loginbox{
          width: 320px;
          height: 420px;
          background: #fff;
          color: #000;
          top: 50%;
          left: 50%;
          position: absolute;
          transform: translate(-50%,-50%);
          box-sizing: border-box;
          padding: 70px 30px;
          }

        .avatar{
            width: 100px;
            height: 100px;
            border-radius: 50%;
            position: absolute;
            top: -50px;
            left: calc(50% - 50px);
        }
        .image1{
          display: block;
          width: 100vw;
          height: 100vh;
          object-fit: cover;
        }

        h1{
            margin: 0;
            padding: 0 0 20px;
            text-align: center;
            font-size: 22px;
        }
        
        .loginbox p{
            margin: 0;
            padding: 0;
            font-weight: bold;
        }
        
        .loginbox input{
            width: 100%;
            margin-bottom: 20px;
        }
        
        .loginbox input[type="text"], input[type="password"]
        {
            border: none;
            border-bottom: 1px solid #000;
            background: transparent;
            outline: none;
            height: 40px;
            color: #000;
            font-size: 16px;
        }
        .loginbox input[type="submit"]
        {
            border: none;
            outline: none;
            height: 40px;
            background: #FE9900;
            color: #000;
            font-size: 18px;
            border-radius: 20px;
        }
        .loginbox input[type="submit"]:hover
        {
            cursor: pointer;
            background: #ffc107;
            color: #000;
        }
        .loginbox a{
            text-decoration: none;
            font-size: 12px;
            line-height: 20px;
            color: darkgrey;
        }
        
        .loginbox a:hover
        {
            color: #ffc107;
        }
      
        #logInbuttonnew {
          cursor: pointer;
          background: #ffc107;
          color: #000;
          border: none;
          outline: none;
          height: 40px;
          background: #FE9900;
          color: #000;
          font-size: 18px;
          border-radius: 20px;
        }
      `
    ];
  }
  _logIn () {
    this._loggedIn = true;
    if (!this._loggedIn) {
        alert('try again!');
    }
  }

  _logOut () {
    this._loggedIn = false;
    console.log("proceso de deslogueo satisfactorio");
    if (this._loggedIn) {
      alert ('try again');
    }
  }

  /* Render se ejecuta cada vez que se modifica una variable marcada como property, OJO: no se verifican las
   * subpropiedades de los objetos, pueden requerir una actualización usando this.requestUpdate();
   * Más info: https://polymer-library.polymer-project.org/3.0/docs/devguide/observers */
  protected render() {
    /* Acá está la página principal, cada componente debería tener un lugar donde puedan probarlo. */
    if(this._loggedIn)
    {
      switch (this._page)
      {
        case "Ramos":
          return html`
          <div id="main">
              <div id="header" style="vertical-align: middle;"> 
                <!--<a href="/"> <img src="images/manifest/flecha.jpg" onclick="this._logOut" height="40px" width="40px" title="USM"></a>-->
                <span id="logOutButton" @click="${this._logOut}">
                  Cerrar Sesión
                </span>
                <span>
                  <a id="home" href="/"><img src="images/manifest/home.png" width="45px" height="45px"></a>
                </span>
                <span id="box">               
                  <a id="linkPerfil" href="/MiPerfil"> <img src="images/manifest/perfil.png" width="100px" height="100px"></a>                  
                </span>
                <span id="search">
                    <input type="search" value="Ingrese su búsqueda" id="miBusqueda" name="q">
                    <button id="botonBusqueda">Buscar</button>
                </span>

                <!-- Intente poner el cuadro de busqueda pero queda fuera de la seccion de header. -->
                <!--<div id="box">
                  <search-box ></search-box> 
                </div>  -->
              </div>

              <div id="nav-bar">
                    <nav id="menu">
                        <ul>
                          <hr/>
                          <li><a  href="/">Noticias</a></li>
                          <hr/>
                          <li><a  href="/Ramos">Ramos</a>
                            <ul>
                              <li><a href="">Busqueda de ramos</a></li>
                              <li><a href="">Asignaturas escritas</a></li>
                              <li><a href="">Inscripción</a></li>
                            </ul>
                          </li>
                          <hr/>
                          <li><a  href="/">Solicitudes Externas</a></li>
                          <hr/>
                          <li><a  href="/">Enlaces Externos</a></li>
                          <hr/>
                        </ul>
                    </nav>
              </div>

              <div id="content">
                  <!-- ACA está la utilización del componente, para pasarle datos usen un punto '.' más
                       el nombre de la variable del componente (public) -->
                  <horario-clases class="component-margin" .cursos="${this._cursos}"></horario-clases> 
              </div>

              <div id="footer">
              </div>

          </div>
            `
            break;
        case "MiPerfil":
          return html`
          <div id="main">
              <div id="header" style="vertical-align: middle;"> 
                <!--<a href="/"> <img src="images/manifest/flecha.jpg" onclick="this._logOut" height="40px" width="40px" title="USM"></a>-->
                <span id="logOutButton" @click="${this._logOut}">
                  Cerrar Sesión
                </span>
                <span>
                  <a id="home" href="/"><img src="images/manifest/home.png" width="45px" height="45px"></a>
                </span>
                <span id="box">               
                  <a id="linkPerfil" href="/MiPerfil"> <img src="images/manifest/perfil.png" width="100px" height="100px"></a>                  
                </span>
                <span id="search">
                    <input type="search" value="Ingrese su búsqueda" id="miBusqueda" name="q">
                    <button id="botonBusqueda">Buscar</button>
                </span>

                <!-- Intente poner el cuadro de busqueda pero queda fuera de la seccion de header. -->
                <!--<div id="box">
                  <search-box ></search-box> 
                </div>  -->
              </div>

              <div id="nav-bar">
                    <nav id="menu">
                        <ul>
                          <hr/>
                          <li><a  href="/">Noticias</a></li>
                          <hr/>
                          <li><a  href="/Ramos">Ramos</a>
                            <ul>
                              <li><a href="">Busqueda de ramos</a></li>
                              <li><a href="">Asignaturas escritas</a></li>
                              <li><a href="">Inscripción</a></li>
                            </ul>
                          </li>
                          <hr/>
                          <li><a  href="/">Solicitudes Externas</a></li>
                          <hr/>
                          <li><a  href="/">Enlaces Externos</a></li>
                          <hr/>
                        </ul>
                    </nav>
              </div>

              <div id="content">
                  <!-- ACA está la utilización del componente, para pasarle datos usen un punto '.' más
                       el nombre de la variable del componente (public) -->
                  <perfil-alumno></perfil-alumno>
              </div>

              <div id="footer">
              </div>

          </div>
            `
          break;
        default:
          return html`
          <div id="main">
              <div id="header" style="vertical-align: middle;"> 
                <!--<a href="/"> <img src="images/manifest/flecha.jpg" onclick="this._logOut" height="40px" width="40px" title="USM"></a>-->
                <span id="logOutButton" @click="${this._logOut}">
                  Cerrar Sesión
                </span>
                
                <span id="search">
                    <input type="search" value="Ingrese su búsqueda" id="miBusqueda" name="q">
                    <button id="botonBusqueda">Buscar</button>
                     
                </span>
                <span>
                  <a id="home" href="/"><img src="images/manifest/home.png" width="45px" height="45px"></a>
                </span>
                <span id="box">               
                  <a id="linkPerfil" href="/MiPerfil"> <img src="images/manifest/perfil.png" width="100px" height="100px"></a>                  
                </span>
                
                
                <!-- Intente poner el cuadro de busqueda pero queda fuera de la seccion de header. -->
                <!--<div id="box">
                  <search-box ></search-box> 
                </div>  -->
              </div>

              <div id="nav-bar">
                    <nav id="menu">
                        <ul>
                          <hr/>
                          <li><a ?selected="${this._page === 'Noticias'}" href="/">Noticias</a></li>
                          <hr/>
                          <li><a ?selected="${this._page === 'Ramos'}" href="/Ramos">Ramos</a>
                            <ul>
                              <li><a href="">Busqueda de ramos</a></li>
                              <li><a href="">Asignaturas escritas</a></li>
                              <li><a href="">Inscripción</a></li>
                            </ul>
                          </li>
                          <hr/>
                          <li><a  href="/">Solicitudes Externas</a></li>
                          <hr/>
                          <li><a  href="/">Enlaces Externos</a></li>
                          <hr/>
                        </ul>
                    </nav>
              </div>

              <div id="content">
                  <view-notices></view-notices>
              </div>

              <div id="footer">
              </div>

          </div>
          `
      }  
    }
    return html`
      <img src="images/manifest/edA.png" class="image1" height=100%>
        <div class="loginbox">
        <img src="images/manifest/perfil.png" class="avatar">
        <h1>Login USM</h1>
            <p>Nombre de usuario</p>
            <input type="text" name="username" id="username" placeholder="Ingresa tu nombre de usuario">

            <p>Contraseña</p>
            <input type="password" name="password" id="password" placeholder="Ingresa tu contraseña">

            <span id="logInButton" @click="${this._logIn}">
            Login
            </span><br>

            <a href="#">¿Olvidaste tu contraseña?</a><br>
            <a>¿No tienes cuenta?</a> <a href="#">Registrate ahora</a>
        </div>
    `
    }
  

  constructor() {
    super();
    this._page="Inicio";
    // To force all event listeners for gestures to be passive.
    // See https://www.polymer-project.org/3.0/docs/devguide/settings#setting-passive-touch-gestures
    setPassiveTouchGestures(true);
  }

  /* Esta función se ejecuta solo una vez, util para cargar datos. */
  protected firstUpdated() {
    installRouter((location) => store.dispatch(navigate(decodeURIComponent(location.pathname))));
    installOfflineWatcher((offline) => store.dispatch(updateOffline(offline)));
    installMediaQueryWatcher(`(min-width: 460px)`,
        () => store.dispatch(updateDrawerState(false)));

    // Cargando datos
    store.dispatch(getAllCursos());
  }

  /* Esta función se ejecuta DESPUES de cada render. */
  protected updated(changedProps: PropertyValues) {
    if (changedProps.has('_page')) {
      const pageTitle = this.appTitle + ' - ' + this._page;
      updateMetadata({
        title: pageTitle,
        description: pageTitle
        // This object also takes an image property, that points to an img src.
      });
    }
    /* Si queremos modificar la página o leer el contenido que hay en algún input debemos trabajar 
     * directamente con el DOM element. PERO cada elemento tiene su propio shadowRoot, por lo que 
     * para tomar algo de la página, por ejemplo la barra de navegación podemos: 
        let navBar = this.shadowRoot.getElementById('nav-bar');
     * Así tenemos la navBar, si fuera un input podríamos leerlo con navBar.value */
    
  }

  /* Esta función se ejecuta cada vez que el state cambia, se usa para leer la memoria. */
  stateChanged(state: RootState) {
    this._page = state.app!.page;
    this._cursos = state.cursos!.cursos;
  }
}
