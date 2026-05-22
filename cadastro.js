const inputNome = document.getElementById('nome');
const inputEmail = document.getElementById('email');
const inputSenha = document.getElementById('senha');
const inputConfirmaSenha = document.getElementById('confirmaSenha');
const checkboxTermos = document.getElementById('checkbox');
const botaoCadastrar = document.getElementById('submit');


botaoCadastrar.addEventListener('click', function() {
    const nome = inputNome.value.trim();
    const email = inputEmail.value.trim();
    const senha = inputSenha.value.trim();
    const checkbox = checkboxTermos.checked;
    const confirmaSenha = inputConfirmaSenha.value.trim();

    if (nome === "") {
        alert('Nome não pode está vazio!');
        return;
    }

    if (email === "") {
        alert('Email não pode ser vazio!');
        return;
    }

    if (!email.includes("@")) {
        alert("Email inválido - falta @");
        return;
    }

    if (senha === "") {
        alert('Senha não pode está vazia!');
        return;
    }

    if (senha.length < 6) {
        alert('Senha deve ter no mínimo 6 caracteres!');
        return;
    }

    if (confirmaSenha === "") {
        alert('Confime sua senha!');
        return;
    }

    if (senha !== confirmaSenha) {
        alert('Senha não é igual!');
        return;
    }

    if (!checkboxTermos.checked) {
        alert('Aceite os termos!');
        return;
    }
})






document.addEventListener('DOMContentLoaded', ()=>{
// logica para a pag de cadastro
    if (document.getElementById('cadastro-form')) {
        const cadastroForm = document.getElementById('cadastro-form')
        cadastroForm.addEventListener('submit', (e)=>{
            e.preventDefault();

            const username = document.getElementById('nome').value
            const password = document.getElementById('senha').value
            const email = document.getElementById('email').value
            const usuario = {username, email, password};
            localStorage.setItem('usuario', JSON.stringify(usuario))

            alert('Usuário cadastrado com sucesso!');
            window.location.href = 'index.html';
        });
    }
})


// logica para a pag de login
//logica para a pag de sucesso





