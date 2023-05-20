/*--- parallax - start ---*/
const bannerPicture = document.getElementById("banner_picture");
const missionPicture = document.getElementById("mission_img");
const contactPicture = document.getElementById("contact_img");
window.addEventListener("scroll",()=>{
    bannerPicture.style.top = window.scrollY/2 + "px";
    missionPicture.style.top = window.scrollY/5 + "px";
    contactPicture.style.top = window.scrollY/5 + "px";
})
/*--- parallax - start ---*/