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
import { ListaCursos} from '../reducers/cursos';

@customElement('horario-clases')
export class HorarioClases extends connect(store)(LitElement) {
  @property({type: Object})
  public cursos: ListaCursos = {};

  static get styles() {
    return [
      ButtonSharedStyles,
      css`
        :host {
            display: block;
        }

        tr:nth-child(even) {
          background-color: #dfe6ec;
        }

        .sigla {
            width: 10%;
            text-align: left;
            background-color: #abc;
        }
        
        .asignatura{
            width: 25%;
            text-align: left;
            background-color: #abc;
        }
        
        .departamento{
            width: 15%;
            text-align: left;
            background-color: #abc;
        }
        
        .paralelo{
            width: 5%;
            text-align: center;
            background-color: #abc;
        }
        
        .profesor{
            width: 15%;
            background-color: #abc;
        }
        
        .cupos{
            width: 5%;
            background-color: #abc;
        }
        
        .horario{
            width: 10%;
            background-color: #abc;
        };
      `
    ];
  }
  
  handleClick() {
    console.log(this.cursos);
  }

  protected render() {
    return html`
    <h2>Listado de Cursos </h2>
    <table>
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
      ${Object.keys(this.cursos).map((key) => {
        const item = this.cursos[key];
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
          <td style="text-align:center;">
            ${item2.id}
          </td> 
          <td>
            ${item2.profesor}
          </td> 
          <td style="text-align:center;">
            ${item2.cupos}
          </td> 
          <td style="text-align:center;">
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
          <td style="text-align:center;">
            ${item2.id}
          </td> 
          <td>
            ${item2.profesor}
          </td> 
          <td style="text-align:center;">
            ${item2.cupos}
          </td> 
          <td style="text-align:center;">
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
}
