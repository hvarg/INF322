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

// This element is connected to the Redux store.
import { store, RootState } from '../store.js';

// These are the elements needed by this element.
// import './shop-item.js';

// These are the actions needed by this element.
import { getAllProducts } from '../actions/shop.js';

// These are the elements needed by this element.
//import { addToCartIcon } from './my-icons.js';

// These are the shared styles needed by this element.
import { ButtonSharedStyles } from './button-shared-styles.js';
import { ListaCursos } from '../reducers/shop.js';

@customElement('shop-products')
export class ShopProducts extends connect(store)(LitElement) {
  @property({type: Object})
  private _products: ListaCursos = {};

  static get styles() {
    return [
      ButtonSharedStyles,
      css`
        :host {
          display: block;
        }

        .custom-css {
            background: gray;
            border: 2px solid green;
        }

        .custom-css:hover {
            background: red;
            color: white;
            border: 1px solid blue;
        }
      `
    ];
  }
  

  handleClick() {
    console.log(this._products);
  }

  protected render() {
    return html`
    <h2 class="custom-css">Listado de cursos</h2>
    <table >
      <tbody>
        <tr>
          <th>
            <strong> Sigla </strong>
          </th>
          <th>
            <strong> Asignatura </strong>
          </th>
          <th>
            <strong> Departamento </strong>
          </th>
          <th>
            <strong> Paralelo </strong>
          </th>
          <th>
            <strong> Profesor </strong>
          </th>
          <th>
            <strong> Cupos </strong>
          </th>
          <th>
            <strong> Horario </strong>
          </th>
        </tr>
      ${Object.keys(this._products).map((key) => {
        const item = this._products[key];
        return html`
        <tr>
          <td>
            ${item.sigla}
          </td>
          <td>
            ${item.asignatura}
          </td>
          <td>
            ${item.departamento}
          </td> 
          <td>
            ${item.paralelos}
          </td> 
          <td>
            cosa
          </td> 
          <td>
            cosa
          </td> 
          <td>
          <button @click="${this.handleClick}">
          Detalles
          </button>
          </td> 
          
        </tr>
      </tbody>
      </table> 
        `;
      })}
    `;
  
  }

  protected firstUpdated() {
    store.dispatch(getAllProducts());
  }
  /*
  private _addButtonClicked(e: Event) {
    store.dispatch(addToCart((e.currentTarget as HTMLButtonElement).dataset['index']));
  }
  */

  // This is called every time something is updated in the store.
  stateChanged(state: RootState) {
    this._products = state.shop!.products;
  }
}
