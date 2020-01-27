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
//import { html, css, property, customElement } from 'lit-element';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { store } from '../store.js';
import { ButtonSharedStyles } from './button-shared-styles.js';
//import { ListaCursos } from '../reducers/cursos';

@customElement('nav-bar')
export class NavBar extends connect(store)(LitElement) {
  @property({type: Object})
  public page: string = "";

  static get styles() {
    return [
      ButtonSharedStyles,
      css`
        :host {
            display: block;
        }
        .listaNavegacion
        {
            background-color: aqua;
            font-size: medium;
        }
        .seccion
        {
            font-size: medium;
            
        }
        
      `
    ];
  }
  changePage()
  {
    this.page= "MiPerfil";
  }

  handleClick() {
    console.log({this:this.page});
    this.changePage();
  }


  protected render() {
    return html`
    <div id="listaNavegacion">
        <lu>
            <li class="seccion">
                <button @click="${this.handleClick}">
                Mi Perfil
                </button>
            </li>
            <li class="seccion">
                <button @click="${this.handleClick}">
                Mis Cursos
                </button>
            </li>
            <li class="seccion">
                <button @click="${this.handleClick}">
                Avance Academico
                </button>
            </li>
            <li>
                <div [contador]="Letal"></div>
            </li>
        </lu>
    </div>
    `;
  
  }
  constructor(){
    super();
  }
}