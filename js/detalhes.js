function buscarImovel() {
    const urlPagina = window.location.href
    const id = urlPagina.split('=')[1]
    const imvDetalhe = buscarImovelPeloId(id)
    atualizarImovel(imvDetalhe)
}

buscarImovel()

function atualizarImovel(imovel) {    
    //section Imagem
    const imgImv = document.getElementById('img')
    imgImv.setAttribute('src', imovel.url_foto)

    //section Titulo
    const tituloImv = document.getElementById('titulo')
    tituloImv.textContent = imovel.nome

    //section Localização
    const localizacaoImv = document.getElementById('localizacao')
    localizacaoImv.textContent = (`${imovel.cidade} - ${imovel.estado}`)

    //section adicionais
    const adicionais = imovel.adicionais
    const ul = document.getElementById("lista-adicionais")

    if (adicionais.length == 0) { 
        const li = document.createElement("li")
        li.textContent = "Não há informações adicionais"
        ul.appendChild(li)
    } else {
        for (let i = 0; i < adicionais.length; i++) {
            const adicional = adicionais[i];
            const chave = adicional.chave
            const valor = adicional.valor
    
            const li = document.createElement('li')
            li.textContent = `${chave}: ${valor}`
            ul.appendChild(li)
            
        }
    }    

    

    
}


