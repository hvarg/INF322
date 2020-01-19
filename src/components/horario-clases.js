/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css, property, customElement } from 'lit-element';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { store } from '../store';
import { ButtonSharedStyles } from './button-shared-styles';
import 'fontawesome-icon';
let HorarioClases = class HorarioClases extends connect(store)(LitElement) {
    constructor() {
        super(...arguments);
        this.cursos = {};
        this.options = {
            valueNames: ['Sigla', 'Asignatura']
        };
    }
    static get styles() {
        return [ButtonSharedStyles,
            css `
        :host {
            display: block;
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
    handleClick(e) {
        var button = e.target;
        if (button.prefix == "far") {
            button.setAttribute("prefix", "fas");
            console.log(e.target.id);
        }
        else {
            button.setAttribute("prefix", "far");
        }
    }
    render() {
        return html `
    <h2>Listado de Cursos</h2>
    <table>
      <tbody>
      <tr>
          <th class="Sigla">
            <strong> Sigla </strong>
          </th>
          <th class="Asignatura">
            <strong> Asignatura </strong>
          </th>
          <th>
          <strong> Más información </strong>
          </th>
        </tr>
      ${Object.keys(this.cursos).map((key) => {
            const item = this.cursos[key];
            return html `
        ${Object.keys(item.paralelos).map((idies) => {
                // @ts-ignore
                const item2 = item.paralelos[idies];
                if (idies == '0') {
                    return html `
          <tr>
          <td>
            ${item.sigla}
          </td>
          <td>
            ${item.asignatura}
          </td>
          <td>
          <button @click="${this.handleClick}"><fontawesome-icon id="${item.sigla}" prefix="far" name="plus-square" fixed-width></fontawesome-icon></button>
          </td> 
        </tr>
          `;
                }
                else {
                    return html `
          `;
                }
            })}
        `;
        })}
      </tbody>
      </table> 
    `;
    }
};
__decorate([
    property({ type: Object })
], HorarioClases.prototype, "cursos", void 0);
HorarioClases = __decorate([
    customElement('horario-clases')
], HorarioClases);
export { HorarioClases };
