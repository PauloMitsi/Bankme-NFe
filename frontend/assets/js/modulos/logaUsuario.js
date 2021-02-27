import { Usuario } from '../conta.js';

export function LogaUsuario(email, senha) {
    const usuario = new Usuario(email, senha);

    const usuarioFormatado = JSON.stringify(usuario);

    const contas = JSON.parse(localStorage.getItem('usuarios')) || [];

    const dados = [usuario, ...contas]

    localStorage.setItem('usuarios', JSON.stringify(dados))
    if (contas == null) {
        localStorage.setItem('usuarios', usuarioFormatado);
    } else {
    }
}
