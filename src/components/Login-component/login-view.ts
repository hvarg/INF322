/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { LitElement, html, property, PropertyValues, customElement, query } from 'lit-element';
import { setPassiveTouchGestures } from '@polymer/polymer/lib/utils/settings.js';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { installMediaQueryWatcher } from 'pwa-helpers/media-query.js';
import { installOfflineWatcher } from 'pwa-helpers/network.js';
import { installRouter } from 'pwa-helpers/router.js';
import { updateMetadata } from 'pwa-helpers/metadata.js';

// This element is connected to the Redux store.
import { store, RootState } from '../../store.js';
import { customCss } from './login-styles.js';

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
import 'weightless/divider';
import 'weightless/banner';
import 'weightless/nav';
import 'weightless/tab';
import 'weightless/tab-group';
import { login } from '../../actions/user.js';

@customElement('login-view')
export class LoginView extends connect(store)(LitElement) {
  
  static get styles() {
    return [customCss
    ];
  }
  
  @property({type: String})
  forgotPasswordText: string = "¿Problemas con tu contraseña?";

  @property({type: String})
  public userName: string = "";

  @property()
  public userNameLabel: string = "Usuario";

  
  @property({type: String})
  public password: string = "";

  @property()
  public passwordLabel: string = "Contraseña";

  @property()
  public passwordInputType: string = "password";
  
  @property()
  /// used for see password in login
  public visibility: string = "visibility_off";

  @property()
  public loginButtonText: string = "";

  @property()
  public showPasswordButtonText: string = "Ver";

  @property()
  public submitMessage: string = "Bienvenid@";

  @property()
  public showMsgSubmit: string = "display:none";

  @property()
  public existError: boolean = false;
  
  @property()
  public classNameError: string = "submit-error";

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
    this.loginButtonText = "Iniciar sesión";
  }

  _logIn () {
    this._validateUserNameField();
    this._validatePasswordField();
    if(!this.existError){
        this.userName = this.userNameInput.value;
        this.password = this.passwordInput.value;
        store.dispatch(login(this.userName, this.password));
    }
}

  _validateUserNameField(){
        if(this.userNameInput.value == ""){
                this.userNameInput.setAttribute("invalid",'');
                this.showMsgSubmit = "";
                this.existError = true;
                this.submitErrorMessage = "Debes ingresar tu nombre de usuario";
        } else{
                this.existError = false;
        }
  }

  _validatePasswordField(){
        if(this.passwordInput.value == ""){
                this.passwordInput.setAttribute("invalid",'');
                this.showMsgSubmit = "";
                if(this.existError){
                        this.submitErrorMessage += " y tu contraseña.";
                }else{
                        this.existError = true;
                        this.submitErrorMessage = " Debes ingresar tu contraseña.";
                }
        }
  }

  _showPassword(){
    if(this.passwordInputType == "text"){
      this.passwordInputType = "password";
      this.visibility = "visibility_off";
    }else{
      this.passwordInputType = "text";
      this.visibility = "visibility";
    }
  }

  datosUsuario(userName: string, password: string) {
    console.log(userName,password);
  }

  protected render() {
    return html`
        <div id="main">
                <wl-nav shadow fixed>
                        <div slot="left">
                        <img style="width:60%" src="/images/usm.jpg" alt="logo" />
                        </div>
                        <span slot="title" style="text-align:center;">SISTEMA DE INFORMACIÓN DE GESTIÓN ACADÉMICA</span>
              </wl-nav>
                <div id="content">
                        <div class="card-container ${ this.existError ? this.classNameError : ''}">
                                        <wl-tab-group>
                                                <wl-tab vertical checked>
                                                        <wl-icon slot="before">meeting_room</wl-icon>
                                                        <span>Entrar</span>
                                                </wl-tab>
                                                <wl-tab vertical disabled>
                                                        <wl-icon slot="before">help</wl-icon>
                                                        <span>¿Qué es Siga?</span>
                                                </wl-tab>
                                                <wl-tab vertical disabled>
                                                        <wl-icon slot="before">people_alt</wl-icon>
                                                        <span>Contacto</span>
                                                </wl-tab>
                                        </wl-tab-group>
                                                <wl-card class="card">
                                                        <app-header effects="waterfall">
                                                                <app-toolbar>Bienvenid@</app-toolbar>
                                                        </app-header>
                                                        <!--Warning message -->
                                                        <div ?hidden="${this.showMsgSubmit}" style="width: 90%; align-self:center;">
                                                                <wl-banner
                                                                        style="--banner-icon-color: #dc3545!important;; --banner-bg: #ff52524a;">
                                                                        <wl-icon slot="icon">error</wl-icon>
                                                                        <wl-text size="small">
                                                                                ${this.submitErrorMessage}
                                                                        </wl-text>
                                                                        <wl-button slot="action" fab flat inverted @click="${this.closeErrorBanner}">
                                                                                <wl-icon style="color: #dc3545!important;">close</wl-icon>
                                                                        </wl-button>
                                                                </wl-banner>
                                                        </div>
                                                        <!--Warning message/ -->
                                                        <!-- User and host -->
                                                        <div class="row">
                                                                <div class="column">
                                                                        <wl-textfield class="username input-text" label="${this.userNameLabel}"
                                                                                type="text" required outlined>
                                                                                <wl-icon slot="before">person_pin</wl-icon>
                                                                        </wl-textfield>
                                                                </div>
                                                                <div class="column">
                                                                        <wl-select outlined>
                                                                                <wl-icon slot="before">alternate_email</wl-icon>
                                                                                <option class="special" value="1" selected>sansano.usm.cl</option>
                                                                                <option class="special" value="2">alumnos.usm.cl</option>
                                                                                <option class="special" value="3">pregrado.usm.cl</option>
                                                                                <option class="special" value="4">usm.cl</option>
                                                                        </wl-select>
                                                                </div>
                                                        </div>
                                                        <!-- User and host/ -->
                                                        <div class="row-password">
                                                                <wl-textfield class="password input-text" label="${this.passwordLabel}"
                                                                        type="${this.passwordInputType}" outlined>
                                                                        <wl-icon @click="${this._showPassword}" slot="after">${this.visibility}
                                                                        </wl-icon>
                                                                </wl-textfield>
                                                        </div>
                                                        <div class="row">
                                                                <div class="column" style="text-align:center; padding: 1em;">
                                                                        <a href="" part="login__forgotPass">${this.forgotPasswordText}</a>
                                                                </div>
                                                        </div>
                                                        <div class="login-button">
                                                                <wl-button class="btn-showPassword" @click="${this._logIn}">
                                                                        ${this.loginButtonText}</wl-button>
                                                        </div>
                                                </wl-card>
                                </div>
                </div>
                <div id="footer"></div>
        </div>
        <!--Login-component/-->
      `;
  }
  closeErrorBanner(): void {
    this.showMsgSubmit = "display:none";
    this.existError = false;
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
    if(state.user.error !== ""){
      this.showMsgSubmit = "";
      this.submitErrorMessage = state.user.error.toString();
      this.existError = true;
    }
  }
}
