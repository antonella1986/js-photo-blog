// dichiaro le costanti (immagini)

const imgEl = document.querySelector(".imgs")

// fetcho
fetch("https://lanciweb.github.io/demo/api/pictures/")
.then(response => response.json())
.then(data => {
    console.log(data.response);
    const newImage = data.response
    imgEl.innerHTML += `img.src=${newImage}`
})
.catch(error => {
    console.log(error); 
})