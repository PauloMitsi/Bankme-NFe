import { Usuario } from '../conta.js';

export const verificaConta = (email, senha) => {
    const contaSistema = JSON.parse(localStorage.getItem('usuarios'));
    var usuario = new Usuario(email, senha);

    var usuario = JSON.stringify(usuario);
    var usuarioLista = JSON.stringify(contaSistema);
    if (usuarioLista.indexOf(usuario) > 0) {
        return true;
    } else {
        return false;
    }
};
