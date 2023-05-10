/*--- nav variables start ---*/
let navScrolled = false;
const nav = document.getElementById("nav");

let navMenuOpened = false;
const navMenu = document.getElementById("nav_menu");
const navBtn = document.getElementById("nav_btn");
/*--- nav variables end ---*/

/*--- nav code start ---*/
function deactivateNav(){
    nav.classList.add("unscrolled_nav");
    nav.classList.remove("scrolled_nav");
}
function activateNav(){
    nav.classList.add("scrolled_nav");
    nav.classList.remove("unscrolled_nav");
}
window.addEventListener("scroll", () =>{
    if(window.scrollY >= 50 && navMenuOpened == false){
        activateNav();
    }
    else{
        deactivateNav();
    }
})

navBtn.addEventListener("click", () =>{
    if(navMenuOpened){
        navMenuOpened = false;
        navMenu.style.opacity = "0";
        navMenu.style.pointerEvents = "none";
        if(window.scrollY >= 50 && navMenuOpened == false){
            activateNav();
        }        
    }
    else{
        navMenuOpened = true;
        navMenu.style.opacity = "1";
        navMenu.style.pointerEvents = "auto";
        deactivateNav();
    }
})
/*--- nav code end ---*/