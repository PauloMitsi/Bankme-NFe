export function formataData(data) {
    data = data.textContent

    const dataTexto = data.match(/\d{4}-\d{2}-\d{2}/)[0]

    const formata = /-/g

    const dataFormatada = dataTexto.replace(formata, '/')

    const dataFinal = dataFormatada.split('/').reverse().join('/')

    return dataFinal
}

export function formataValor(valor) {
        valor = valor.textContent
        
        const valorFormatado = `R$ ${valor}`

        return valorFormatado
        
}