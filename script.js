const email = document.getElementById('email');
const mensagem = document.getElementById('mensagem');
const enviarBtn = document.getElementById('enviar');

enviarBtn.addEventListener('click', function(event) {
    event.preventDefault();

    if (email.value && mensagem.value) {
        alert('Mensagem enviada com sucesso!');
        email.value = '';
        mensagem.value = '';
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});