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
    
var recomendations = document.getElementById('leftbar-recomendations')

    fetch('teste.json')
    .then(res => res.json())
    .then(data => {

        for(i=0; i<10; i++){
            recomendations.innerHTML += `
        <a href="${i}" class="recomendations">
         <img src="${data.recomendations[i].image}" alt="" class="recomendation-img">

            <div class="recomendation-info">
                <p class="recomendation-name">${data.recomendations[i].name}</p>
                <p class="recomendation-review">${data.recomendations[i].review}</p>
                <p class="recomendation-price">${data.recomendations[i].preco}</p>
            </div>
        </a>
        `}
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
                <p class="item-category">${data.pcs_separadas[i].category}</p>
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
                <p class="item-category">${data.pcs_montados[i].category}</p>
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
                <p class="item-category">${data.pcs_trabalho[i].category}</p>
                <p class="item-price">${data.pcs_trabalho[i].preco}</p>
            </div>
        </a>
        `}
    })

    var release = document.getElementById('last-release')
    var r



    fetch('teste.json')
    .then(res => res.json())
    .then(data => {

        switch (data.last_release[0].review) {
            case 1:
                data.last_release[0].review = `
                <ion-icon name=\"star\"></ion-icon>
                <ion-icon name=\"star-outline\"></ion-icon>
                <ion-icon name=\"star-outline\"></ion-icon>
                <ion-icon name=\"star-outline\"></ion-icon>
                <ion-icon name=\"star-outline\"></ion-icon>
                `
                break;
        
            case 2:
                data.last_release[0].review = `
                <ion-icon name=\"star\"></ion-icon>
                <ion-icon name=\"star\"></ion-icon>
                <ion-icon name=\"star-outline\"></ion-icon>
                <ion-icon name=\"star-outline\"></ion-icon>
                <ion-icon name=\"star-outline\"></ion-icon>
                `
                break;
        
            case 3:
                data.last_release[0].review = `
                <ion-icon name=\"star\"></ion-icon>
                <ion-icon name=\"star\"></ion-icon>
                <ion-icon name=\"star\"></ion-icon>
                <ion-icon name=\"star-outline\"></ion-icon>
                <ion-icon name=\"star-outline\"></ion-icon>
                `
                break;
        
            case 4:
                data.last_release[0].review = `
                <ion-icon name=\"star\"></ion-icon>
                <ion-icon name=\"star\"></ion-icon>
                <ion-icon name=\"star\"></ion-icon>
                <ion-icon name=\"star\"></ion-icon>
                <ion-icon name=\"star-outline\"></ion-icon>
                `
                break;
        
            case 5:
                data.last_release[0].review = `
                <ion-icon name=\"star\"></ion-icon>
                <ion-icon name=\"star\"></ion-icon>
                <ion-icon name=\"star\"></ion-icon>
                <ion-icon name=\"star\"></ion-icon>
                <ion-icon name=\"star\"></ion-icon>
                `
                break;
        
            default:
                data.last_release[0].review =`
                <ion-icon name=\"star-outline\"></ion-icon>
                <ion-icon name=\"star-outline\"></ion-icon>
                <ion-icon name=\"star-outline\"></ion-icon>
                <ion-icon name=\"star-outline\"></ion-icon>
                <ion-icon name=\"star-outline\"></ion-icon>
                `
                break;
        }

        release.innerHTML += `
        <a href="${data.last_release[0].id}" class="last-release-container">
         <img src="${data.last_release[0].image}" alt="" class="last-release-img">

            <div class="last-release-info">
                <p class="release-review">${data.last_release[0].review}</p>
                <p class="release-name">${data.last_release[0].name}</p>
                <p class="release-description">${data.last_release[0].description}</p>
                <p class="release-price">${data.last_release[0].preco}</p>
            </div>
        </a>
        `

        var more_products = document.getElementById('more-products')

        fetch('teste.json')
        .then(res => res.json())
        .then(data => {
    
            for(i=0; i<12; i++){

                switch (data.more_products[i].review) {
                    case 1:
                        data.more_products[i].review = `
                        <ion-icon name=\"star\"></ion-icon>
                        <ion-icon name=\"star-outline\"></ion-icon>
                        <ion-icon name=\"star-outline\"></ion-icon>
                        <ion-icon name=\"star-outline\"></ion-icon>
                        <ion-icon name=\"star-outline\"></ion-icon>
                        `
                        break;
                
                    case 2:
                        data.more_products[i].review = `
                        <ion-icon name=\"star\"></ion-icon>
                        <ion-icon name=\"star\"></ion-icon>
                        <ion-icon name=\"star-outline\"></ion-icon>
                        <ion-icon name=\"star-outline\"></ion-icon>
                        <ion-icon name=\"star-outline\"></ion-icon>
                        `
                        break;
                
                    case 3:
                        data.more_products[i].review = `
                        <ion-icon name=\"star\"></ion-icon>
                        <ion-icon name=\"star\"></ion-icon>
                        <ion-icon name=\"star\"></ion-icon>
                        <ion-icon name=\"star-outline\"></ion-icon>
                        <ion-icon name=\"star-outline\"></ion-icon>
                        `
                        break;
                
                    case 4:
                        data.more_products[i].review = `
                        <ion-icon name=\"star\"></ion-icon>
                        <ion-icon name=\"star\"></ion-icon>
                        <ion-icon name=\"star\"></ion-icon>
                        <ion-icon name=\"star\"></ion-icon>
                        <ion-icon name=\"star-outline\"></ion-icon>
                        `
                        break;
                
                    case 5:
                        data.more_products[i].review = `
                        <ion-icon name=\"star\"></ion-icon>
                        <ion-icon name=\"star\"></ion-icon>
                        <ion-icon name=\"star\"></ion-icon>
                        <ion-icon name=\"star\"></ion-icon>
                        <ion-icon name=\"star\"></ion-icon>
                        `
                        break;
                
                    default:
                        data.more_products[i].review =`
                        <ion-icon name=\"star-outline\"></ion-icon>
                        <ion-icon name=\"star-outline\"></ion-icon>
                        <ion-icon name=\"star-outline\"></ion-icon>
                        <ion-icon name=\"star-outline\"></ion-icon>
                        <ion-icon name=\"star-outline\"></ion-icon>
                        `
                        break;
                }

            more_products.innerHTML += `
            <a href="${i}" class="more-items">
             <img src="${data.more_products[i].image}" alt="" class="more-products-img">
                <div class="more-items-info">
                <p class="more-item-category">${data.more_products[i].category}</p>
                    <p class="more-item-name">${data.more_products[i].name}</p>
                    <p class="more-item-review">${data.more_products[i].review}</p>
                    <p class="more-item-price">${data.more_products[i].preco}</p>
                </div>
            </a>
            `}
        })

    })
        