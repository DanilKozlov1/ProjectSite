let carusel = document.getElementById("carusel");
let arrow1 = document.getElementById("arrow1");
let arrow2 = document.getElementById("arrow2");
let maxImg = 3;
let curImg = 1;

arrow1.addEventListener("click", () => {
    setCarusel(1)});
arrow2.addEventListener("click", () => {
    setCarusel(0)});

function setCarusel(arg){
    if (arg) {
        curImg -= 1;
        if (curImg < 1) curImg = maxImg;
    } else {
        curImg++;
        if (curImg > maxImg) curImg = 1;
    }
    console.log(`Current image - ${curImg}`);
    carusel.querySelector("img").src=`src/img/fish${curImg}.png`
}