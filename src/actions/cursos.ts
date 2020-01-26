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
  { "id": 1, "sigla": 'IWI131', "asignatura": 'Programación', "departamento": 'Informática' , "creditos": 3,
    "paralelos": [{ "id": 1, "profesor": 'profe1', "correo":'correo1@correo.cl', "cupos": 20, "horarios":[{"dia":'lunes',"bloque":'1-2', "sala":'M-302'}]},
                  { "id": 2, "profesor": 'profe2', "correo":'correo2@correo.cl', "cupos": 30, "horarios":[{"dia":'martes',"bloque": '1-2', "sala":'M-123'},
                                                                           {"dia":'miércoles',"bloque": '3-4', "sala":'F-106'}]}]},
  { "id": 3, "sigla": 'FIS100', "asignatura": 'Introducción a la Física', "departamento": 'Física' , "creditos": 5,
    "paralelos": [{"id": 1, "profesor": 'Hakobyan', "correo":'correo3@correo.cl', "cupos": 50, "horarios":[{"dia":'jueves',"bloque": '13-14', "sala":'A-234'}]}] },
  { "id": 4, "sigla": 'MAT021' , "asignatura": 'Matemáticas I', "departamento": 'Matemáticas', "creditos": 5,
    "paralelos": [{"id": 1, "profesor": 'El maravilloso Yansen', "correo":'correo4@correo.cl', "cupos": 25,"horarios":[{"dia":'viernes',"bloque":'9-10', "sala":'G-213'}]}] },
  { "id": 5, "sigla": 'MAT022' , "asignatura": 'Matemáticas II' , "departamento": 'Matemáticas' , "creditos": 4,
    "paralelos": [{"id": 1, "profesor": 'tuma', "correo":'correo5@correo.cl', "cupos": 14, "horarios":[{"dia":'sábado',"bloque":'13-14',"sala":'labpro'}]}] }
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


