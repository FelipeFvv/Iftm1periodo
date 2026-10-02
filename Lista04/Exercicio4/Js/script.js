user = document.getElementById('user');
senha = document.getElementById('senha');

document.getElementById('login').addEventListener("click", armazenar);

function armazenar(){
 
    login = {
        user: user.value,
        senha: senha.value
    }

        localStorage.setItem('login', JSON.stringify(login));


}
