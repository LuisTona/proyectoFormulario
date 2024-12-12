let login = document.getElementById('login');
let usuario = document.getElementById('usuario');

window.addEventListener('DOMContentLoaded', ()=>{
    let user = localStorage.getItem('usuario');
    user = JSON.parse(user);

    if(user == null){
        login.style.display = 'block';
        usuario.style.display = 'none';
    }else{
        usuario.innerHTML = user.nombre;
        usuario.style.display = 'block';
        login.style.display = 'none';
    }
});