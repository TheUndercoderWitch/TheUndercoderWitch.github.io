/*--- nav variables start ---*/
let mobileNavOn = false;
const scrollAffectedNav = document.getElementById("scroll_affected_nav");
const scrollUnaffectedNav = document.getElementById("scroll_unaffected_nav");
const mobileNavLinks = document.getElementById("mobile_nav_links");
const navButton = document.getElementById("nav_btn");
const scrollDownBtn = document.getElementById("scroll_down_btn");
/*--- nav variables start ---*/

/*--- nav code start ---*/
window.addEventListener("scroll", () =>{
    if(scrollAffectedNav != null){
        if(window.scrollY > 100 && !mobileNavOn){
            scrollAffectedNav.classList.add("scrolled_nav");
            scrollAffectedNav.classList.remove("unscrolled_nav");
        }
        else{
            scrollAffectedNav.classList.remove("scrolled_nav");   
            scrollAffectedNav.classList.add("unscrolled_nav");   
        }
    }
    else if(scrollUnaffectedNav != null){
        if(window.scrollY > 50 && !mobileNavOn){
            scrollUnaffectedNav.classList.add("scrolled_nav");
            scrollUnaffectedNav.classList.remove("unscrolled_nav");
        }
        else{
            scrollUnaffectedNav.classList.remove("scrolled_nav");   
            scrollUnaffectedNav.classList.add("unscrolled_nav");   
        }
    }

    if(scrollDownBtn != null){
        if(window.scrollY > 50){
            scrollDownBtn.style.opacity = "0";
            scrollDownBtn.style.pointerEvents = "none";
        }
        else{
            scrollDownBtn.style.opacity = "1"
            scrollDownBtn.style.pointerEvents = "auto";
        }
    }
})
if(scrollDownBtn != null){
    scrollDownBtn.addEventListener("click", () =>{
        window.scrollTo({
            top: 650,
            behavior : "smooth"
        });
    })
}

navButton.addEventListener("click", () =>{
    if(mobileNavOn){
        mobileNavOn = false;
        mobileNavLinks.style.opacity = "0";
        mobileNavLinks.style.pointerEvents = "none";

        if(window.scrollY > 50){
            if(scrollAffectedNav != null){
                scrollAffectedNav.classList.add("scrolled_nav");
                scrollAffectedNav.classList.remove("unscrolled_nav");
            }
            else if(scrollUnaffectedNav != null){
                scrollUnaffectedNav.classList.add("scrolled_nav");
                scrollUnaffectedNav.classList.remove("unscrolled_nav");
            }
        }
    }
    else{
        mobileNavOn = true;
        mobileNavLinks.style.opacity = "1";
        mobileNavLinks.style.pointerEvents = "auto";

        if(window.scrollY > 50){
            if(scrollAffectedNav != null){
                scrollAffectedNav.classList.remove("scrolled_nav");   
                scrollAffectedNav.classList.add("unscrolled_nav");  
            }
            else if(scrollUnaffectedNav != null){
                scrollUnaffectedNav.classList.remove("scrolled_nav");   
                scrollUnaffectedNav.classList.add("unscrolled_nav");
            }
        }
    }
})
/*--- nav code end ---*/