const nav = document.querySelector("#sticky");
window.addEventListener("scroll", () => {
    if(window.scrollY > 50){
        nav.classList.add("scrolled");
    }
    else{
        nav.classList.remove("scrolled");
    }
});