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
const nombreExp=/^[A-Za-záéíóúÁÉÍÓÚñÑ\s]+$/;

// ^: Inicio de la cadena.
// [A-Za-zÁÉÍÓÚáéíóúñÑ\s]: La cadena puede contener solo letras (mayúsculas o minúsculas), letras con tildes, la letra ñ y espacios.
// +: Al menos un carácter debe coincidir con los caracteres permitidos.
// $: Fin de la cadena.

let campo = [
    {campo: nombre, valor: errorMensaje[0]},
    {campo: apellido1, valor: errorMensaje[1]},
    {campo: correo, valor: errorMensaje[2]},
    {campo: contraseña, valor: errorMensaje[4]},
    {campo: confirPass, valor: errorMensaje[6]},
    {campo: privacidad, valor: errorMensaje[7]}
];

// Validaciones del nombre
nombre.addEventListener('blur', ()=>{
    validacionExpresiones(nombre, nombreExp, 0);
});

nombre.addEventListener('keyup', ()=>{
    validacionExpresiones(nombre, nombreExp, 0)
});

// Validaciones del apellido
apellido1.addEventListener('blur', ()=>{
    validacionExpresiones(apellido1, nombreExp, 1);
});

apellido1.addEventListener('keyup', ()=>{
    validacionExpresiones(apellido1, nombreExp, 1)
})

// Validaciones del correo
correo.addEventListener('blur', ()=>{
    validacionExpresiones(correo, regExp, 2);
});
correo.addEventListener('keypress', ()=>{
    validacionExpresiones(correo, regExp, 2);
})

contraseña.addEventListener('blur', ()=>{
    validacionExpresiones(contraseña, passExp, 4);
});

document.querySelector('#formulario').addEventListener('submit', function(event) {
    event.preventDefault();
    let objetoUsuarios = JSON.parse(localStorage.usuario);
    let usuarios = [];
    for(let i in objetoUsuarios){
        if(i === 'nombre'){
            for(let k in objetoUsuarios){

                usuarios.push(objetoUsuarios[k]);  
            }
        }
    }
    console.log(usuarios);

    if(!comprobacionUsuarios()){
        campo.forEach(({campo, valor}) => {
            if(campo.value.trim() === ''){
                campo.classList.add('incorrecto');
                valor.style.display = 'block';
            }else if(contraseña.value === confirPass.value){
                    
                const formData = new FormData(form);
                const data = Object.fromEntries(formData);
                // if(nombre.value.trim() !== '' && apellido1.value.trim() !== '' && correo.value.trim() !== '' && contraseña.value.trim() !== '' && privacidad.value.trim() !== ''){
                //     localStorage.setItem('usuario', JSON.stringify(data));
                //     window.location.assign('./landingPage.html');
                // }
            } 
        });
    }else{
        alert('usuario registrado')
    }
    
    if(contraseña.value !== confirPass.value){
        alert("Las contraseñas no coinciden");
    }else{
        alert("Falta algun campo por rellenar");
    }
});

// Funcion para hacer una validacion a todos los elementos y expresiones regulares
function validacionExpresiones(elemento, expresion, numError){
    if(elemento.value.trim() ===''){
        elemento.classList.add('incorrecto')
        errorMensaje[numError].style.display = 'block'
        errorMensaje[numError + 1].style.display = 'none';
        console.log(elemento);

    }else if((!expresion.test(elemento.value) ) ){
        elemento.classList.add('incorrecto')
        errorMensaje[numError].style.display = 'none'
        errorMensaje[numError + 1].style.display = 'block';
        
    }else if(expresion.test(elemento.value)){
        elemento.classList.remove('incorrecto')
        errorMensaje[numError + 1].style.display = 'none';
        errorMensaje[numError].style.display = 'none';

    }
}

function comprobacionUsuarios(){

}