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
const passExp = /[a-zA-Z0-9._%&@€]{8,16}/;

let campo = [
    {campo: nombre, valor: errorMensaje[0]},
    {campo: apellido1, valor: errorMensaje[1]},
    {campo: correo, valor: errorMensaje[2]},
    {campo: contraseña, valor: errorMensaje[4]},
    {campo: confirPass, valor: errorMensaje[6]},
    {campo: privacidad, valor: errorMensaje[7]},
];

// Validaciones del nombre
nombre.addEventListener('blur', ()=>{
    validaciones(nombre, 0);
});

nombre.addEventListener('keypress', ()=>{
    validaciones(nombre, 0);
});

// Validaciones del apellido
apellido1.addEventListener('blur', ()=>{
    validaciones(apellido1, 1)
});

apellido1.addEventListener('keypress', ()=>{
    validaciones(apellido1, 1)
})

// Validaciones del correo
correo.addEventListener('blur', ()=>{
    validaciones(correo, 2)
});
correo.addEventListener('keypress', ()=>{
    validaciones(correo, 2)
    validacionExpresiones(contraseña, passExp, 3)
})

contraseña.addEventListener('blur', ()=>{
    validaciones(contraseña, 4);
    validacionExpresiones(contraseña, passExp, 5);
});

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

// Funcion para hacer una validacion a todos los elementos
function validaciones(elemento, numError){
    if(elemento.value.trim() ===''){
        elemento.classList.add('incorrecto')
        errorMensaje[numError].style.display = 'block'
    }else{
        elemento.classList.remove('incorrecto')
        errorMensaje[numError].style.display = 'none'
    }
}

// Funcion para validar las expresiones regulares
function validacionExpresiones(elemento, expresion, numError){
    if(!expresion.test(elemento.value) && !elemento.classList.contains('incorrecto')){
        elemento.classList.add('incorrecto')
        errorMensaje[numError].style.display = 'block';
    }else{
        elemento.classList.remove('incorrecto')
        errorMensaje[numError].style.display = 'none';
    }
}