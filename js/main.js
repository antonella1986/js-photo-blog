function getImages() {
    // fetcho
    fetch("https://lanciweb.github.io/demo/api/pictures/")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        
        // ciclo for per generare le immagini
        const thoseCards = document.querySelector(".cards")
        for (let i = 0; i < data.length; i++) {
            const thisCard = data[i]
            console.log(thisCard);
            
            // preparo il markup
            const markup = `
            <div class="col-4 mb-3">
                <div class="card" style="width: 16rem;">
                    <img class="pin" src="./assets/img/pin.svg" alt="">
                    <div class="img">
                        <img class="imgs" src="${thisCard.url}" alt="">
                    </div>
                    <p class="card-text text-body-tertiary pt-3 m-0">${thisCard.date}</p>
                    <h5 class="titoli"><strong>${thisCard.title}</strong></h5>
                </div>
            </div>
            `
            // inserisco il nuovo HTML nella DOM
            thoseCards.innerHTML += markup
        }
    })
    .catch((error) => {
        console.error(error.message); 
    })
}

getImages()




