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
import { testCss } from './horario-style';
import { ListaCursos } from '../reducers/cursos';
import 'fontawesome-icon';


@customElement('tabla-guion')
export class TablaGuion extends connect(store)(LitElement) {
    @property({type: Object})
    public cursos: ListaCursos = {};
    public options = {
        valueNames: [ 'Sigla', 'Asignatura' ]
    };

    static get styles() {
        return [testCss,
            ButtonSharedStyles,
            css`
        :host {
            display: block;
        }
        
        .list {
        font-family:sans-serif;
        }
                       
        input {
        border:solid 1px #ccc;
        border-radius: 5px;
        padding:7px 14px;
        margin-bottom:10px
        }
        
        input:focus {
        outline:none;
        border-color:#aaa;
        }
        
        .sort {
        padding:8px 30px;
        border-radius: 6px;
        border:none;
        display:inline-block;
        color:#fff;
        text-decoration: none;
        background-color: #28a8e0;
        height:30px;
        }
        
        .sort:hover {
        text-decoration: none;
        background-color:#1b8aba;
        }
        
        .sort:focus {
        outline:none;
        }
        
        .sort:after {
        display:inline-block;
        width: 0;
        height: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-bottom: 5px solid transparent;
        content:"";
        position: relative;
        top:-10px;
        right:-5px;
        }
        
        .sort.asc:after {
        width: 0;
        height: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 5px solid #fff;
        content:"";
        position: relative;
        top:4px;
        right:-5px;
        }
        
        .sort.desc:after {
        width: 0;
        height: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-bottom: 5px solid #fff;
        content:"";
        position: relative;
        top:-4px;
        right:-5px;
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


    handleClick(e : any) {
        var button = e.target;
        if(button.prefix == "far"){
            button.setAttribute("prefix","fas");
        }else{
            button.setAttribute("prefix","far");
        }
    }

    protected render() {
        return html`
        <table>
    <body>
        <tr>
        <th></th><th>Lunes</th><th>Martes</th><th>Miércoles</th><th>Jueves</th><th>Viernes</th><th>Sábado</th>
        </tr>
        <tr>
            <th>1-2</th>
        </tr>
        <tr>
            <th>3-4</th>
        </tr>
        <tr>
            <th>5-6</th>
        </tr>
        <tr>
            <th>7-8</th>
        </tr>
        <tr>
            <th>9-10</th>
        </tr>
        <tr>
            <th>11-12</th>
        </tr>
        <tr>
            <th>13-14</th>
        </tr>
        
       
    </body>
</table>
    `;

    }
}
