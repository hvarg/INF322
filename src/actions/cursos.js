/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
export const GET_CURSOS = 'GET_CURSOS';
;
const CURSOS_LIST = [
    { "id": 1, "sigla": 'IWI131', "asignatura": 'Programación', "departamento": 'Informática',
        "paralelos": [{ "id": 1, "profesor": 'profe1', "cupos": 20, "horario": [{ "bloque": '1-2', "sala": 'M-302' }] },
            { "id": 2, "profesor": 'profe2', "cupos": 30, "horario": [{ "bloque": '1-2', "sala": 'M-123' },
                    { "bloque": '3-4', "sala": 'F-106' }] }] },
    { "id": 3, "sigla": 'FIS100', "asignatura": 'Introducción a la Física', "departamento": 'Física',
        "paralelos": [{ "id": 1, "profesor": 'Hakobyan', "cupos": 50, "horario": [{ "bloque": '13-14', "sala": 'A-234' }] }] },
    { "id": 4, "sigla": 'MAT021', "asignatura": 'Matemáticas I', "departamento": 'Matemáticas',
        "paralelos": [{ "id": 1, "profesor": 'El maravilloso Yansen', "cupos": 25, "horario": [{ "bloque": '9-10', "sala": 'G-213' }] }] },
    { "id": 5, "sigla": 'MAT022', "asignatura": 'Matemáticas II', "departamento": 'Matemáticas',
        "paralelos": [{ "id": 1, "profesor": 'tuma', "cupos": 14, "horario": [{ "bloque": '13-14', "sala": 'labpro' }] }] }
];
export const getAllCursos = () => (dispatch) => {
    const cursos = CURSOS_LIST.reduce((obj, curso) => {
        obj[curso.id] = curso;
        return obj;
    }, {});
    dispatch({
        type: GET_CURSOS,
        cursos
    });
};
