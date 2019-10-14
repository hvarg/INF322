/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { LitElement, html, css, property, PropertyValues, customElement, query } from 'lit-element';
import { setPassiveTouchGestures } from '@polymer/polymer/lib/utils/settings.js';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { installMediaQueryWatcher } from 'pwa-helpers/media-query.js';
import { installOfflineWatcher } from 'pwa-helpers/network.js';
import { installRouter } from 'pwa-helpers/router.js';
import { updateMetadata } from 'pwa-helpers/metadata.js';

// This element is connected to the Redux store.
import { store, RootState } from '../../store.js';
import { customCss } from '../style';

// These are the actions needed by this element.
import {
  navigate,
  updateOffline,
  updateDrawerState
} from '../../actions/app.js';

// The following line imports the type only - it will be removed by tsc so
// another import for app-drawer.js is required below.

// These are the elements needed by this element.
import '@polymer/app-layout/app-header/app-header';
import '@polymer/app-layout/app-toolbar/app-toolbar';

import '../snack-bar.js';
import 'weightless/button';
import 'weightless/card';
import 'weightless/textfield';
import 'weightless/icon';
import 'weightless/select';

@customElement('login-page')
export class LoginPage extends connect(store)(LitElement) {
  
  static get styles() {
    return [customCss,
      css`
      :host {
        display: block;
        height: 100vh;
        font: Sans-serif;
        --input-color: White;
      }
      
      app-toolbar{
        display: flex;
        align-items:center;
        justify-content: center;
      }
        .login-layout {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          background-color: #e8e7e7;
        }
        
        .card{
          background-color: #151617e0;
          border-radius: 6px;
          box-shadow: 0 2px 2px rgba(0,0,0,.3);
          height:100%;
          width:100%;
            
        }
        
        .input-text{
          font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
          font-size: 14px;
          line-height: 1.42857143;
          color: #fff;
        }
        
        app-header {
          color: #fff;
          --app-header-background-rear-layer: {
            /* The header is blue when condensed */
            background-color: blue;
          };
        }
          
        @media screen and (max-width: 1100px) {
            .card-container{
              height: 70%;
              width: 50%;
              padding: 20px;
          }
        }

        @media screen and (max-width: 1600px) {
          .card-container{
            height: 70%;
            width: 30%;
            padding: 20px;
    
        }
      }
      
      @media screen and (max-width: 1000px) {
        .card-container{
          height: 70%;
          width: 90%;
          padding: 20px;
      }
    }    
      `
    ];
  }
  
  @property({type: String})
  forgotPasswordText: string = "¿Has olvidado tu contraseña?";

  @property({type: String})
  public userName: string = "";

  @property()
  public userNameLabel: string = "";

  @property()
  public displayName: string = "";

  @property()
  public userShowedName: string ="";

  @property()
  public canSubmit: boolean = false;

  @property()
  public canShow: boolean = false;

  @property()
  public passwordInputType: string = "password";

  @property()
  public loginButtonText: string = "";

  @property()
  public showPasswordButtonText: string = "Ver";

  @property()
  public submitMessage: string = "Bienvenid@";

  @property()
  public showMsgSubmit: string = "display:none";

  @property()
  public submitErrorMessage: string = "";
  
  @query(".username")
  public userNameInput: any;

  @query(".password")
  public passwordInput: any;

  @query(".btn-acceder")
  public submitButton: any;

  @query(".btn-showPassword")
  public showPasswordButton: any;

  @property({type: String})
  private _page: string = '';

  private appTitle : string = 'Siga - Iniciar sesión';
  
  constructor() {
    super();
    // To force all event listeners for gestures to be passive.
    // See https://www.polymer-project.org/3.0/docs/devguide/settings#setting-passive-touch-gestures
    setPassiveTouchGestures(true);
    this._myDefaultOptions();
  }

  _myDefaultOptions() {
    this.userNameLabel = "Correo institucional";
    this.loginButtonText = "Entrar";
    this.submitErrorMessage = "Error";
  }

  _logIn (e: Event) {
    this.datosUsuario(this.userNameInput.value,this.passwordInput.value);
  }

  datosUsuario(userName: string, password: string) {
    console.log(userName,password);
  }

  protected render() {
    return html`
    <div class="login-layout">
      <div class="card-container">
        <wl-card class="card">
          <app-header effects="waterfall">
            <app-toolbar>Bienvenid@</app-toolbar>
          </app-header>
          <div class="submit-msg" part="login__submitMsg"
          ?hidden="${this.showMsgSubmit}">
          ${this.submitMessage} 
          </div>  
          <div style="width:100% !important;">
              <wl-textfield
              outlined 
              class="username input-text"
              label="Usuario" 
              type="email"
              style="width:50% !important; display:flex;">
                <wl-icon slot="before">person_pin</wl-icon>
              </wl-textfield>
              <wl-select outlined
                style="width:50% !important; display:block;" >
                <wl-icon slot="before">alternate_email</wl-icon>
                <option value="1" selected>sansano.usm.cl</option>
                <option value="2">alumnos.usm.cl</option>
                <option value="3">pregrado.usm.cl</option>
                <option value="4">usm.cl</option>
                <option value="5">whatdafuck</option>
              </wl-select>
          </div>
          <wl-textfield class="password input-text" label="Password" type="password"></wl-textfield>
          <wl-button @click="${this._logIn}">Iniciar sesión</wl-button>
          <br>
          <a class="forgotPass" href="" part="login__forgotPass">${this.forgotPasswordText}</a>
        </wl-card>
      </div>
    </div>
        <!--Login-component/-->
      `;
  }

  protected firstUpdated() {
    installRouter((location) => store.dispatch(navigate(decodeURIComponent(location.pathname))));
    installOfflineWatcher((offline) => store.dispatch(updateOffline(offline)));
    installMediaQueryWatcher(`(min-width: 460px)`,
        () => store.dispatch(updateDrawerState(false)));
  }

  protected updated(changedProps: PropertyValues) {
    if (changedProps.has('_page')) {
      const pageTitle = this.appTitle + ' - ' + this._page;
      updateMetadata({
        title: pageTitle,
        description: pageTitle
        // This object also takes an image property, that points to an img src.
      });
    }
  }

  stateChanged(state: RootState) {
    this._page = state.app!.page;
  }
}
