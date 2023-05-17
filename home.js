/*--- banner variables - start ---*/
const bannerPicture = document.getElementById("banner_picture");
/*--- banner variables - end ---*/

/*--- mission variables - start */
const missionPicture = document.getElementById("mission_img");
/*--- mission variables - end */

/*--- banner code - start ---*/
window.addEventListener("scroll",()=>{
    bannerPicture.style.top = window.scrollY/2 + "px";
})
/*--- banner code - end ---*/

/*--- mission code - start */
window.addEventListener("scroll",()=>{
    missionPicture.style.top = -window.scrollY/10 + "px";
})
/*--- mission code - end */