document.getElementById('cadastrar').addEventListener("click", function armazenarUsuario() {
    user = document.getElementById('user');
    senha = document.getElementById('senha');
    novoUsuario = {user: user.value, senha: senha.value};
    usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    achou = false;
    for(i = 0; i < usuarios.length; i++) {
        if(novoUsuario.user == usuarios[i].user) {
            alert("Usuário já cadastrado!");
            achou = true;
            break;
        }
    }

    if(!achou) {
        usuarios.push(novoUsuario);
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
        alert("Usuário cadastrado com sucesso!");
    }

    user.value = "";
    senha.value = "";
});