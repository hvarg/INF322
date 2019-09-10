# Evaluación interfaz: SIGA (Alumnos)

## Indice

1. [Concepto del producto](#concepto-del-producto)
2. [Comunidad usuaria](#comunidad-usuaria)
3. [Análisis de tareas](#analisis_de_tareas)
4. [Análisis de datos](#analisis_de_datos)
5. [Identificación de falencias y oportunidades de mejora](#identificacion-de-falencias-y-oportunidades-de-mejora)
6. [Propuesta](#propuesta)
7. [Definición de tareas](#definicion-de-tareas)
8. [Diseño](#diseño)
9. [Evaluación](#evaluacion)

## Concepto del producto
**Responder a la ¿Para qué fue creado el sistema?**

SIGA es un sistema creado para facilitar la administración de ramos para estudiantes en la USM. Esto para que los alumnos en línea puedan gestionar cosas como registrar su propio asignaturas, ver sus resultados y su horario.

## Comunidad usuaria
**¿Quien usa el sistema?, edad, sexo, etc**

Los usarios son estudiantes entre 18-27 años, con que consiste de 70% hombres y 30% mujeres. Generalmente los usarios estudian ingenieria. 

## Análisis de tareas
**¿Qué hacen generalmente los usuarios en el sistema?
¿Qué es fácil/difícil de hacer?**

El uso de el sistema es obligatorio para los estudiantes en la Universidad Técnica Federico Santa María. 

En el comiencza de semstre los usuarios usan la sistema para administrar sus ramos, ver su horario personal y ver el horario para asignaturas cuando eligen ramos. A inscribir en una asignatura es fácil, pero el problema es sobre descubrir las asignaturas en SIGA, y tambien que ver sobre adapte a su horario y planes de carrera

Además, la sistema es usa para ver su resultad por los asignaturas. _**No, se como este es facil o deficil ahora**_

En el final de semstre Siga es usa para evaluar los asignaturas y profesores en la final de cada semestre. _**No, se como este es facil o deficil ahora**_

La página también es utilizada por la administración de la escuela para informar a los alumnos. La página para informar los estudiantes es antes de inciar sesíon, entonces nadie lee la informacion y es dificli obtener la informacíon

Hay una página sobre ficha personal, donde se pueden actualizar su información personal a la escuela. La página es facil a descubir, pero a cambiar algo información es difícil porque no tenemos autoridad.
Los alumnos extranjeros tienen menos autoridades que los alumnos **local**, entonces a usar el sistema es mas dificil.

## Análisis de datos
**¿Qué información muestra el sistema?
¿Cómo se organiza jerárquicamente? 
¿Cual puede ser editada?**

**Observación 1: Disponibilidad de información general de SIGA: Aver Figura 1**
Cuando el usuario entra https://siga.usm.cl/pag/, la sistema muestra la pagina inicial. En este página hay informacion sobre el sistema, informacion de los que pueden contactar sobre el sistema y información sobre la escuela. Pero cuando se inicie la sesión en SIGA, no se puede ver esta informacion más.
    Esta información debe estar representada después de han inciar una sesión.

**Observación 2: Dos formularios para ingresar la cuenta:  Aver Figura 1**
El usario tiene dos ventanas para iniciar la sesión en Siga. El sistema no explica cual es la diferencia entre las dos maneras de iniciar la sesión, y el usario necesitaría más suporte para entender cual información es necesario para iniciar la sesión usando la manera a la izquierda.
    Los dos maneras no son consistentes, y sería mejor que el servador distingue entre el sistema que cada ventana representa y no el usuario 

***Figura 1***
![Image of pagina_inicial](https://github.com/hvarg/INF322/blob/master/Siga_pagina_inicial.png)

**Observación 3: Entrar datos para ingresar: Aver Figura 2**
Si el usuario entre información incorrecta, como un nombre de usario que no existe o una contraseña falsa, el sistema no indica el error antes de que el usario presiona la flecha para iniciar la sesión.  Iniciando la sesión con información incorrecta, el sistema informa el usario del error sin decirle al usario si el error fue iniciada por el uso de un nombre de usario invalido o por la culpa de una contraseña incorrecta. En este caso, el sistema no apoya al usario para solucionar la problema.
    Mejor sería si el sistema tenía prevención de errores.

***Figura 2***
![Image of error_iniciar](https://github.com/hvarg/INF322/blob/master/error_iniciar.png)

**Observación 4: Navigación desorganizada de la cuenta: Aver Figura 3**
Cuando el usuario inicia la sesión, el sistema muestra la página principal. El sistema muestra el nombre del usario arriba por la izquierda. La pagina principal, el home page, no tiene algún nombre. Cada vez que el usario sigue con algún tarea, para volver a la pagina principal, hay que presionar el botón "volver" abajo a la derecha.
    Mejor sería usar algún referencia al mundo real como una casa al lado del texto "volver". 

Para navigar en la sistema, siempre hay que volver a la pagina principal para eligir nueva opción. Los opciónes son tan muchos, donde algunas son superficiales. Esto podría reorganizarse en una nueva jerarquía. También las opciones sobre la evaluación de cursos podrían representarse cuando se finaliza un curso para el semestre y no todo el semestre.

***Figura 3***
![Image of pagina_principal](https://github.com/hvarg/INF322/blob/master/Siga_First_Page.png)

**Observación 5: Descripciones de opciones en el sistem: Compara Figura 4 a Figura 5**
En el sistema, también hay descripciones de cada opción que se muestra cuando el índice está encima del enlace. Algunas descripciones ofrecen más información para cada opción que otras
    Sería mejor tener estas descripciones más visibles para ayudar al usuario entender la función de cada opción, o tener un icon con "?" este símbolo para indicar que hay más información

***Figura 4: Descripción más breve y redundante***
![Imagen_de_Descripción_Breve](https://github.com/hvarg/INF322/blob/master/SIGA_descriOpcionBreve.png)

***Figura 5: Descripción más informativa***
![Imagen_de_Descripción_Informativa](https://github.com/hvarg/INF322/blob/master/SIGA_descriOpcionmasUtil.png)

**Observación 6: Opciones que no sirven al usuario estan disponible: Aver Figura 6**
Aveces hay opciones disponibles para elegir, pero cuando se haga clic el próximo página vuelve un noticia que el alumno no tiene aceso a esta opción por tal razón o otra
    Sería mejor que el usuario no tiene la habilidad de elegir estas opciones y la razón se puede ser mostrado con la descripción

***Figura 6***
![Imagen_de_Página_Inutil](https://github.com/hvarg/INF322/blob/master/SIGA_Paginanosirve.png)

## Identificación de falencias y oportunidades de mejora
**¿Qué queremos cambiar? 
¿Por qué?**

* Inscripción

Cuando el usario quiere inscribirse a ramos fuera del tiempo para inscripción, el sistema no indica al usario que no es posible. Mejor sería si la sistema tuviera algún tipo de indicación si esta fuera del tiempo para hacer incribciónes para mejorar la visibilidad del estado del sistema. Una opción sería usar un reloj con un texto diciendo "XX dias hasta que es posible hacer inscripciónes". 

![Image of siga_inscripcion](https://github.com/hvarg/INF322/blob/master/siga_incripcion.png)

* Cambiar contraseña

No es posible cambiar contraseña cuando has iniciado la sesión. Para cambiar contraseña hay que presionar "¿problemas con su contraseña?" **Aquí debemos poner capturas de pantalla para cada paso necesario para cambiar contraseña**

* Botón de volver

No se puede volver a la página principal sin usar el botón *volver*. Te desconectas de la página y tienen que inicializar una nueva sesión. Se espera que pueda ir y venir en una página, por eso puede ser una experiencia irritante al usar el sistema. El botón también debe cambiar al símbolo de una casa, porque simbolo de una casa significa volver en las plataformas digitales

* Información

La informacion sobre la escuela debe venir despues de inciar una sesción. Hacer un cuadro de información a la izquierda para las alternativas de navegación cuando se haya iniciado una sesión. Esto facilitará que el alumno lea la información.

* Navegar

La página de navegación debe reestructurarse. Debe haber un menú en el que pueda cambiar su configuración personal para siga, su información personal y poder cerrar sesión. También debería haber opciones de navegación como hay ahora, pero algunos temas deberían fusionarse. Como los que conciernen a tus resultados académicos.

Además, debería haber un cuadro con enlaces a páginas como aula que se usa para dar información en casi todos los cursos.

* Horario Asignaturas

Aquí nos falta un botón de búsqueda para buscar asignaturas que sobre algo. Obtenemos demasiada información, no hay necesidad de saber quién es el profesor o cupos para cada curso. Cuando encontremos el curso que nos gusta, deberíamos poder hacer clic en él para obtener más información en una cuadro a la izquierda en la misma pagina. Aquí está la información sobre el profesor y el horario puede estar. También debe haber un *link* con la dirección de correo electrónico al profesor.

* Seguridad de ficha personal

Hasta este punto es muy fácil a cambiar fichas personales y verlos cuando se tenga aceso a una cuenta. Se debe requiere al usuario confirmar su identidad cuando quiera ver o cambiar las fichas.  En cualquier otro caso, se debe ocultar esta información.

* Notificación de perdir sesión

Debe ser una opción para notificar al usuario que la sesión estaría perdida por una falta de actividad para que el usuario confirme su presencia y continua la sesión sin entrar su información de nuevo.

## Propuesta
**Seleccionar que partes de la interfaz podemos mejorar.**

### Pagina primera para iniciar sesión
En la primera página nos gustaría tener solo la nueva opción para iniciar una sesión. Esto debe estar en el medio de la página para que sea fácil acceder desde la computadora y el teléfono.

### Pagina principal

La página principal debe estar formada por tres partes; el borde superior, un menú en el lado izquierdo y un pequeño espacio para noticas.

#### El borde superior

#### El menú

#### Noticias

## Definición de tareas
**Tareas a cambiar, como funcionaba antes, como funciona ahora.**

## Diseño
**Nada aún**

## Evaluación
**Nada aún**
