function obtenerListaUsuarios(){
    var listaUsuarios = JSON.parse(localStorage.getItem('listaUsuariosLs'));

    if(listaUsuarios == null){
        listaUsuarios =
        [
            ['1','Camilo Romero','camilo.romero@gmail.com','camilo123','1'],
            ['2','Andres Molano','andres.molano@gmail.com','andres123','1']
        ]
    }
    return listaUsuarios;
}
function validarCredenciales(pCorreo , pContraseña){
    var listaUsuarios = obtenerListaUsuarios();
    var bAcceso = false;

    for(var i = 0; i < listaUsuarios.length; i++){
        if(pCorreo == listaUsuarios[i][2] && pContraseña == listaUsuarios[i][3]){
            bAcceso = true;
            sessionStorage.setItem('usuarioActivo', listaUsuarios[i][1]);
            sessionStorage.setItem('rolUsuarioActivo', listaUsuarios[i][4]);
        }
    }
    return bAcceso;
}