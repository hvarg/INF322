/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { LitElement, html, css, property, customElement } from 'lit-element';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { store } from '../store.js';
import { ButtonSharedStyles } from './button-shared-styles.js';
//import { ListaCursos } from '../reducers/cursos';

@customElement('view-notices')
export class ViewNotices extends connect(store)(LitElement) {
  @property({type: Object})
  public isPressed: number = -1;

  public contador: number = 0;

  static get styles() {
    return [
      ButtonSharedStyles,
      css`
        :host {
            display: block;

        }
        .noticias{
            margin-left: 200px;
        }
        
      `
    ];
  }
  



  protected render() {
    return html`
    <div id="noticias">
        <h2>Noticias USM</h2>
        
    </div>
    `;
  
  }
}
