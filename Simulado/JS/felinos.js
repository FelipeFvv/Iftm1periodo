nome = localStorage.getItem("nome");
partes = nome.split(' ');
primeiroNome = "";

for (i = 0; i < partes.length; i++) {
    if (partes[i] != "") {
        primeiroNome = partes[i];
        break;
    }
}

gato1 = document.getElementById('gato1');
gato2 = document.getElementById('gato2');
gato3 = document.getElementById('gato3');
gato4 = document.getElementById('gato4');
textoGato4 = document.getElementById('textoGato4');
campoCarinhos = document.getElementById('carinhos');
campoSorte = document.getElementById('numeroSorte');

carinhos = 0;
gato1.addEventListener('click', dizerOi);
gato2.addEventListener('click', darCarinho);
gato3.addEventListener('mouseover', trocarParaGato06);
gato3.addEventListener('mouseout', voltarParaGato03);
gato4.addEventListener('mouseover', mostrarCocegas);
gato4.addEventListener('mouseout', voltarTextoOriginal);
document.getElementById('gerar').addEventListener('click', gerarNumeroDaSorte);

function dizerOi() {
    alert("Oi " + primeiroNome + ", tudo bem com você?");
}

function darCarinho() {
    carinhos++;
    campoCarinhos.textContent = carinhos;
}

function trocarParaGato06() {
    gato3.src = "Imagens/gato06.gif";
}

function voltarParaGato03() {
    gato3.src = "Imagens/gato03.gif";
}

function mostrarCocegas() {
    textoGato4.textContent = "Ai, pare de fazer cócegas!";
}

function voltarTextoOriginal() {
    textoGato4.textContent = "lá lá lá lá lá lá";
}

function gerarNumeroDaSorte() {
    campoSorte.value = Math.floor(Math.random() * 100) + 1;
}