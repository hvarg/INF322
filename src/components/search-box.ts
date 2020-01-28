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
//import "compass/css3";
//import { ListaCursos } from '../reducers/cursos';

@customElement('search-box')
export class SearchBox extends connect(store)(LitElement) {
  @property({type: Object})
  public isPressed: number = -1;

  static get styles() {
    return [
      ButtonSharedStyles,
      css`
        .flexsearch--wrapper {
            height: auto;
            width: auto;
            max-width: 100%;
            overflow: hidden;
            background: transparent;
            margin: 0;
            position: static;
        }
            
        .flexsearch--form {
            overflow: hidden;
            position: relative;
        }
            
        .flexsearch--input-wrapper {
            padding: 0 66px 0 0; /* Right padding for submit button width */
            overflow: hidden;
        }
        
        .flexsearch--input {
          width: 100%;
        }
        
       
        .flexsearch {
          padding-left: 200px;
          padding-top: 0px;
          width: 200px;
          margin-left: 400px;
        }
        
        .flexsearch--input {
          -webkit-box-sizing: content-box;
            -moz-box-sizing: content-box;
            box-sizing: content-box;
             height: 60px;
          padding: 0 46px 0 10px;
            border-color: #888;
          border-radius: 35px; /* (height/2) + border-width */
          border-style: solid;
            border-width: 5px;
          margin-top: 15px;
          color: #333;
          font-family: 'Helvetica', sans-serif;
            font-size: 26px;
            -webkit-appearance: none;
            -moz-appearance: none;
        }
            
        .flexsearch--submit {
          position: absolute;
            right: 0;
            top: 0;
            display: block;
            width: 60px;
            height: 60px;
          padding: 0;
          border: none;
            margin-top: 20px; /* margin-top + border-width */
          margin-right: 5px; /* border-width */
            background: transparent;
          color: #888;
          font-family: 'Helvetica', sans-serif;
          font-size: 40px;
          line-height: 60px;
        }
        
        .flexsearch--input:focus {
          outline: none;
          border-color: #333;
        }
        
        .flexsearch--input:focus.flexsearch--submit {
             color: #333; 
        }
        
        .flexsearch--submit:hover {
          color: #333;
          cursor: pointer;
        }
        
        ::-webkit-input-placeholder {
            color: #888;  
        }
        
        input:-moz-placeholder {
          color: #888
        }
        
      `
    ];
  }
  

  handleClick(which: number) {
    this.isPressed = which;
    console.log(which);
    console.log("letal");
    //Aca realizar el proceso de cambio de pagina, dado que aca ya se presiono el boton
    
  }


  protected render() {
    return html`
    <div class="flexsearch">
		<div class="flexsearch--wrapper">
			<form class="flexsearch--form"  >
				<div class="flexsearch--input-wrapper">
					<input class="flexsearch--input" type="search" placeholder="search">
				</div>
				<input class="flexsearch--submit" type="submit" value="&#10140;"/>
			</form>
		</div>
    </div>
    `;
  
  }
}
