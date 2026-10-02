user = document.getElementById('user');
senha = document.getElementById('senha');
usuarios = [];

document.getElementById('cadastrar').addEventListener('click', armazenarUsuario);

function armazenarUsuario() {
    novoUsuario = {
        user: user.value,
        senha: senha.value
    };

    usuarios.push(novoUsuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    user.value = "";
    senha.value = "";
}