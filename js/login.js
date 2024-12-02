// js del login queda revisarlo por si se puede mejorar o implementar alguna funcionalidad a mayores
const form = document.querySelector('form');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    let datos = JSON.parse(localStorage.usuario);
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    if(datos.nombre == data.user && datos.pass == data.contraseña){
        let h1 = document.querySelector('h1');
        h1.style.display = 'block';
    }
})