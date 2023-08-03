//Assign each button to a variable
let aqua = document.querySelector("#aqua");
let teal = document.querySelector("#teal");
let pink = document.querySelector("#pink");
let purple = document.querySelector("#purple");
let colorless = document.querySelector("#colorless");
let div = document.querySelector("div");


//When specific button is clicked, display color and text are changed to be that color.
aqua.onclick = function() {
    div.style.backgroundColor = "aqua";
    div.innerHTML = "aqua";
}

teal.onclick = function() {
    div.style.backgroundColor = "teal";
    div.innerHTML = "teal";
}

pink.onclick = function() {
    div.style.backgroundColor = "pink";
    div.innerHTML = "pink";
}

purple.onclick = function() {
    div.style.backgroundColor = "purple";
    div.innerHTML = "purple";
}

colorless.onclick = function() {
    div.style.backgroundColor = "white";
    div.innerHTML = "colorless";
}