nome = localStorage.getItem("nome");
partes = nome.split(' ');
palavras = [];

for (i = 0; i < partes.length; i++) {
    if (partes[i] != "") {
        palavras.push(partes[i]);
    }
}

primeiro = palavras[0];
ultimo = palavras[palavras.length - 1];

document.getElementById('mensagem').textContent = primeiro + " " + ultimo + ", seja bem-vindo ao jogo dos Felinos!";