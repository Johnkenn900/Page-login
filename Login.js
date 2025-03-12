document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault(); 

    const usuario = document.getElementById('usuario').value.trim();
    const senha = document.getElementById('senha').value.trim();
    const mensagem = document.getElementById('mensagem');

    if (usuario && senha) {
        mensagem.textContent = 'Logado com sucesso!';
        mensagem.style.color = '#00ff88';
    } else {
        mensagem.textContent = 'Preencha corretamente todos os campos!';
        mensagem.style.color = '#FF3377';
    }
});

