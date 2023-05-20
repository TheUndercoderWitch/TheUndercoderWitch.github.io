/*--- banner code - start ---*/
const bannerPicture = document.getElementById("banner_picture");
window.addEventListener("scroll",()=>{
    bannerPicture.style.top = window.scrollY/2 + "px";
})
/*--- banner code - end ---*/

/*--- mission code - start */
const missionPicture = document.getElementById("mission_img");
window.addEventListener("scroll",()=>{
    missionPicture.style.top = window.scrollY/4 + "px";
})
/*--- mission code - end */

/*--- contact code - start ---*/
const contactPicture = document.getElementById("contact_img");
window.addEventListener("scroll",()=>{
    contactPicture.style.top = window.scrollY/4 + "px";
})
/*--- contact code - end ---*/