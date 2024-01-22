# React forms (Controlled components)

En esta clase hemos aprendido a crear formularios en React. Hemos visto que los formularios en React son componentes controlados, es decir, que el estado de los datos del formulario lo controla React y no el navegador. Esto nos permite tener un control total sobre los datos que se muestran en un formulario y cómo se actualizan (ejemplo de amazon controlando los eventos).

Cada elemento del form tiene un evento asociado que se lanza cuando cambia su valor `onChange`. Este evento se puede capturar y modificar el estado del componente.

El submit del formulario también se puede capturar y manejar con React. De esta forma podemos enviar los datos del formulario a un servidor o realizar las acciones que necesitemos.