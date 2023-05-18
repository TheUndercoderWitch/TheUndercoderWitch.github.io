/*--- banner variables - start ---*/
const bannerPicture = document.getElementById("banner_picture");
/*--- banner variables - end ---*/

/*--- mission variables - start */
const missionPicture = document.getElementById("mission_img");
/*--- mission variables - end */

/*--- contact variables - start ---*/
const contactPicture = document.getElementById("contact_img");
/*--- contact variables - end ---*/

/*--- banner code - start ---*/
window.addEventListener("scroll",()=>{
    bannerPicture.style.top = window.scrollY/2 + "px";
})
/*--- banner code - end ---*/

/*--- mission code - start */
window.addEventListener("scroll",()=>{
    missionPicture.style.top = window.scrollY/5 - 300 + "px";
})
/*--- mission code - end */

/*--- contact code - start ---*/
window.addEventListener("scroll",()=>{
    contactPicture.style.top = window.scrollY/5 - 750 + "px";
})
/*--- contact code - end ---*/