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
import './horario-paralelo';
import "weightless/expansion";
import "weightless/icon"; 

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
        table{
          width: 90%;
          margin: 0 auto;
          padding-bottom: 2%;
        }
        th {
          width: 85%;
        };
        td {
          width: 15%;
        };
      `
    ];
  }
  
  handleClick() {
    console.log("uwu");
  }

  protected render() {
    return html`
    <h2>Listado de Cursos </h2>

      ${Object.keys(this.cursos).map((key) => {
        const item = this.cursos[key];
        return html`
        ${Object.keys(item.paralelos).map((idies) => {
          // @ts-ignore
          const item2 = item.paralelos[idies];
            return html`
            <wl-expansion name="group">
              <span slot="title">${item.sigla}</span>
              <span slot="title">${item.asignatura} - Paralelo ${item2.id}</span>
              <table>
                <tr>
                  <th> <wl-text> <strong> Departamento: </strong> ${item.departamento}</wl-text> </th>
                  <td style="text-align:right;"> <wl-text> <strong> Créditos: </strong> ${item.creditos}</wl-text> </th>
                </tr>
                <tr>
                  <th> <wl-text> <strong> Profesor: </strong> ${item2.profesor}</wl-text> </td>
                  <td style="text-align:right;"> <wl-text> <strong> Cupos: </strong> ${item2.cupos}</wl-text> </td>
                </tr>
              </table>
              <horario-paralelo .ocupados=${item2.bloques}></horario-paralelo>
            </wl-expansion>
          `;
        })}
        `;
      })}
    `;
  
  }
}
