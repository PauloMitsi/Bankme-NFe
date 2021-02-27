import { verificaConta } from './modulos/verificaConta.js';

const email = document.querySelector('[login-email]');
const senha = document.querySelector('[login-senha]');
const botao = document.querySelector('[data-botao]');

botao.addEventListener('click', () => {
    const emailValor = email.value;
    const senhaValor = senha.value;

    const contaExiste = verificaConta(emailValor, senhaValor);
    if (contaExiste) {
        alert("logged!")
        history.pushState({}, '', 'NFe.html');
    } else {
        alert("Incorrect password or the account doens't exist");
    }
});

