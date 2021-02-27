import { Linha } from './modulos/Linha.js';
import { formataData, formataValor } from './modulos/formatadores.js';
import { conferidor } from './modulos/conferidor.js';


const botao = document.querySelector('[send-button]');
const form = document.querySelector('[data-form]');


form.addEventListener('submit', async (e) => {
    e.preventDefault();
    // $(this).submit();
    const arquivo = document.querySelector('[file-input]');
    var nomeDoArquivo = arquivo.files[0].name;

    const files = arquivo.files;
    if (!files.length) {
        return;
    }

    const [file] = files;
    const formData = new FormData(this);
    formData.set('file', file);

    try {
        const { data } = await axios({
            method: 'post',
            url: 'http://localhost:3000/api/upload',
            data: formData,
            headers: { 'Content-Type': 'multipart/form-data' },
        });

        alert('Arquivo cadastrado com sucesso!');
    } catch (error) {
        alert('arquivo existente');
        // alert(error.message);
    }

    localStorage.setItem('arquivo', nomeDoArquivo)
});


const RodaArquivo = () => {
    const tabela = document.querySelector('[data-tabela]')

    const arquivoAtual = localStorage.getItem('arquivo')

    fetch(`../frontend/xml/${arquivoAtual}`).then((res) => {
        res.text().then((xml) => {
            
            
            let parser = new DOMParser();
            let xmlDOM = parser.parseFromString(xml, 'application/xml');

            let ide = xmlDOM.querySelector('ide');
            let destinatario = xmlDOM.querySelector('dest');
            let emitente = xmlDOM.querySelector('emit');
            let total = xmlDOM.querySelector('total');

            const nomeEmit = emitente.querySelector('xNome').textContent;
            const CNPJEmit = emitente.querySelector('CNPJ').textContent;

            const nomeDest = destinatario.querySelector('xNome').textContent;
            const CNPJDest = destinatario.querySelector('CNPJ').textContent;

            const data = ide.querySelector('dhEmi');
            const valor = total.querySelector('vNF');

            const valorFormatado = formataValor(valor);

            const dataFormatada = formataData(data);

            const dadosAnteriores =
                JSON.parse(localStorage.getItem('NFe')) || [];

            const dados = [
                dataFormatada,
                nomeEmit,
                CNPJEmit,
                nomeDest,
                CNPJDest,
                valorFormatado,
            ];

            var ConferiArquivo = conferidor(dadosAnteriores, dados);

            if (ConferiArquivo < 0) {
                const listaDeDados = [...dadosAnteriores, dados];
                localStorage.setItem('NFe', JSON.stringify(listaDeDados));
                tabela.style = "display: ;"
                Linha(dados);
            } else {
                Linha();
            }
        });
    });
};

RodaArquivo()
