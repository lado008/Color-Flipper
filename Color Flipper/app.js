const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const color = document.getElementById("color");
 
btn.addEventListener("click", function(){
    const randomNumber = getRandomNumber();
     document.body.style.backgroundColor = colors[randomNumber];
     btn.style.backgroundColor = colors[randomNumber];
     color.style.textTransform = "capitalize";
    color.innerHTML = colors[randomNumber];
})

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length)
}