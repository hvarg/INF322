# Evaluación interfaz: SIGA (Alumnos)

Los objetivos de este escrito son los siguientes:
1.	Presentar una evaluación de las interfaces presentes en el sistema **SIGA version alumnos**.
2.	Con base en dicha evaluación, proponer mejoras a las interfaces para facilitar la utilización del sistema.
3.	Definir componentes que llevarán a cabo estas mejoras.
4.	Evaluar los componentes creados.

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
SIGA es un sistema de información creado por la Universidad Técnica Federico Santa María (UTFSM) para gestionar notas, asignaturas, deudas, certificados, entre otros.

SIGA define su misión como:

> Contribuir al desarrollo de las Tecnologías de Información con el fin de responder a las necesidades de la comunidad universitaria, a través del desarrollo de sistemas, que permitan mejorar la calidad de los servicios que brinda nuestra institución.

Y su misión como:
> La comunidad universitaria tendrá acceso a servicios de Tecnologías de Información con calidad, rapidez, seguridad y sostenibilidad en el tiempo lo que contribuye al cumplimiento de la misión de la universidad.

Más información puede ser encontrada en la sección *¿Qué es SIGA?* de [siga.usm.cl](https://siga.usm.cl//pag/)

## Comunidad usuaria

Podemos clasificar a los usuarios que tienen acceso al sistema SIGA en dos grupos: Profesores y Alumnos.

Los usuarios profesores tienen entre 25-65 años, generalmente ingenieros y mayoritariamente hombres.

Los usuarios alumnos tienen entre 18-27 años, estudian algún tipo de ingeniería y se estima que un 70% de ellos son hombres y 30% mujeres.

En esta evaluación nos centraremos en los usuarios Alumnos y como mejorar las interfaces que se les presentan a estos.

## Análisis de tareas
**¿Qué hacen generalmente los usuarios en el sistema?
¿Qué es fácil/difícil de hacer?**

### Para Estudiantes
El uso de el sistema es obligatorio para los estudiantes en UTFSM. 

**uso al principio del semestre**
Administrar sus ramos, ver su horario personal y ver el horario de asignaturas cuando elijan ramos. Inscribir asignaturas es fácil, pero adaptar su horario, visualizar las asignaturas en SIGA y visualizar los planes de carrera es dificil.

**uso durante el semestre**
Ver su horario personal y revisar los horarios por asignatura/departamento/profesor, para asistir a las clases y conocer la disponibilidad de un profesor, respectivamente. 

Actualizar su información personal en la Ficha personal es fácil para datos como la _dirección acádemica_ o _numéro de telefono_, pero si se quiere modificar los _datos del apoderado_ o _dirección del grupo familiar_ es díficil, dado que los usuarios alumnos no tienen la autoridad para realizar estos cambios. Y si se trata de un **alumno de intercambio** (extranjero), la situación es aún más díficil, ya que tiene menos permisos de edición que un **alumno local**.

**uso al fin semestre**
Revisar el avance curricular para ver las notas obtenidas en cada asignatura y realizar la encuesta docente para evaluar la asignatura y profesor.

### Para Administración
La administración de la UTFSM usa SIGA para informar a los alumnos, a través de la página principal (que no requiere inicio de sesión), dónde se pueden encontrar noticias tanto de actualización de los reglamentos, como de plazos importantes. Pero depende de la pantalla del usuario si alcanza o no a visualizar esta información (en algunos casos sólo se ve el título o una parte de la primera sección), es por ello que se dificulta la lectura y obtención de la información por parte de los **alumnos**, puesto que no suelen percatarse de que hay y/o nuevos cambios.  

### Conclusión de Usabilidad
En general la sistema es díficil entender, porque no ofrece mucho apoyo al usuario. Por lo que para mejorar este aspecto, se podría agregar **información** que indique las funciónes de cada sección a través de una breve explicación y una **mejor organización** del contenido para facilitar la navegación por el sistema y sus servicios.

## Análisis de datos
**¿Qué información muestra el sistema?
¿Cómo se organiza jerárquicamente? 
¿Cual puede ser editada?**
La información que el sistema muestra en la pagina principal se indica en Figura 1. 

![Image of pagina_principal](https://github.com/hvarg/INF322/blob/master/assets/Siga_First_Page.png)
 ***Figura 1*** 
 
Beca de alimentación: Ver las becas del usuario  
Certificados: Los certificados deberán ser solicitados personalmente en la Oficina Asuntos Internacionales.  
Resumen académico: Ver notas de los cursos y puntos aprobados.  
Solicitudes Académicas y Peticiones: Hacer cambios en la carrera y administrar cursos no aprobados.   
Planes de carrera: Ver el plan (cursos) de los semestres para cada carrera.  
Avance curricular: Ver los asignaturas inscritas del semestre y las notas de las evaluaciónes.   
Inscripción: Inscibirse en ramos (ojo: solo es posible durante el tiempo de inscripción).  
Cambio de mención: Cambio de Mención/Especialización, dónde el alumno puede cambiar especialización.  
Postulación Intercambio: Enviar su solicitud para irse de intercambio.  
Horario asignaturas: Ver el horario de cada asignatura dictada el semestre actual.   
Asignaturas inscritas - Ver información sobre las asignaturas inscritas, comó las siglas, nombre del curso, número de créditos, nota final, evaluaciónes y el horario de los asignaturas.  
Correo y Credencial USM - ver su RUT, nombre, correo USM y código QR Credencial.  
Horario personal - Horario de las asignaturas inscritas del usuario.  
Deuda - Deudas actuales del usuario.  
Autorización académica - Inscripciónes que han requerido autorización y la razón de ellos.  
Consulta de Pagarés - Compromisos del usuario para pagar en una fecha más tarde por sus estudios en UTFSM.  

## Identificación de falencias y oportunidades de mejora
**¿Qué queremos cambiar? 
¿Por qué?**

### Noticias
Cuando el usuario entra https://siga.usm.cl/pag/, el sistema muestra la pagina inicial, como se muestra en Figura 2. En esta página hay información sobre el sistema, medios de contacto y sobre la universidad.
Cuando se inicie la sesión en SIGA, no es posible buscar esta información de nuevo.  Entonces información clave al usuario no es muy acesible durante su uso entero del SIGA.

P: Las noticias y información debe venir despues de inciar una sesión. Esto hace que el usuario puede acceder a la información cuando ya está dentro del sistema. Esto evite que el usuario tiene que salir del sistema para buscar la información en la pagina mostrada en Figura 2. Las noticias debe estar en una cuadra en el nueva menu a la izquierda, donde el menu contiene las alternativas de navegación cuando se haya iniciado una sesión. Esto facilitará que el alumno lea la información.

### Ingreso
El usario tiene dos ventanas para iniciar la sesión en SIGA, como se muestra en  Figura 2. El sistema no explica la diferencia entre las dos maneras de iniciar la sesión (esto es las maneras de ingresar a la cuenta viene de que antiguos y nuevos usarios no están en la misma servidor), y el usario necesitaría más suporte para entender cual información es necesario para iniciar la sesión usando la manera a la izquierda.

![Image of pagina_inicial](https://github.com/hvarg/INF322/blob/master/assets/Siga_pagina_inicial.png)
***Figura 2***

### Navigación desorganizada - Maybe change the photo to show the volver
Cuando el usuario inicia la sesión, el sistema muestra la página principal, como se muestra en  Figura 1. El sistema muestra el nombre del usario en la esquina superior izquierda. La página principal, el inicio, no tiene ningún nombre. Cada vez que el usario sigue con alguna tarea, para volver a la pagina principal, hay que presionar el botón "volver" abajo a la derecha.

Si no se usa el botón *volver*, se le desconecta de la página y hay que inicializar una nueva sesión. Se espera que pueda ir y venir en una página, por eso puede ser una experiencia irritante al usar el sistema. 

P: Mejor sería usar alguna referencia al mundo real, como una casa, al lado del texto "volver" y cambiar el "volver" al nombre de la pagína principal. En este manera, sería más fácil para el usuario para entender adonde en la página los butones le dirigen.

### Descripciones de opciones en el sistema: Compara Figura 4 a Figura 5**
En el sistema, también hay descripciones de cada opción que se muestra cuando el índice está encima del enlace. Algunas descripciones ofrecen más información para cada opción que otras. Debe cambiar este aspecto del sistema porque no le informa al usuario consitentemente la función de cada opción del sistema.

***Figura 4: Descripción más breve y redundante***
![Imagen_de_Descripción_Breve](https://github.com/hvarg/INF322/blob/master/assets/SIGA_descriOpcionBreve.png)

***Figura 5: Descripción más informativa***
![Imagen_de_Descripción_Informativa](https://github.com/hvarg/INF322/blob/master/assets/SIGA_descriOpcionmasUtil.png)

### Inscripción
Cuando el usario quiere inscribirse a ramos fuera del período de inscripción, el sistema no indica al usario que no es posible. Se necesita cambiar este aspecto del sistema porque sin esta información puede confudir y molestar al usuario.

P: Mejor sería si la sistema tuviera algún tipo de indicación si esta fuera del tiempo para hacer incribciónes para mejorar la visibilidad del estado del sistema. Una opción sería usar un reloj con un texto diciendo "XX dias hasta que es posible hacer inscripciónes".

![Image of siga_inscripcion](https://github.com/hvarg/INF322/blob/master/assets/siga_incripcion.png)

### Cambiar contraseña
No es posible cambiar contraseña cuando has iniciado la sesión. Para cambiar contraseña hay que presionar "¿problemas con su contraseña?", cómo muestra Figura 8. Desde allá, hay que presionar "https://pasaporte.usm.cl/id/", y esto te lleva al interfaz en Figura 9 dónde tienes que presionar "Cambiar Contraseña". Presionar esto, te lleva al interfaz de Figura 10, dónde tienes que inscribir tus credenciales. Cuando lo has hecho, finalmente llevas al paso en Figura 11 donde puedes cambiar la contraseña. 

***Figura 8: Primera pagina para cambiar contraseña***
![Image of_contrasena_1](https://github.com/hvarg/INF322/blob/master/assets/contrasena_1.png)

***Figura 9: Segunda pagina para cambiar contraseña***
![Image of_contrasena_2](https://github.com/hvarg/INF322/blob/master/assets/contrasena_2.png)

***Figura 10: Tercera pagina para cambiar contraseña***
![Image of_contrasena_3](https://github.com/hvarg/INF322/blob/master/assets/contrasena_3.png)

***Figura 11: Cuarto pagina para cambiar contraseña***
![Image of_contrasena_4](https://github.com/hvarg/INF322/blob/master/assets/contrasena_4.png)




### Horario Asignaturas
En esta parte del SIGA, nos falta búsquedor de asignaturas. Además, cuando se busque asignaturas, se obtenga demasiado información (esto es el profesor o cupos para cada curso).  Esta cantidad de información además puede confudir al usuario o causar demoras inecesarias en el proceso de buscar

P: Cuando se encuentra el curso que nos gusta, se debería hacer clic en la resuelto para obtener más información (como la información dicha) en un cuadro a la izquierda en la misma pagina. Aquí está la información sobre el profesor y el horario puede estar. También debe haber un *link* con la dirección de correo electrónico al profesor.

### Visibilidad innecesaria de la ficha personal
Cuando se acede las fichas personales, datos que puede ser muy sensible, como grupo sanguíneo, dirección del período académico, teléfono, se pueden ver muy fácilmente y modificar sin verificar la identidad del usuario.

P: Por defecto, esa información se debe ser ocultado. Además, si el usuario quiere ver y modificar los datos, SIGA debe pedir al usuario entrar su contraseño de nuevo para que verifique que el dueño de la cuenta esta haciendo interactuando con esos datos. Esta modificación añade un otro nivel de seguridad para proteger datos personales del usuario.

### Falta de entender límites temporales de sistem
El usuario puede pedir su sesión, pero no hay información del límite del tiempo que queda al usuario hasta se le pierde su sesión por una falta de actividad.  Entonces, puede irritar al usuario cuando tiene que entrar su información de nuevo.

P: El SIGA debe notificar al usuario que su sesión estaría perdida por una falta de actividad para que el usuario pueda confirmar su presencia y continua la sesión y no pedir la sesión y entrar su información de nuevo.

## Propuesta
**Seleccionar que partes de la interfaz podemos mejorar.**

### Primera página antes de iniciar sesión
En la primera página nos gustaría tener solo una opción para iniciar una sesión con el formato de la más reciente manera de ingresar. Esto debe estar en el medio de la página para que sea fácil acceder desde la computadora y el teléfono.

### Página principal

En la pagina principal hay demasiadas opciónes que se pueden reorganizar en una nueva jerarquía. El Usuario estará arriba en el borde superior a la derecha, y opciones como Noticias, Ramos y Solicitudes externos estarán en una jerarquía a la izquierda.

![Image_of_page_strukture](https://github.com/hvarg/INF322/blob/master/assets/Estructura.png)

#### El borde superior

A la izquierda del borde superior debe haber el logo de USM con SIGA, esto es para mostrar la página en la que se encuentra. Al lado del logo debe haber un ícono de una casa para ir a la página principal. Entonces, cuando se este en la página principal, se tiene una continuidad en el borde.

En el centro debe haber un busquedor motor de busca para buscar cosas que desea encontrar en la página. Consistirá en un cuadro de busca y un logo de lupa. Cuando buscas por ejemplo "inscripción", el menú a la izquierda va a indicar donde estas, porque el titulo "Ramos" va a abrirse y el titulo "Inscripción" toma  otra color para indicar que ahora estás en "Inscripción". 

En la derecha habrá una imagen con su nombre, que muestra en qué cuenta ha iniciado sesión. Esto también mostrará un menú haciendo un clic. El menú de usarios, contendrá opciones con respecto a su ficha personal, su becas y mas opciones que estan explicada en los puntos  abajo. (Al lado de su nombre y imagen, hay una icon de salir para cerrar sesión.)

##### Usuario  
* **Ficha Personal**
Incluye la información que antes estaba en Ficha Personal y Correo y Credencial USM
* **Plan Académico**
Tiene el interfaz de lo que antes era Avance Curricular, pero está fusionado con la función de Resumen Académico. Avance Curricular y Resumen Académico contienen los mismos datos. Basado en la interfaz que tiene Avance Curricular, agregamos un botón diciendo "generar PDF de Resumen Académico", que genera la información que muestra Avance Curricular a un PDF como la que mostraba Resumen Académico. 
* **Becas**  
Administrar y ver los becas de alimentación del usuario. 
* **Deuda**  
Los deudas a la universidad del usuario. 
* **Consulta de Pagares**  
Trato de pagar - economía. 
* **Cerrar sesión (el logout)**  

#### El menú

El menú principal estaría en el lado izquierdo de la página. Solo debe contener el tema general, como ramos, solicitudes externos y noticias. Donde todos los temas deben tener un logo de su propósito. Cuando haga clic en uno de los temas, aparecerán más opciones. Sin embargo, deberían aparecer en el área central. También podría ser una frase corta bajo los subtemas para explicar allí propósito.

El menú siempre debe estar abierto mostrando los temas principales. Tambien la opcion que han entrada, va estar en una otro color para indicar donde estan. Esto es para facilitar y obtener una continuación del diseño en la página. También facilitará la navegación sin tener que volver a la página de inicio cada vez.

Abajo es una explicasion de la nueva jerarquía para el menú principal, aqui habemos cambiado opciones para tener un menú mas facil a entender. 

##### Jerarquía
###### Noticias
Noticias relevantes para el usuario, cómo fechas para el semestre o notas ingresadas de evaluaciónes.  

Esta información debe estar representada después de han iniciado una sesión y dentro de la sesión hay que tener la opción de volver a ver las noticias. 

###### Ramos
* **Busqueda de ramos**
Incluyendo la funcionalidad/información que antes estaba en Horario Asignaturas y Planes de Carrera.

Aquí hay que ver el horario de cada asignatura dictada el semestre actual y también ver el plan (cursos) de los semestres para cada carrera
* **Asignaturas inscritas**
Ver información sobre las asignaturas inscritas, comó las siglas, nombre del curso, número de créditos, nota final, evaluaciónes y el horario de los asignaturas.
* **Inscripción**
Inscibirse en ramos, soló es posible durante el tiempo de inscripción. Necesita una explicación si no se este fuera del tiempo de inscripción. Es importante que el usuario puede elegir cuales días quiere tener clases, por ejemplo que cada día tiene un checkbox y desde allí solo muestra los ramos que no tiene clases estas días. 

###### Solicitudes externos
* **Certificados**  
* **Cambio de mención**  
Cambio de Mención/Especialización, dónde el alumno puede cambiar especialización. 
* **Solicitudes Académicas y Peticiones**
* **Matrícula Sin Ramos**
* **Autorización académica**

#### Parte principal

En el centro de la página encontrarás la parte principal. Aquí va a abrir los paginas en que el usuario ha hecho un clic en el menú.
Tambien van a recibir noticias de la escuela o información sobre fechas importantes que debes recordar, cuando hay algonas.

## Definición de tareas
**Tareas a cambiar, como funcionaba antes, como funciona ahora.**

## Diseño
**Nada aún**


![Image_of_propuesta_1](https://github.com/hvarg/INF322/blob/master/assets/propuesta_1.jpeg)
![Image_of_propuesta_2](https://github.com/hvarg/INF322/blob/master/assets/propuesta_2.jpeg)

## Evaluación
**Nada aún**
