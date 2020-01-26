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
import 'weightless/button';
import 'weightless/card';
import 'weightless/textfield';

import { logout } from '../actions/user.js';

// Aqui se importan los componentes.
import './horario-clases';
import { SharedStyles } from './shared-styles.js';

@customElement('main-page')
export class MainPage extends connect(store)(LitElement) {
  @property({type: Object})
  private _cursos: ListaCursos = {};

  @property({type: Boolean})
  private _loggedIn: Boolean | undefined;

  @property({type: String})
  private _page: string = '';

  @property({type: String})
  private appTitle : string = '';
  
  static get styles() {
    return [customCss,
        SharedStyles,
        css`
                :host {
                display: block;
                height: 100vh;
                }
      `
    ];
  }

  //Magia de redux: esto puede suceder en otro lugar
  //y cambiará el estado gracias a la ultima función de
  //esta clase.
  // _logIn () {
  //   console
  //   store.dispatch(getUserState(store.getState()));
  // }
  _logOut(){
    store.dispatch(logout());
  }

  /* Render se ejecuta cada vez que se modifica una variable marcada como property, OJO: no se verifican las
   * subpropiedades de los objetos, pueden requerir una actualización usando this.requestUpdate();
   * Más info: https://polymer-library.polymer-project.org/3.0/docs/devguide/observers */
  protected render() {
    /* Acá está la página principal, cada componente debería tener un lugar donde puedan probarlo. */
    return html`
    ${
      this._loggedIn ? html`
      <div id="main">
          <div id="header">
            <wl-button @click="${this._logOut}">Cerrar sesión</wl-button>
          </div>
          <div id="nav-bar">
          </div>
        <div id="content">
        <!-- ACA está la utilización del componente, para pasarle datos usen un punto '.' más
             el nombre de la variable del componente (public) -->
        <horario-clases class="component-margin" .cursos="${this._cursos}"></horario-clases> 

    </div>

    <div id="footer">
    </div>
    
      </div>
      <!--home-component/-->
      ` : 
      html`
      <login-view ></login-view>
      `}  
        `;
  }

  constructor() {
    super();
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
    this._loggedIn = state.user.isLoggedIn;
    this._cursos = state.cursos!.cursos;
  }
}
