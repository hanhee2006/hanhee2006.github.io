const images = [
  "0.JPG","1.JPG","2.JPG", "3.JPG"
]


const chosenImage = images[Math.floor(Math.random() * images.length)]
const body = document.querySelector("body")



body.style.backgroundImage =`url(./img/${chosenImage})`
body.style.backgroundSize = 'cover'


