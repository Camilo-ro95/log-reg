var aName = [],
    aMail = [],
    aPass = [];

var elBtnRegistrar = document.querySelector('#btnRegistrar');

elBtnRegistrar.addEventListener('click', registrarUsuario);

function registrarUsuario() {
    var sName = document.querySelector('#txtName').value,
        sMail = document.querySelector('#txtMail').value,
        sPass = document.querySelector('#txtPass').value;

    aName.push(sName);
    aMail.push(sMail);
    aPass.push(sPass);

    localStorage.setItem('name_usuario', JSON.stringify(aName));
    localStorage.setItem('mail_usuario', JSON.stringify(aMail));
    localStorage.setItem('pass_usuario', JSON.stringify(aPass));
}