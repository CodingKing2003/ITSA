var loader = document.querySelector(".loader")

window.addEventListener("load", vanish);

function vanish() {
    loader.classList.add("disppear");
}

window.addEventListener("load", preventScroll);
  
function preventScroll() {
    document.getElementById('body').style.overflow = 'auto'
};