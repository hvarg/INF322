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

// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';

@customElement('view-1')
export class View1 extends PageViewElement {
  static get styles() {
    return [
      SharedStyles
    ];
  }

  protected render() {
    return html`
      <div id="perfil">
        <h2>Perfil Alumno</h2>
          <ul>
              <li>Nombre alumno</li>
              <li> Año de Ingreso</li>
              <li>Carrera :</li>
          </ul>
      </div>
    `;
  }
}
