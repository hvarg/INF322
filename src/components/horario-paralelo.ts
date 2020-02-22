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
  public bloques: any = {};

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
  

  handleClick() {
    console.log(this.bloques);
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
          <td id="1-1"></td>
          <td id="1-2"></td>
          <td id="1-3"></td>
          <td id="1-4"></td>
          <td id="1-5"></td>
        </tr>
        <tr>
          <th class="margen-i"> 3-4 <br> 09:45 - 11:15 </th>
          <td id="2-1"></td>
          <td id="2-2"></td>
          <td id="2-3"></td>
          <td id="2-4"></td>
          <td id="2-5"></td>
        </tr>
        <tr>
          <th class="margen-i"> 5-6 <br> 11:30 - 13:00 </th>
          <td id="3-1"></td>
          <td id="3-2"></td>
          <td id="3-3"></td>
          <td id="3-4"></td>
          <td id="3-5"></td>
        </tr>
        <tr>
          <th class="margen-i"> 7-8 <br> 14:00 - 15:30 </th>
          <td id="4-1"></td>
          <td id="4-2"></td>
          <td id="4-3"></td>
          <td id="4-4"></td>
          <td id="4-5"></td>
        </tr>
        <tr>
          <th class="margen-i"> 9-10 <br> 15:40 - 17:10 </th>
          <td id="5-1"></td>
          <td id="5-2"></td>
          <td id="5-3"></td>
          <td id="5-4"></td>
          <td id="5-5"></td>
        </tr>
        <tr>
          <th class="margen-i"> 11-12 <br> 17:20 - 18:50 </th>
          <td id="6-1"></td>
          <td id="6-2"></td>
          <td id="6-3"></td>
          <td id="6-4"></td>
          <td id="6-5"></td>
        </tr>
        <tr>
          <th class="margen-i"> 13-14 <br> 19:00 - 20:30 </th>
          <td id="7-1"></td>
          <td id="7-2"></td>
          <td id="7-3"></td>
          <td id="7-4"></td>
          <td id="7-5"></td>
        </tr>
      </table>
    `;
  
  }
  
}
