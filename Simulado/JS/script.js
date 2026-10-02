alert("Olá, seja bem-vindo!");

document.getElementById('entrar').addEventListener("click", function acessarSistema() {
    let nome = document.getElementById('nome').value;
    let palavras = nome.split(' ');
    let contador = 0;

    for (let i = 0; i < palavras.length; i++) {
        if (palavras[i] != "") {
            contador++;
        }
    }

    if (contador == 0) {
        alert("O campo Nome completo não pode estar em branco.");
    } else if (contador < 2) {
        alert("Informe pelo menos NOME + SOBRENOME.");
    } else {
        localStorage.setItem("nome", nome);
        window.location.href = 'menu.html';
    }
});