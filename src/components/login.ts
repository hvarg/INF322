/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { html, property, customElement } from 'lit-element';
import { PageViewElement } from './page-view-element.js';

// This element is connected to the Redux store.
import { store } from '../store.js';
import { customCss } from './style';
import "weightless/textfield";
import "weightless/button";

// These are the actions needed by this element.
import {
  login,
  navigate
} from '../actions/app.js';

@customElement('login-page')
export class LoginComponent extends PageViewElement {
  @property({type: Boolean})
  private _loggedIn: boolean = false;
  
  static get styles() {
    return [customCss];
  }

  _logIn () {
    this._loggedIn = (Math.random() > .25);
    if (!this._loggedIn) {
        console.log('try again!');
    } else {
        store.dispatch(login({user:'Some name'}))   // El login
        store.dispatch(navigate('/home'))           // Navegacion a pagina inicial
    }
  }

  protected render() {
    /* (3) Implementar aca su componente con sus inputs, la logica de usuario debe pasar por redux para que se pueda
     * hacer la actualizacion en la pagina inicial. En este caso usamod 'login' definido en actions/app */
    return html`
    <div class="centered">
        <wl-textfield label="Usuario"></wl-textfield>
        <wl-textfield label="Contraseña" type="password"></wl-textfield>
        <wl-button @click="${this._logIn}">Entrar</wl-button>
    </div>
    `;
  }
}
