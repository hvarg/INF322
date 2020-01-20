/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

/* En este archivo se escriben las aciones que serán llamadas por la vista, en general se debería obtener
 * datos de una API, pero acá, como ejemplo están escritos directamente. */

import { Action, ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../store.js';
import { ListaUsuarios} from '../reducers/usuarios';
export const GET_USUARIOS = 'GET_USUARIOS';

export interface ActionGetUsuarios extends Action<'GET_USUARIOS'> {usuarios: ListaUsuarios};
export type UsuariosAction = ActionGetUsuarios;

type ThunkResult = ThunkAction<void, RootState, undefined, UsuariosAction>;

const USUARIOS_LIST = [
  { "email": 'prueba1@prueba.cl', "password": '111111'},
  { "email": 'prueba2@prueba.cl', "password": '222222'},
  { "email": 'prueba3@prueba.cl', "password": '333333'},
  { "email": 'prueba4@prueba.cl', "password": '444444'} 
];

export const getAllUsuarios: ActionCreator<ThunkResult> = () => (dispatch) => {
  const usuarios = USUARIOS_LIST.reduce((obj, usuario) => {
    obj[usuario.email] = usuario;
    return obj
  }, {} as ListaUsuarios);

  dispatch({
    type: GET_USUARIOS,
    usuarios
  });
};
