/*--- banner variables - start ---*/
const bannerPicture = document.getElementById("banner_img");
/*--- banner variables - end ---*/

/*--- banner code - start ---*/
window.addEventListener("scroll", () =>{
    bannerPicture.style.top = window.scrollY/2 + "px";
})
/*--- banner code - end ---*/