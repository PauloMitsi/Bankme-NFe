import { LogaUsuario } from './modulos/logaUsuario.js';

const BotaoSingup = document.querySelector('[data-botao]');
const email = document.querySelector('[signup-email]');
const senha = document.querySelector('[signup-senha]');
const confirmaSenha = document.querySelector('[signup-confirmaSenha]');

BotaoSingup.addEventListener('click', () => {
    const emailValor = email.value;
    const senhaValor = senha.value;
    const confirmaSenhaValor = confirmaSenha.value;
    const RegEx = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}/g;

    const testaEmail = emailValor.match(RegEx);

    if (testaEmail == null) {
    } else {
        if (senhaValor == '' || confirmaSenhaValor == '') {
        } else {
            if (senhaValor == confirmaSenhaValor) {
                LogaUsuario(emailValor, senhaValor);

                alert('Your account has been created')
                history.pushState({}, '', 'index.html');
            } else {
                alert('the passwords must be the same');
            }
        }
    }
});
