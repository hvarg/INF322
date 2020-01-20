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
    public sigla = "IWI131";
    public nombre : any;
    public curso : any ;
    public paralelos : any ;
    public sala :any;

    public id = "2";
    public profesor : any;
    public horarios :any;
    public existe :any;

    protected filter() {
        Object.keys(this.cursos).map((key) => {
            const item = this.cursos[key];
            if (item.sigla == this.sigla){
                this.sigla = item.sigla;
                this.curso = item;
                this.nombre = item.asignatura;
                this.paralelos = this.curso.paralelos;
                console.log("Entró");
                console.log(this.curso);
            }
        })
    }

    protected filter_by_paralelo() {
        Object.keys(this.paralelos).map((key) => {
            const item = this.paralelos[key];
            if (item.id == this.id){
                this.id = item.id;
                this.profesor = item.profesor;
                this.horarios = item.horarios;
                console.log("Entró");
                console.log(this.curso);
            }
        })
    }

    protected getSala(dia :any,bloque :any){
        this.existe = false;
        this.sala = "";
        Object.keys(this.horarios).map((key) => {
            const item = this.horarios[key];
            if ((item.dia == dia) && (item.bloque == bloque)){
                console.log(item.sala);
                this.sala = item.sala;
                this.existe = true;
                //return item.sala;
            }
        })
    }


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
        
        .stage-earth {background-color: #FFA726};
        .stage-jupiter {background-color: #81D4FA};
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
        ${this.filter()}
        ${this.filter_by_paralelo()}
        <h2>Paralelo: ${this.id} Profesor: ${this.profesor}</h2>
        <table>
    <body>
        <tr>
        <th></th><th>Lunes</th><th>Martes</th><th>Miércoles</th><th>Jueves</th><th>Viernes</th><th>Sábado</th>
        </tr>
        <tr>
            <th>1-2</th> 
            ${this.getSala("lunes",'1-2')} 
            ${this.existe ? html`
            <td class="stage-earth"> ${this.sala}</td>
            ` : html `
            <td class="stage-jupiter"></td>
            `}
            ${this.getSala("martes",'1-2')} 
            ${this.existe ? html`
            <td align="center" class="stage-earth"> ${this.sala}</td>
            ` : html `
            <td class="stage-jupiter"></td>
            `}
            ${this.getSala("miércoles",'1-2')} 
            ${this.existe ? html`
            <td class="stage-earth"> ${this.sala}</td>
            ` : html `
            <td class="stage-jupiter"></td>
            `}
            ${this.getSala("jueves",'1-2')} 
            ${this.existe ? html`
            <td class="stage-earth"> ${this.sala}</td>
            ` : html `
            <td class="stage-jupiter"></td>
            `}${this.getSala("viernes",'1-2')} 
            ${this.existe ? html`
            <td class="stage-earth"> ${this.sala}</td>
            ` : html `
            <td class="stage-jupiter"></td>
            `}
            ${this.getSala("sábado",'1-2')} 
            ${this.existe ? html`
            <td class="stage-earth"> ${this.sala}</td>
            ` : html `
            <td class="stage-jupiter"></td>
            `}

        </tr>
        <tr>
            <th>3-4</th>
            ${this.getSala("lunes",'3-4')} 
            ${this.existe ? html`
            <td class="stage-earth"> ${this.sala}</td>
            ` : html `
            <td class="stage-jupiter"></td>
            `}
            ${this.getSala("martes",'3-4')} 
            ${this.existe ? html`
            <td class="stage-earth"> ${this.sala}</td>
            ` : html `
            <td class="stage-jupiter"></td>
            `}
            ${this.getSala("miércoles",'3-4')} 
            ${this.existe ? html`
            <td class="stage-earth"> ${this.sala}</td>
            ` : html `
            <td class="stage-jupiter"></td>
            `}
            ${this.getSala("jueves",'3-4')} 
            ${this.existe ? html`
            <td class="stage-earth"> ${this.sala}</td>
            ` : html `
            <td class="stage-jupiter"></td>
            `}${this.getSala("viernes",'3-4')} 
            ${this.existe ? html`
            <td class="stage-earth"> ${this.sala}</td>
            ` : html `
            <td class="stage-jupiter"></td>
            `}
            ${this.getSala("sábado",'3-4')} 
            ${this.existe ? html`
            <td class="stage-earth"> ${this.sala}</td>
            ` : html `
            <td class="stage-jupiter"></td>
            `}
        
        </tr>
        <tr>
            <th>5-6</th> 
            ${this.getSala("lunes",'5-6')} 
            ${this.existe ? html`
            <td class="stage-earth"> ${this.sala}</td>
            ` : html `
            <td class="stage-jupiter"></td>
            `}
            ${this.getSala("martes",'5-6')} 
            ${this.existe ? html`
            <td class="stage-earth"> ${this.sala}</td>
            ` : html `
            <td class="stage-jupiter"></td>
            `}
            ${this.getSala("miércoles",'5-6')} 
            ${this.existe ? html`
            <td class="stage-earth"> ${this.sala}</td>
            ` : html `
            <td class="stage-jupiter"></td>
            `}
            ${this.getSala("jueves",'5-6')} 
            ${this.existe ? html`
            <td class="stage-earth"> ${this.sala}</td>
            ` : html `
            <td class="stage-jupiter"></td>
            `}${this.getSala("viernes",'5-6')} 
            ${this.existe ? html`
            <td class="stage-earth"> ${this.sala}</td>
            ` : html `
            <td class="stage-jupiter"></td>
            `}
            ${this.getSala("sábado",'5-6')} 
            ${this.existe ? html`
            <td class="stage-earth"> ${this.sala}</td>
            ` : html `
            <td class="stage-jupiter"></td>
            `}
        </tr>
        <tr>
            <th>7-8</th>
            ${this.getSala("lunes",'7-8')} 
            ${this.existe ? html`
            <td class="stage-earth"> ${this.sala}</td>
            ` : html `
            <td class="stage-jupiter"></td>
            `}
            ${this.getSala("martes",'7-8')} 
            ${this.existe ? html`
            <td class="stage-earth"> ${this.sala}</td>
            ` : html `
            <td class="stage-jupiter"></td>
            `}
            ${this.getSala("miércoles",'7-8')} 
            ${this.existe ? html`
            <td class="stage-earth"> ${this.sala}</td>
            ` : html `
            <td class="stage-jupiter"></td>
            `}
            ${this.getSala("jueves",'7-8')} 
            ${this.existe ? html`
            <td class="stage-earth"> ${this.sala}</td>
            ` : html `
            <td class="stage-jupiter"></td>
            `}${this.getSala("viernes",'7-8')} 
            ${this.existe ? html`
            <td class="stage-earth"> ${this.sala}</td>
            ` : html `
            <td class="stage-jupiter"></td>
            `}
            ${this.getSala("sábado",'7-8')} 
            ${this.existe ? html`
            <td class="stage-earth"> ${this.sala}</td>
            ` : html `
            <td class="stage-jupiter"></td>
            `}
        </tr>
        <tr>
            <th>9-10</th> 
            ${this.getSala("lunes",'9-10')} 
            ${this.existe ? html`
            <td class="stage-earth"> ${this.sala}</td>
            ` : html `
            <td class="stage-jupiter"></td>
            `}
            ${this.getSala("martes",'9-10')} 
            ${this.existe ? html`
            <td class="stage-earth"> ${this.sala}</td>
            ` : html `
            <td class="stage-jupiter"></td>
            `}
            ${this.getSala("miércoles",'9-10')} 
            ${this.existe ? html`
            <td class="stage-earth"> ${this.sala}</td>
            ` : html `
            <td class="stage-jupiter"></td>
            `}
            ${this.getSala("jueves",'9-10')} 
            ${this.existe ? html`
            <td class="stage-earth"> ${this.sala}</td>
            ` : html `
            <td class="stage-jupiter"></td>
            `}${this.getSala("viernes",'9-10')} 
            ${this.existe ? html`
            <td class="stage-earth"> ${this.sala}</td>
            ` : html `
            <td class="stage-jupiter"></td>
            `}
            ${this.getSala("sábado",'9-10')} 
            ${this.existe ? html`
            <td class="stage-earth"> ${this.sala}</td>
            ` : html `
            <td class="stage-jupiter"></td>
            `}
        </tr>
        <tr>
            <th>11-12</th> 
            ${this.getSala("lunes",'11-12')} 
            ${this.existe ? html`
            <td class="stage-earth"> ${this.sala}</td>
            ` : html `
            <td class="stage-jupiter"></td>
            `}
            ${this.getSala("martes",'11-12')} 
            ${this.existe ? html`
            <td class="stage-earth"> ${this.sala}</td>
            ` : html `
            <td class="stage-jupiter"></td>
            `}
            ${this.getSala("miércoles",'11-12')} 
            ${this.existe ? html`
            <td class="stage-earth"> ${this.sala}</td>
            ` : html `
            <td class="stage-jupiter"></td>
            `}
            ${this.getSala("jueves",'11-12')} 
            ${this.existe ? html`
            <td class="stage-earth"> ${this.sala}</td>
            ` : html `
            <td class="stage-jupiter"></td>
            `}${this.getSala("viernes",'11-12')} 
            ${this.existe ? html`
            <td class="stage-earth"> ${this.sala}</td>
            ` : html `
            <td class="stage-jupiter"></td>
            `}
            ${this.getSala("sábado",'11-12')} 
            ${this.existe ? html`
            <td class="stage-earth"> ${this.sala}</td>
            ` : html `
            <td class="stage-jupiter"></td>
            `}
  
        </tr>
        <tr>
            <th>13-14</th> 
            ${this.getSala("lunes",'13-14')} 
            ${this.existe ? html`
            <td class="stage-earth"> ${this.sala}</td>
            ` : html `
            <td class="stage-jupiter"></td>
            `}
            ${this.getSala("martes",'13-14')} 
            ${this.existe ? html`
            <td class="stage-earth"> ${this.sala}</td>
            ` : html `
            <td class="stage-jupiter"></td>
            `}
            ${this.getSala("miércoles",'13-14')} 
            ${this.existe ? html`
            <td class="stage-earth"> ${this.sala}</td>
            ` : html `
            <td class="stage-jupiter"></td>
            `}
            ${this.getSala("jueves",'13-14')} 
            ${this.existe ? html`
            <td class="stage-earth"> ${this.sala}</td>
            ` : html `
            <td class="stage-jupiter"></td>
            `}${this.getSala("viernes",'13-14')} 
            ${this.existe ? html`
            <td class="stage-earth"> ${this.sala}</td>
            ` : html `
            <td class="stage-jupiter"></td>
            `}
            ${this.getSala("sábado",'13-14')} 
            ${this.existe ? html`
            <td class="stage-earth"> ${this.sala}</td>
            ` : html `
            <td class="stage-jupiter"></td>
            `}
        </tr>
        
       
    </body>
</table>
    `;

    }
}
