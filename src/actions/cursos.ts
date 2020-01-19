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
import { ListaCursos} from '../reducers/cursos';
export const GET_CURSOS = 'GET_CURSOS';

export interface ActionGetCursos extends Action<'GET_CURSOS'> {cursos: ListaCursos};
export type CursosAction = ActionGetCursos;

type ThunkResult = ThunkAction<void, RootState, undefined, CursosAction>;

const CURSOS_LIST = [
  { "id": 1, "sigla": 'IWI131', "asignatura": 'Programación', "departamento": 'Informática' , "paralelos": [{ "id": 1, "profesor": 'Nelson Vega', "cupos": 20, "bloques": [ ["3,2","P301"] ]},  { "id": 2, "profesor": 'Moltedo', "cupos": 30, "bloques": [["1,1","C201"]]}]},
  { "id": 3, "sigla": 'FIS100', "asignatura": 'Introducción a la Física', "departamento": 'Física' , "paralelos": [{"id": 1, "profesor": 'Hakobyan', "cupos": 50, "bloques": []}] },
  { "id": 4, "sigla": 'MAT021' , "asignatura": 'Matemáticas I', "departamento": 'Matemáticas', "paralelos": [{"id": 1, "profesor": 'La maravillosa Astudillo', "cupos": 25, "bloques": []}] },
  { "id": 5, "sigla": 'MAT022' , "asignatura": 'Matemáticas II' , "departamento": 'Matemáticas' , "paralelos": [{"id": 1, "profesor": 'El mismísimo TUMA', "cupos": 14, "bloques": []}] } 
];

export const getAllCursos: ActionCreator<ThunkResult> = () => (dispatch) => {
  const cursos = CURSOS_LIST.reduce((obj, curso) => {
    obj[curso.id] = curso;
    return obj
  }, {} as ListaCursos);

  dispatch({
    type: GET_CURSOS,
    cursos
  });
};
