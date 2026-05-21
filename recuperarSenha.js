const inputEmail = document.getElementById('email');
const botaoEnviaLink = document.getElementById('enviaLink')

botaoEnviaLink.addEventListener('click', function(){
    const email = inputEmail.value.trim();

    if (email === "") {
        alert('Email não pode esta vazio!');
        return;
    }

    if (!email.includes('@')) {
        alert("Email inválido - @");
        return;
    }

    alert("Link enviado para o seu email");
})