let btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
let plusBtn = document.getElementById("plus-btn");
let nmbrField = document.getElementById("number-field");
let number = 0;
let maxNumber = 10000;

btn.addEventListener("click", (e) => {
    if (menu.style.display === "none"){
        menu.style.display = "block";
    } 
    else {
        menu.style.display = "none";
    }
});

plusBtn.addEventListener("click", () => {
    plus()})

function plus(){
    if (number < maxNumber){
        number += 1;
        console.log(number);
        nmbrField.innerHTML = number;
    } else {
        console.log("Слишком много цифр");
        nmbrField.innerHTML = `Max: ${maxNumber}`;
    }
}