function checkFrm() {
    let nom = document.getElementById('nom').value;
    let prenom = document.getElementById('prenom').value;
    let email = document.getElementById('email').value;
    let msg = "";

    if (nom === "") msg =+ 'Mets ton nom bordel !\r';
    if (prenom === "") msg =+ 'Mets ton prenom blaireau! \r';
    if (email === "") msg =+ 'Et ton mail !!!\r';

    alert(msg);
}

