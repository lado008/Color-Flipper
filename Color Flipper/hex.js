const hex = [0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"];
const btn = document.getElementById("btn");
const color = document.getElementById("color");

btn.addEventListener("click", function(){
    let hexValue = "#";
    for (let i = 0; i < 6; i++) {
        hexValue += hex[getRandomNumber()];
    }
    document.body.style.backgroundColor = hexValue;
    btn.style.backgroundColor = hexValue;
    color.textContent = hexValue;
})

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}