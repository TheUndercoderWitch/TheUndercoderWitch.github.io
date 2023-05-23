/*--- nav code - start ---*/
const navBar = document.getElementById("nav");
let navScrolled = false;

window.addEventListener("scroll", () =>{
    if(window.scrollY > 50){
        navBar.classList.add("scrolled_nav");
    }
    else{
        navBar.classList.remove("scrolled_nav");
    }
})
/*--- nav code - end ---*/