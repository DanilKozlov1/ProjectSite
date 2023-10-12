let btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

btn.addEventListener("click", (e) => {
    if (menu.style.display === "none"){
        menu.style.display = "block";
    } 
    else {
        menu.style.display = "none";
    }
});
