var i

var showcase = document.getElementById('product-showcase')

fetch('teste.json')
    .then(res => res.json())
    .then(data => {
        console.log(data.item_showcase[0].name)

        for(i=0; i<4; i++){
            showcase.innerHTML += `
            <div class="item-showcase">
            <img src="${data.item_showcase[i].image}" alt="" class="img-size-items" id="img-item">
                <div class="content-showcase">
                    <p>${data.item_showcase[i].name}</p>
                    <a href="#">Show All</a>
                </div>
            <p class="">(${data.item_showcase[i].quantity})</p>
            </div>
            `
        }
    })

















var product = document.getElementById('pecas-separadas-container')

fetch('teste.json')
    .then(res => res.json())
    .then(data => {

        for(i=0; i<10; i++){
        product.innerHTML += `
        <a href="${i}" class="pecas-separadas">
            <img src="${data.pcs_separadas[i].image}" alt="" class="img-size-items" id="img-item">

            <div class="pecas-separadas-info">
                <p class="item-name">${data.pcs_separadas[i].name}</p>
                <p class="item-category">${data.pcs_separadas[i].descricao}</p>
                <p class="item-price">${data.pcs_separadas[i].preco}</p>
            </div>
        </a>
        `}
    })

    var montados = document.getElementById('pcs-montados-container')

    fetch('teste.json')
    .then(res => res.json())
    .then(data => {

        for(i=0; i<10; i++){
        montados.innerHTML += `
        <a href="${i}" class="pecas-separadas">
            <img src="${data.pcs_montados[i].image}" alt="" class="img-size-items" id="img-item">

            <div class="pecas-separadas-info">
                <p class="item-name">${data.pcs_montados[i].name}</p>
                <p class="item-category">${data.pcs_montados[i].descricao}</p>
                <p class="item-price">${data.pcs_montados[i].preco}</p>
            </div>
        </a>
        `}
    })

    var trabalho = document.getElementById('pcs-trabalho-container')

    fetch('teste.json')
    .then(res => res.json())
    .then(data => {

        for(i=0; i<10; i++){
        trabalho.innerHTML += `
        <a href="${i}" class="pecas-separadas">
         <img src="${data.pcs_trabalho[i].image}" alt="" class="img-size-items" id="img-item">

            <div class="pecas-separadas-info">
                <p class="item-name">${data.pcs_trabalho[i].name}</p>
                <p class="item-category">${data.pcs_trabalho[i].descricao}</p>
                <p class="item-price">${data.pcs_trabalho[i].preco}</p>
            </div>
        </a>
        `}
    })

    var release = document.getElementById('last-release')

    fetch('teste.json')
    .then(res => res.json())
    .then(data => {

        for(i=0; i<10; i++){
        release.innerHTML += `
        <a href="${i}" class="last-release-container">
         <img src="${data.last_release[i].image}" alt="" class="last-release-img">

            <div class="last-release-info">
                <p class="release-name">${data.last_release[i].review}</p>
                <p class="release-name">${data.last_release[i].name}</p>
                <p class="release-category">${data.last_release[i].description}</p>
                <p class="release-price">${data.last_release[i].preco}</p>
            </div>
        </a>
        `}
    })
        