# Los DIO-Boyz

* Cada paralelo de cada asignatura muestra su horario respectivo e información general (Departamento que lo dicta, profesor, cupos y cantidad de créditos).

* Cada paralelo tiene un array llamado `bloques`, el cual tiene la siguiente estructura:

`bloques:[

    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""]
]`

En cada celda respectiva, se debe ingresar el string con el identificador de la sala donde se realiza dicha clase. Este array se entrega como parámetro al web component `horario-paralelo`, el cual se encarga de mostrarlo con el mismo formato con el que se ve actualmente el horario en SIGA.

Un ejemplo sería:

`bloques:[

    ["P311", "", "", "", ""],
    ["P311", "", "", "", ""],
    ["P311", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""]
]`
Donde el paralelo del ramo tiene clases los días lunes en los bloques 1-2, 3-4 y 5-6 en la sala P311.
