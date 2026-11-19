regexNascimento = /^\d{2}\/\d{2}\/(\d{4}|\d{2})$/;

regexCpf = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

regexMatricula = /^(IFTM|iftm)-\d{3}\/\d{3}-[a-zA-Z0-9]{2}$/;

regexDisciplina1 = /^MT-\d{2}\.\d{3}-IFTM$/i;

regexDisciplina2 = /^MT-\d{2}\.\d{3}-[Ii][Ff][Tt][Mm]$/;

regexDisciplina3 = /^M ?T-\d{2}\.\d{3}-I ?F ?T ?M$/i;

regexCampus = /^IFTM campus Uberlândia( Centro)?$/;

regexTelefone1 = /^\+\d{2}\(\d{2}\)\d{5}-\d{4}$/;

regexTelefone2 = /^\(\d{2,3}\) ?\d{4,5}-\d{4}$/;

regexAltura = /^(1[.,][3-9]\d?|2[.,][0-4]\d?|2[.,]50?)$/;

regexFaturamento = /^R\$\d{1,3}(\.\d{3}){0,3},\d{1,2}$/;

regexCronometro = /^([01]\d|2[0-3]):[0-5]\d:[0-5]\d:\d{2}$/;

function validar(idCampo, regex) {
    if (regex.test(document.getElementById(idCampo).value)) {
        alert('Valor válido!');
    } else {
        alert('Valor inválido!');
    }
}