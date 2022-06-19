
const imgList = ["back1.jpeg", "back2.jpeg", "back3.jpeg"];


const selected = imgList[Math.floor(Math.random() * imgList.length)];


bgImage = document.createElement("img");
bgImage.src = `images/${selected}`;
bgImage.classList = "changeOpacity";

mainFrame = document.querySelector(".mainframe");

// mainFrame.appendChild(bgImage);
mainFrame.style.backgroundImage = `url(images/${selected})`;