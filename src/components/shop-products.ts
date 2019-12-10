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
            
        }

        
        .sigla {
          width: 10% 
        }
        
        .asignatura{
        width: 25%
        }
        
        .departamento{
        width: 13%
        }
        
        .paralelo{
        width: 22%
        }
        
        .profesor{
        width: 15%
        }
        
        .cupos{
        width: 5%
        }
        
        .horario{
        width: 10%
        }
        
        .left{
        text-align: left;
        }
      `
    ];
  }
  

  handleClick() {
    console.log(this._products);
  }

  protected render() {
    return html`
    <h2 class="custom-css">Listado de Cursos</h2>
    <table class="left" >
      <tbody>
        <tr>
          <th class="sigla">
            <strong> Sigla </strong>
          </th>
          <th class="asignatura">
            <strong> Asignatura </strong>
          </th>
          <th class="departamento">
            <strong> Departamento </strong>
          </th>
          <th class="paralelo">
            <strong> Paralelo </strong>
          </th>
          <th class="profesor">
            <strong> Profesor </strong>
          </th>
          <th class="cupos">
            <strong> Cupos </strong>
          </th>
          <th class="horario">
            <strong> Horario </strong>
          </th>
        </tr>
      ${Object.keys(this._products).map((key) => {
        const item = this._products[key];
        return html`
        ${Object.keys(item.paralelos).map((idies) => {
          // @ts-ignore
          const item2 = item.paralelos[idies];
          if(idies == '0'){
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
            ${item2.id}
          </td> 
          <td>
            ${item2.profesor}
          </td> 
          <td>
            ${item2.cupos}
          </td> 
          <td>
          <button @click="${this.handleClick}">
          Detalles
          </button>
          </td> 
        </tr>
          `;
          } else {
            return html`
          <tr>
          <td>
            
          </td>
          <td>
             
          </td>
          <td>
             
          </td>
          <td>
            ${item2.id}
          </td> 
          <td>
            ${item2.profesor}
          </td> 
          <td>
            ${item2.cupos}
          </td> 
          <td>
          <button @click="${this.handleClick}">
          Detalles
          </button>
          </td> 
        </tr>
          `;
          }
          
        })}
        `;
      })}
      </tbody>
      </table> 
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
