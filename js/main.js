function getImages() {
    // fetcho
    fetch("https://lanciweb.github.io/demo/api/pictures/")
    .then((response) => response.json())
    // data contiene un array con i dati che ci servono, ricevuti dall'API
    .then((data) => {
        console.log(data);
        
        // seleziono il contenitore delle immagini
        // cerco nella DOM l'elemento nel quale aggiungere le immagini e ci creo una costante
        const thoseCards = document.querySelector(".cards")
        // ciclo for per generare le immagini
        for (let i = 0; i < data.length; i++) {
            // prendo il singolo oggetto (titolo, data e immagine)
            const thisCard = data[i]
            console.log(thisCard);
            
            // preparo il markup
            const markup = `
            <div class="col-lg-4 col-md-6 col-sm-12 mb-5 d-flex flex-wrap justify-content-center">
                <div class="card" style="width: 16rem;">
                    <img class="pin" src="./assets/img/pin.svg" alt="">
                    <div class="img">
                        <img class="imgs" src="${thisCard.url}" alt="">
                    </div>
                    <p class="card-text text-body-tertiary pt-3 m-0">${thisCard.date}</p>
                    <h5 class="titoli"><strong>${thisCard.title.toUpperCase()}</strong></h5>
                </div>
            </div>
            `
            // inserisco il nuovo HTML nella DOM
            thoseCards.innerHTML += markup
        }
        // overlay
        const btnChiusoEl = document.querySelector(".btnChiuso")
        const overlayEl = document.querySelector(".overlay")
        const imagesEl = document.querySelectorAll(".imgs")
        const overlayImage = document.querySelector(".overlay img")
        
        // faccio un ciclo per applicare l'event listener su tutte le immagini
        imagesEl.forEach((thisImage) => {
            thisImage.addEventListener("click", function(event) {
                // al click su un'immagine deve apparire l'overlay (sfondo, immagine e pulsante)
                overlayEl.style.display = "block";
                // Richiamo l'src (l'URL dell'immagine) in modo che l'overlay mostri la foto cliccata sul momento
                overlayImage.src = event.target.src
            })
        });
        
                
        btnChiusoEl.addEventListener("click", () => {
            overlayEl.style.display = "none";
        })

        // in caso di errore
        .catch((error) => {
            console.error(error.message); 
        })
    })
}

getImages()
