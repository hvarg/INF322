/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { LitElement, html, css, property, PropertyValues, customElement } from 'lit-element';
import { setPassiveTouchGestures } from '@polymer/polymer/lib/utils/settings.js';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { installMediaQueryWatcher } from 'pwa-helpers/media-query.js';
import { installOfflineWatcher } from 'pwa-helpers/network.js';
import { installRouter } from 'pwa-helpers/router.js';
import { updateMetadata } from 'pwa-helpers/metadata.js';

// This element is connected to the Redux store.
import { store, RootState } from '../store.js';
import { customCss } from './style';

// These are the actions needed by this element.
import {
  navigate,
  updateOffline,
  updateDrawerState
} from '../actions/app.js';

// The following line imports the type only - it will be removed by tsc so
// another import for app-drawer.js is required below.

// These are the elements needed by this element.
import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-scroll-effects/effects/waterfall.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import './snack-bar.js';
import 'weightless/button';
import 'weightless/card';
import 'weightless/textfield';

import { logout, login } from '../actions/user.js';

@customElement('main-page')
export class MainPage extends connect(store)(LitElement) {

  @property({type: Boolean})
  private _loggedIn: Boolean | undefined;

  @property({type: String})
  private _page: string = '';

  @property({type: String})
  private appTitle : string = '';
  
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
          grid-template-columns: 300px calc(100% - 300px);
          grid-template-rows: 100px calc(100% - 100px);
        }

        #header {
          grid-row: 1;
          grid-column: 1 / 3;
          border: 1px dotted red;
        }

        #nav-bar {
          grid-row: 2;
          grid-column: 1;
          border: 1px dotted blue;
        }

        #content {
          grid-row: 2;
          grid-column: 2;
          border: 1px dotted green;
        }

        #logInButton {
          cursor: pointer;
          border: 1px solid gray;
          border-radius: 4px;
          padding: 5px;
          background: aliceblue;
        }

        #logInButton:hover {
          background: aqua;
        }

        .centered {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
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

  protected render() {
    return html`
    ${
      this._loggedIn ? html`
      <div id="main">
          <div id="header">
            <wl-button @click="${this._logOut}">Cerrar sesión</wl-button>
          </div>
          <div id="nav-bar">
          </div>
          <div id="content" class="centered">
              <h2>Hola mundo!</h2>
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
    this._loggedIn = state.user.isLoggedIn;
  }
}
