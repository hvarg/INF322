/**
 @license
 Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 Code distributed by Google as part of the polymer project is also
 subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import {LitElement, html, css, property, customElement} from 'lit-element';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { store } from '../store';
import { ButtonSharedStyles } from './button-shared-styles';
import { ListaCursos } from '../reducers/cursos';
import 'fontawesome-icon';

@customElement('ramo-paralelo')
export class RamoParalelo extends connect(store)(LitElement) {
  @property({type: Object})
  public cursos: ListaCursos = {};
  public sigla = "IWI131";
  public curso : any = this.filter;
  public paralelos : any = this.curso.paralelos;

  protected filter() {
    Object.keys(this.cursos).map((key) => {
            const item = this.cursos[key];
            if (item.sigla == this.sigla){
                this.curso = item;
            }
    })
  }

  static get styles() {
      return [
        ButtonSharedStyles,
        css`
          :host {
              display: block;
          }

          .paralelo {
              width: 20%
          }

          .profesor{
              width: 45%
          }

          .cupos{
              width: 20%
          }

          .horario{
              width: 15%
          }

          .left{
              text-align: left;
          }
        `
      ];
  }

  handleClick(e : any) {
      var button = e.target;
      if(button.prefix == "far"){
        button.setAttribute("prefix","fas");
        console.log(e.target.id);
      }else{
        button.setAttribute("prefix","far");
      }
  }

  protected render() {
      return html`
      <h2>Sigla: </h2>
      <table>
        <tbody>
        <tr>
            <th class="Paralelo">
              <strong> Paralelo </strong>
            </th>
            <th class="Profesor">
              <strong> Profesor </strong>
            </th>
            <th class="Cupos">
              <strong> Cupos </strong>
            </th>
            <th>
            <strong> Horario </strong>
            </th>
          </tr>
        ${Object.keys(this.paralelos).map((key) => {
        const item = this.paralelos[key];
        return html`
          ${Object.keys(item.paralelos).map((idies) => {
          // @ts-ignore
          const item2 = item.paralelos[idies];
          if(idies == '0'){
            return html`
            <tr>
            <td>
              ${item.id}
            </td>
            <td>
              ${item.profesor}
            </td>
            <td>
              ${item.cupos}
            </td>
            <td>
            <button @click="${this.handleClick}"><fontawesome-icon id="${item.id}" prefix="far" name="plus-square" fixed-width></fontawesome-icon></button>
            </td>
          </tr>
            `;
          } else {
            return html`
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
