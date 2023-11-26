const togleon = document.getElementById("togleon");
const menus = document.getElementById("menus");
togleon.addEventListener("click", () => {
    togleon.setAttribute("class","hidden togle");
    menus.setAttribute("class","");
});

const togleoff = document.getElementById("togleoff");
togleoff.addEventListener("click", () => {
    togleon.setAttribute("class","togle");
    menus.setAttribute("class","hidden");
});
