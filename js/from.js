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
const passExp = /[a-zA-Z0-9]{8,16}$ /;

let campo = [
    {campo: nombre, valor: errorMensaje[0]},
    {campo: apellido1, valor: errorMensaje[1]},
    {campo: correo, valor: errorMensaje[2]},
    {campo: contraseña, valor: errorMensaje[4]},
    {campo: confirPass, valor: errorMensaje[6]},
    {campo: privacidad, valor: errorMensaje[7]},
];

nombre.addEventListener('blur', ()=>{
    if(nombre.value.trim() === ''){
        errorMensaje[0].style.display = 'block';
        nombre.classList.add('incorrecto')
    }
});

nombre.addEventListener('keypress', ()=>{
    if(nombre.classList.contains('incorrecto')){
        nombre.classList.remove('incorrecto')
    }
})

apellido1.addEventListener('blur', ()=>{
    if(apellido1.value.trim() === ''){
        errorMensaje[1].style.display = 'block';
        apellido1.classList.add('incorrecto')
    }
});

apellido1.addEventListener('keypress', ()=>{
    if(apellido1.classList.contains('incorrecto')){
        apellido1.classList.remove('incorrecto')
    }
})

correo.addEventListener('blur', ()=>{
    if(correo.value.trim() === ''){
        errorMensaje[2].style.display = 'block';
        correo.classList.add('incorrecto')
    }else{
        correo.classList.remove('incorrecto')
        errorMensaje[2].style.display = 'none';
    }
});
correo.addEventListener('keypress', ()=>{
    if(correo.classList.contains('incorrecto')){
        correo.classList.remove('incorrecto')
    }
    if(!regExp.test(correo.value)){
        errorMensaje[3].style.display = 'block';
        correo.classList.add('incorrecto')
    }else{
        errorMensaje[2].style.display = 'none';
        errorMensaje[3].style.display = 'none';
    }
})

contraseña.addEventListener('blur', ()=>{
    if(contraseña.value.trim() === ''){
        errorMensaje[4].style.display = 'block';
        contraseña.classList.add('incorrecto')
    }else{
        contraseña.classList.remove('incorrecto')
        errorMensaje[4].style.display = 'none';
    }
    console.log(passExp.test(contraseña.value));
    if(!passExp.test(contraseña.value)){
        contraseña.classList.add('incorrecto')
        errorMensaje[5].style.display = 'block';
    }else{
        contraseña.classList.remove('incorrecto')
        errorMensaje[5].style.display = 'none';
        
    }
})
document.querySelector('#formulario').addEventListener('submit', function(event) {
    event.preventDefault();
  
    campo.forEach(({campo, valor}) => {
        if(campo.value.trim() === ''){
            campo.classList.add('incorrecto');
            valor.style.display = 'block';
        }
    });
    
    if(contraseña.value === confirPass.value){
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        if(nombre.value.trim() !== '' && apellido1.value.trim() !== '' && correo.value.trim() !== '' && contraseña.value.trim() !== '' && privacidad.value.trim() !== ''){
            localStorage.setItem('usuario', JSON.stringify(data));
        }else{
            alert("Falta algun campo por rellenar");
        }
    }else{
        alert("Las contraseñas no son iguales");
    }
    

});
