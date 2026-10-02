document.getElementById('login').addEventListener("click", function verificarLogin() {
    user = document.getElementById('user');
    senha = document.getElementById('senha');
    usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    achou = false;
    for(i = 0; i < usuarios.length; i++) {
        if(user.value == usuarios[i].user && senha.value == usuarios[i].senha) {
            achou = true;
            break;
        }
    }

    if(achou) {
        alert("USUÁRIO JÁ EXISTENTE");
    }else{
        alert("USUÁRIO INEXISTENTE");
    }
});

