// dichiaro la costante (immagini)

const imgEl = document.querySelector(".imgs")

function getImages() {
    // fetcho
    fetch("https://lanciweb.github.io/demo/api/pictures/")
    .then(response => url.json())
    .then(data => {
        // ciclo for per generare le immagini
        for (let i = 0; i < 6; i++) {
            const markup = `
            <div class="col-4">
                <div class="card" style="width: 16rem;">
                    <img class="pin" src="./assets/img/pin.svg" alt="">
                    <div class="img">
                        <img class="imgs" src=`${imageEl}` alt="">
                    </div>
                    <p class="card-text text-body-tertiary pt-3 m-0">01-07-2024</p>
                    <h5 class="titoli"><strong>ALBEROBELLO</strong></h5>
                </div>
            </div>
            `
            imgEl.insertAdjacentHTML("beforeend", markup)
        }
    })
    .catch(error => {
        console.log("Non sono riuscito a generare le immagini", error); 
    })
}

getImages()




