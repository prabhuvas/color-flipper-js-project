const colors = ["green", "red", "purple", "pink", "yellow", "white", "grey", "brown"];
const btn = document.getElementById("section-a");
const color = document.querySelector("#colorName");

btn.addEventListener("click", function() {
    const randomNumber = getRandomNumber();

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}