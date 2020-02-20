/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { html, customElement } from 'lit-element';
import { PageViewElement } from './page-view-element.js';

// This element is connected to the Redux store.
import { customCss } from './style';

@customElement('home-page')
export class HomePage extends PageViewElement {
  static get styles() {
    return [customCss];
  }

  protected render() {
    /* Aca va el contenido, pueden poner contenido dummy */
    return html`
    <div id="main">
        <div id="header"></div>
        <div id="nav-bar"></div>
        <div id="content" class="centered">
            <h2>Hola mundo!</h2>
        </div>
    </div>`;
  }
}
