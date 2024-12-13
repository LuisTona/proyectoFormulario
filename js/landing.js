const login = document.getElementById('login');
const usuario = document.getElementById('usuario');
let userName = document.getElementById('nombre');
const logout = document.getElementById('logout'); 

window.addEventListener('DOMContentLoaded', ()=>{
    let user = localStorage.getItem('log');
    if(user == null){
        login.style.display = 'block';
        usuario.style.display = 'none';
    }else{
        userName.textContent = user;
        usuario.style.display = 'inline-block';
        login.style.display = 'none';
    }
});

logout.addEventListener('click', ()=>{
    localStorage.removeItem('log');
    window.location.reload();
})