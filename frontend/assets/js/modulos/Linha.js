export function Linha(dados) {
    const tabela = document.querySelector('[body-itens]');

    const dadosLS = JSON.parse(localStorage.getItem('NFe'));

    const tr = criaLinha(dadosLS, tabela);
}

const criaLinha = (dados, tabela) => {

    dados.forEach((element) => {
        var tr = document.createElement('tr');
        tr.className = 'table__body';
        element.forEach((item) => {
            var td = document.createElement('td');
            td.className = 'body__itens';
            td.innerHTML = item;
            tr.appendChild(td);
        });
        tabela.appendChild(tr);
    });
};

export const carregaLinha = (dados) => {
    const corpoDaTabela = document.querySelector('[body-itens]');
    corpoDaTabela.appendChild(dados);
};
