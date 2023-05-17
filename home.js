/*--- banner variables - start ---*/
const bannerPicture = document.getElementById("banner_picture");
/*--- banner variables - end ---*/

/*--- mission variables - start */
const missionPicture = document.getElementById("mission_img");
let missionPictureTop = 0;
/*--- mission variables - end */

/*--- contact variables - start ---*/
const contactPicture = document.getElementById("contact_img");
let contactPictureTop = 0;
/*--- contact variables - end ---*/

/*--- banner code - start ---*/
window.addEventListener("scroll",()=>{
    bannerPicture.style.top = window.scrollY/2 + "px";
})
/*--- banner code - end ---*/

/*--- mission code - start */
missionPictureTop = missionPicture.offsetTop;
window.addEventListener("scroll",()=>{
    missionPicture.style.top = -window.scrollY/5 + 250 + "px";
})
/*--- mission code - end */

/*--- contact code - start ---*/
contactPictureTop = contactPicture.offsetTop;
console.log(contactPictureTop);
window.addEventListener("scroll",()=>{
    contactPicture.style.top = -window.scrollY/5 + 900 + "px";
})
/*--- contact code - end ---*/