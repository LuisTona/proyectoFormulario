const form = document.querySelector('form')
const nombre = document.getElementById('nombre');
const apellido1 = document.getElementById('apellido1');
const apellido2 = document.getElementById('apellido2');
const correo = document.getElementById('mail');
const contraseña = document.getElementById('pass');
const confirPass= document.getElementById('confirmPass');
const privacidad = document.getElementById('privacidad');
const errorMensaje = document.querySelectorAll('.error-message');
const regExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
let campo = [
    {campo: nombre, valor: errorMensaje[0]},
    {campo: apellido1, valor: errorMensaje[1]},
    {campo: correo, valor: errorMensaje[2]},
    {campo: contraseña, valor: errorMensaje[3]},
    {campo: confirPass, valor: errorMensaje[4]},
    {campo: privacidad, valor: errorMensaje[5]},
];

nombre.addEventListener('blur', ()=>{
    if(nombre.value.trim() === ''){
        errorMensaje[0].style.display = 'block';
    }
});
apellido1.addEventListener('blur', ()=>{
    if(apellido1.value.trim() === ''){
        errorMensaje[1].style.display = 'block';
    }
});

correo.addEventListener('keypress', ()=>{

    if(!regExp.test(correo.value)){
        errorMensaje[2].style.display = 'block';
    }else{
        errorMensaje[2].style.display = 'none';
    }
})

document.querySelector('#formulario').addEventListener('submit', function(event) {
    event.preventDefault();
  

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    // campo.forEach(({campo, valor}) => {
    //     if(campo.value.trim() === ''){
    //         valor.style.display = 'block';
    //     }
    // });

    let usuario = {
        nombre: nombre.value.trim(),
        apellido1: apellido1.value.trim(),
        apellido2: apellido2.value.trim(),
        correo: correo.value.trim(),
        privacidad: privacidad.value.trim(),
    };

    if(contraseña.value === confirPass.value){
        usuario.contraseña = contraseña.value.trim();
    }else{
        alert("Las contraseñas no son iguales");
    }

    if(nombre.value.trim() !== '' && apellido1.value.trim() !== '' && correo.value.trim() !== '' && contraseña.value.trim() !== '' && privacidad.value.trim() !== ''){
        localStorage.setItem('usuario', JSON.stringify(usuario));
    }else{
        alert("Falta algun campo por rellenar");
    }

});
