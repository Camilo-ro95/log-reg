document.querySelector('#btnIniciar').addEventListener('click', iniciarSesion);

function iniciarSesion() {
    var sCorreo = '';
    var sContraseña = '';
    var bAcceso = false;

    sCorreo = document.querySelector('#txtCorreo').value;
    sContraseña = document.querySelector('#txtContraseña').value;

    bAcceso = validarCredenciales(sCorreo,sContraseña);
    /* console.log(bAcceso); */

    if(bAcceso == true){
        ingresar();
    }
}

function ingresar() {
    var rol = sessionStorage.getItem('rolUsuarioActivo');
    switch(rol){
        /* case '1':
            window.location.href = 'registro.html';
            break; */
            case '1':
            window.location.href = 'cliente.html';
            break;
            default:
                window.location.href = 'login.html';
            break;
    }
}