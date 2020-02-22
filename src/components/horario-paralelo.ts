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

@customElement('horario-paralelo')
export class HorarioParalelo extends connect(store)(LitElement) {
  @property({type: Object})
  public ocupados: any = {};

  static get styles() {
    return [
      ButtonSharedStyles,
      css`
        :host {
            display: block;
            
        }

        table {
          border-spacing: 0.5rem;
          border-collapse: collapse;
          margin: 0 auto;
        }

        td, th {
          width: 10%;
          height: 0.5%;
          border: 1px solid #ccc;
          text-align: center;
        }

        th {
          border-color: #ccc;
          border-top: 0;
          border-bottom: 0;
          border-left: 0;
        }

        body {
          padding: 1rem;
        }
        
        .margen-s{
            font-weight: bold;
            background: #033558;
            color: white;
        }
        
        .margen-i{
          font-weight: normal;
          text-align: center;
          width: 5%;
      };
      `
    ];
  }

  protected render() {
    return html`
      <table>
        <tr>
          <th class="margen-s" style="background-color: white;"></th>
          <th class="margen-s"> Lunes </th>
          <th class="margen-s"> Martes</th>
          <th class="margen-s"> Miércoles</th>
          <th class="margen-s"> Jueves</th>
          <th class="margen-s"> Viernes</th>
        </tr>
        <tr>
          <th class="margen-i"> 1-2 <br> 08:00 - 09:30 </th>
          <td style="${(this.ocupados[0][0]=="")?"":"background-color:#ff9900"}"> ${this.ocupados[0][0]} </td>
          <td style="${(this.ocupados[0][1]=="")?"":"background-color:#ff9900"}"> ${this.ocupados[0][1]} </td>
          <td style="${(this.ocupados[0][2]=="")?"":"background-color:#ff9900"}"> ${this.ocupados[0][2]} </td>
          <td style="${(this.ocupados[0][3]=="")?"":"background-color:#ff9900"}"> ${this.ocupados[0][3]} </td>
          <td style="${(this.ocupados[0][4]=="")?"":"background-color:#ff9900"}"> ${this.ocupados[0][4]} </td>
        </tr>

        <tr>
          <th class="margen-i"> 3-4 <br> 09:45 - 11:15 </th>
          <td style="${(this.ocupados[1][0]=="")?"":"background-color:#ff9900"}"> ${this.ocupados[1][0]} </td>
          <td style="${(this.ocupados[1][1]=="")?"":"background-color:#ff9900"}"> ${this.ocupados[1][1]} </td>
          <td style="${(this.ocupados[1][2]=="")?"":"background-color:#ff9900"}"> ${this.ocupados[1][2]} </td>
          <td style="${(this.ocupados[1][3]=="")?"":"background-color:#ff9900"}"> ${this.ocupados[1][3]} </td>
          <td style="${(this.ocupados[1][4]=="")?"":"background-color:#ff9900"}"> ${this.ocupados[1][4]} </td>
        </tr>
        <tr>
          <th class="margen-i"> 5-6 <br> 11:30 - 13:00 </th>
          <td style="${(this.ocupados[2][0]=="")?"":"background-color:#ff9900"}"> ${this.ocupados[2][0]} </td>
          <td style="${(this.ocupados[2][1]=="")?"":"background-color:#ff9900"}"> ${this.ocupados[2][1]} </td>
          <td style="${(this.ocupados[2][2]=="")?"":"background-color:#ff9900"}"> ${this.ocupados[2][2]} </td>
          <td style="${(this.ocupados[2][3]=="")?"":"background-color:#ff9900"}"> ${this.ocupados[2][3]} </td>
          <td style="${(this.ocupados[2][4]=="")?"":"background-color:#ff9900"}"> ${this.ocupados[2][4]} </td>
        </tr>
        <tr>
          <th class="margen-i"> 7-8 <br> 14:00 - 15:30 </th>
          <td style="${(this.ocupados[3][0]=="")?"":"background-color:#ff9900"}"> ${this.ocupados[3][0]} </td>
          <td style="${(this.ocupados[3][1]=="")?"":"background-color:#ff9900"}"> ${this.ocupados[3][1]} </td>
          <td style="${(this.ocupados[3][2]=="")?"":"background-color:#ff9900"}"> ${this.ocupados[3][2]} </td>
          <td style="${(this.ocupados[3][3]=="")?"":"background-color:#ff9900"}"> ${this.ocupados[3][3]} </td>
          <td style="${(this.ocupados[3][4]=="")?"":"background-color:#ff9900"}"> ${this.ocupados[3][4]} </td>
        </tr>
        <tr>
          <th class="margen-i"> 9-10 <br> 15:40 - 17:10 </th>
          <td style="${(this.ocupados[4][0]=="")?"":"background-color:#ff9900"}"> ${this.ocupados[4][0]} </td>
          <td style="${(this.ocupados[4][1]=="")?"":"background-color:#ff9900"}"> ${this.ocupados[4][1]} </td>
          <td style="${(this.ocupados[4][2]=="")?"":"background-color:#ff9900"}"> ${this.ocupados[4][2]} </td>
          <td style="${(this.ocupados[4][3]=="")?"":"background-color:#ff9900"}"> ${this.ocupados[4][3]} </td>
          <td style="${(this.ocupados[4][4]=="")?"":"background-color:#ff9900"}"> ${this.ocupados[4][4]} </td>
        </tr>
        <tr>
          <th class="margen-i"> 11-12 <br> 17:20 - 18:50 </th>
          <td style="${(this.ocupados[5][0]=="")?"":"background-color:#ff9900"}"> ${this.ocupados[5][0]} </td>
          <td style="${(this.ocupados[5][1]=="")?"":"background-color:#ff9900"}"> ${this.ocupados[5][1]} </td>
          <td style="${(this.ocupados[5][2]=="")?"":"background-color:#ff9900"}"> ${this.ocupados[5][2]} </td>
          <td style="${(this.ocupados[5][3]=="")?"":"background-color:#ff9900"}"> ${this.ocupados[5][3]} </td>
          <td style="${(this.ocupados[5][4]=="")?"":"background-color:#ff9900"}"> ${this.ocupados[5][4]} </td>
        </tr>
        <tr>
          <th class="margen-i"> 13-14 <br> 19:00 - 20:30 </th>
          <td style="${(this.ocupados[6][0]=="")?"":"background-color:#ff9900"}"> ${this.ocupados[6][0]} </td>
          <td style="${(this.ocupados[6][1]=="")?"":"background-color:#ff9900"}"> ${this.ocupados[6][1]} </td>
          <td style="${(this.ocupados[6][2]=="")?"":"background-color:#ff9900"}"> ${this.ocupados[6][2]} </td>
          <td style="${(this.ocupados[6][3]=="")?"":"background-color:#ff9900"}"> ${this.ocupados[6][3]} </td>
          <td style="${(this.ocupados[6][4]=="")?"":"background-color:#ff9900"}"> ${this.ocupados[6][4]} </td>
        </tr>
      </table>
    `;
  
  }
  
}
