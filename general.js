/*--- nav variables start ---*/
let navScrolled = false;
const scrollAffectedNav = document.getElementById("scroll_affected_nav");
const scrollUnaffectedNav = document.getElementById("scroll_unaffected_nav");
/*--- nav variables start ---*/

/*--- nav code start ---*/
window.addEventListener("scroll", () =>{
    if(scrollAffectedNav != null){
        if(window.scrollY > 100){
            scrollAffectedNav.classList.add("scrolled_nav");
            scrollAffectedNav.classList.remove("unscrolled_nav");
        }
        else{
            scrollAffectedNav.classList.remove("scrolled_nav");   
            scrollAffectedNav.classList.add("unscrolled_nav");   
        }
    }
    else if(scrollUnaffectedNav != null){
        if(window.scrollY > 50){
            scrollUnaffectedNav.classList.add("scrolled_nav");
            scrollUnaffectedNav.classList.remove("unscrolled_nav");
        }
        else{
            scrollUnaffectedNav.classList.remove("scrolled_nav");   
            scrollUnaffectedNav.classList.add("unscrolled_nav");   
        }
    }
})
/*--- nav code end ---*/