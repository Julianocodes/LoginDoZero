const botao = document.getElementById('botaoEnter');
const inputEmail = document.getElementById('email');
const inputSenha = document.getElementById('senha');


botao.addEventListener('click', function(){
    const email = inputEmail.value.trim();
    const senha = inputSenha.value.trim();
console.log(email, senha)
    if (email == "") {
        alert("Email não pode ser vazio!");
        return;
    }

    if (!email.includes("@")) {
        alert("Email inválido - falta @");
        return;
    }

    if (senha === "") {
        alert("Senha não pode ser vazia!");
        return;
    }

    if (senha.length < 6) {
        alert("Senha deve ter no mínimo 6 caracteres!");
        return;
    }

    //alert("Formulário validado com sucesso");
})



// logica para a pag de login
    if (document.getElementById('login-form')) {
        const loginForm = document.getElementById('login-form');
        loginForm.addEventListener('submit', (e)=>{
            e.preventDefault();

            const email = document.getElementById('email').value
            const password = document.getElementById('senha').value

            const usuarioCadastrado = JSON.parse(localStorage.getItem('usuario'));
           if (usuarioCadastrado && usuarioCadastrado.email === email && usuarioCadastrado && usuarioCadastrado.password === password){
                localStorage.setItem('logado', email);
                alert('Login realizado com sucesso!');
                window.location.href = 'sucesso.html'
           } else {
                alert('Usuário ou senha incorretos.');
           }
        })

        

    }