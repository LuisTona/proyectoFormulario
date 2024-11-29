const nombre = document.getElementById('nombre').value;
const apellido1 = document.getElementById('apellido1').value;
const apellido2 = document.getElementById('apellido2').value;
const correo = document.getElementById('mail').value;
const contraseña = document.getElementById('pass').value;
const confirPass= document.getElementById('confirmPass').value;
const privacidad = document.getElementById('privacidad').value;
const errorMensaje = document.getElementById('errorNombre').value;

document.querySelector('#formulario').addEventListener('submit', function(event) {
    
    if (nombre.trim() === '') {
        errorMensaje.style.display = 'block';
        event.preventDefault();
    }

    // if(apellido1.trim() === ''){
    //     alert('El campo primer apellido  es obligatorio.');
    // }

    // if(correo.trim() === ''){
    //     alert('El campo correo electronico es obligatorio');
    // }

    // if(contraseña.trim() === ''){
    //     alert('El campo Contraseña es obligatorio.');
    // }
});
