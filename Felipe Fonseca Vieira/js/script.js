primeiroNome = document.getElementById('primeiroNome');
restanteNome = document.getElementById('restanteNome');
cargo = document.getElementById('cargo');

nomeCompleto = document.getElementById('nomeCompleto');
iniciais = document.getElementById('iniciais');
logoMinicurso = document.getElementById('logoMinicurso');
cargoExibido = document.getElementById('cargoExibido');
sala = document.getElementById('sala');

document.getElementById('btnHtml5').addEventListener('click', function () {
    gerarCracha('HTML5');
});
document.getElementById('btnCss3').addEventListener('click', function () {
    gerarCracha('CSS3');
});
document.getElementById('btnJs').addEventListener('click', function () {
    gerarCracha('JavaScript');
});

function gerarCracha(minicurso) {
    if (primeiroNome.value.trim() == "" || restanteNome.value.trim() == "" || cargo.value.trim() == "") {
        alert('Preencha o nome e o cargo para gerar o crachá.');
        return;
    }

    if (cargo.value.trim().toLowerCase() != 'professor' && cargo.value.trim().toLowerCase() != 'desenvolvedor') {
        alert('O cargo deve ser "Professor" ou "Desenvolvedor".');
        return;
    }

    // Nome completo em maiúsculas
    nomeArray = (primeiroNome.value.trim() + ' ' + restanteNome.value.trim()).split(' ');
    nomeCompleto.textContent = nomeArray.join(' ').toUpperCase();

    // Iniciais de cada palavra do nome
    letrasIniciais = '';
    for (i = 0; i < nomeArray.length; i++) {
        letrasIniciais += nomeArray[i].charAt(0).toUpperCase();
    }
    iniciais.textContent = letrasIniciais;

    // Logo do minicurso escolhido
    if (minicurso == 'HTML5') {
        logoMinicurso.src = 'img\html5.png';
    } else if (minicurso == 'CSS3') {
        logoMinicurso.src = 'img/css3.png';
    } else {
        logoMinicurso.src = 'img/javascript.png';
    }
    logoMinicurso.alt = minicurso;

    // Cargo com cor de acordo com o valor digitado
    cargoDigitado = cargo.value.trim().toLowerCase();
    if (cargoDigitado == 'professor') {
        cargoExibido.textContent = 'Professor';
        cargoExibido.style.color = 'green';
    } else {
        cargoExibido.textContent = 'Desenvolvedor';
        cargoExibido.style.color = 'red';
    }

    // Sala aleatória de 1 a 10
    numeroSala = Math.floor(Math.random() * 10) + 1;
    sala.textContent = 'Sala ' + numeroSala;
}