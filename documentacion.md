# Documentación de la PEC1

## 1. Instalación de dependencias

Como el sistema operativo que uso es Ubuntu no tuve demasiados problemas para configurar...

<!-- TODO: completar este apartado -->

## 2. Entorno de desarrollo

Para el desarrollo de la web he utilizado dos herramientas: VSCode y Firefox. He utilizado mucho la opción de dividir el editor en distintas ventanas junto con parcel y npm para que se fuera refrescando la página mientras trabajaba en ella. También he utilizado intensivamente las herramientas para desarrolladores de Firefox, en especial la vista de diseño adaptado y el inspector de elementos.

![Entorno de desarrollo](doc_images/entorno.jpg)

## 3. Desarrollo del sitio

Estoy cursando esta asignatura a la vez que 'Programación en JavaScript para programadores' y 'HTML y CSS', por tanto mis conocimientos prácticos no son demasiado avanzados y he optado por un diseño sencillo. De la parte de JavaScript ando aún especialmente flojo (no había utilizado el lenguaje nunca antes de este semestre), así que simplemente he añadido <!-- TODO: añadir lo que sea que añada>.

Anteriormente sí que había hecho algún curso de HTML y CSS, pero nada más allá de *media queries*, así que he optado por ellas y he empezado creando la versión móvil de las páginas para luego añadir los estilos de pantallas más amplias.

### 3.1 Índice

Esta es la primera página en la que he trabajado. Como he comentado, he optado por un diseño sencillo con un logo grande como cabecera, una pequeña descripción y dos botones para acceder a las categorías. Estos dos botones han sido el principal elemento del diseño responsive: para pantallas pequeñas quería que apareciera uno debajo del otro, y para pantallas grandes en paralelo. Para conseguir este comportamiento he duplicado uno de los botones en el html y he creado dos clases `.pantalla-pequeña` y `.pantalla-grande` para mostrar la versión que quería según el dispositivo. 

Las 3 fuentes de texto las he añadido mediante links a *google fonts*: una estilo portada de cómic para la cabecera, Roboto para el cuerpo y Raleway para los botones. Las imágenes las he descargado de *https://www.rawpixel.com/*, todas con licencia de uso para proyectos personales y comerciales, editado con GIMP, y finalmente reducido su peso con *https://tinypng.com/*. He procurado que los pesos de las imágenes fueran pequeños (< 100kB) para mejorar la accesibilidad de la web a personas con conexiones lentas. Al ser todas las imágenes decorativas he optado por añadir un elemento `alt` vacío.

Los colores los he escogido de entre los de la siguiente paleta: *https://flatuicolors.com/palette/cn*.

### 3.2 Páginas de categoría

### 3.3 Páginas de libros

### 3.4 Últimos pasos

Una vez acabadas las páginas he ejecutado unas comprobaciones adicionales:

* He comprobado que no hubiera errores en el html con el validador: *https://validator.w3.org/nu/*
* He comprobado que no hubiera errores en el css con el validador: *https://jigsaw.w3.org/css-validator/*