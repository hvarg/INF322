/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { LitElement, html, property, PropertyValues, customElement } from 'lit-element';
//import { PageViewElement } from './page-view-element.js';
import { setPassiveTouchGestures } from '@polymer/polymer/lib/utils/settings.js';
import { installMediaQueryWatcher } from 'pwa-helpers/media-query.js';
import { installOfflineWatcher } from 'pwa-helpers/network.js';
import { installRouter } from 'pwa-helpers/router.js';
import { updateMetadata } from 'pwa-helpers/metadata.js';
import { connect } from 'pwa-helpers/connect-mixin';

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
import './login.js';
import './view404.js';
import './home.js';

@customElement('main-page')
export class MainPage extends connect(store)(LitElement) {
  @property({type: String})
  private _page: string = '';

  @property({type: Object})
  private _user: any = null;

  private appTitle : string = 'SIGA';
  
  static get styles() {
    return [customCss];
  }

  protected render() {
    /* (2) Aca la forma de separar el contendio es simple, si estamos logeados mostramos componentes dependiendo de 'page',
     * en caso contrario mostramos el componente de login. */
    return html`
    <p>Current page: ${this._page}</p>
    ${this._user ? html`
        <home-page class="page" ?active="${this._page === 'home'}"></home-page>
        <view404-page class="page" ?active="${this._page === 'view404'}"></view404-page>
    ` : html`
        <login-page class="page" active></login-page>
    `}`;
  }

  constructor() {
    super();
    // To force all event listeners for gestures to be passive.
    // See https://www.polymer-project.org/3.0/docs/devguide/settings#setting-passive-touch-gestures
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
    this._user = state.app!.user;
  }
}
