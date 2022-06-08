
const imgList = ["back1.jpeg", "back2.jpeg", "back3.jpeg"];


const selected = imgList[Math.floor(Math.random() * imgList.length)];


bgImage = document.createElement("img");
bgImage.src = `images/${selected}`;

document.body.appendChild(bgImage);