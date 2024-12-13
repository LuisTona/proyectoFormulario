README - Formularios de Registro y Login
 
Participantes
 
Luis Alberto, Adrián Gavela, Alejandro Martínez
 
 
Este repositorio contiene los formularios básicos de Registro y Login para una aplicación web. Los formularios permiten a los usuarios registrarse en el sistema y luego iniciar sesión con sus credenciales para acceder a contenido protegido.
 
 
Requisitos previos
 
Antes de usar los formularios de registro y login, asegúrate de tener:
 
    HTML5: Para la estructura de los formularios.
    CSS: Para los estilos básicos del formulario.
    JavaScript: Para la validación básica en el cliente.
 
 
Formulario de Registro
 
El formulario de registro permite a los usuarios crear una cuenta en el sistema. El formulario solicita los siguientes datos:
 
    Nombre: El nombre del usuario. (Obligatorio)
    Primer apellido: El primer apellido del usuario. (Obligatorio)
    Segundo apellido: El segundo apellido del usuario.
    Correo electrónico: Una dirección de correo electrónico válida. (Obligatorio)
    Contraseña: Una contraseña segura (Mínimo 8 caracteres y puede contener mayúsculas, minúsculas y números). (Obligatorio)
    Confirmación de contraseña: El mismo valor que la contraseña para evitar errores tipográficos.
    Chekbox de políticas de privacidad desmarcado por defecto. (Obligatorio)
    Un botón de enviar.
 
Características
 
    Validación en el cliente: El formulario verifica que todos los campos estén completos y que las contraseñas coincidan antes de enviarlo al servidor.
    Si el formulario es correcto el boton enviar le redireccionara a la landing page, si esta correcto algun campo no refrescara la pagina
 
 
Formulario de Login
 
El formulario de login permite a los usuarios autenticarse en el sistema usando sus credenciales (correo electrónico y contraseña). Los campos requeridos son:
 
    Correo electrónico: Dirección de correo electrónico registrada.
    Contraseña: La contraseña asociada a la cuenta.
 
Características
 
    Validación básica: El formulario verifica que ambos campos (correo electrónico y contraseña) estén completos antes de enviar los datos al servidor.
 
 
Recomendaciones WCAG 2.0 aplicadas
 
Hemos estado comprobando las recomendaciones WCAG 2.0 y creemos que cumple con todas las posibles.
