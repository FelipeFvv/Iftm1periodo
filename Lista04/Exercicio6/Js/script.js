logins = [
    { user: "felipe", senha: 1234 },
    { user: "francielly", senha: 123456 }
];

localStorage.setItem("logins", JSON.stringify(logins));

loginsRecuperados = JSON.parse(localStorage.getItem("logins"));
tabela = document.getElementById('tabela');

for (let i = 0; i < loginsRecuperados.length; i++) {
    linha = document.createElement("tr");

    tdUser = document.createElement("td");
    tdUser.textContent = loginsRecuperados[i].user;

    tdSenha = document.createElement("td");
    tdSenha.textContent = loginsRecuperados[i].senha;

    linha.appendChild(tdUser);
    linha.appendChild(tdSenha);

    tabela.appendChild(linha);
}