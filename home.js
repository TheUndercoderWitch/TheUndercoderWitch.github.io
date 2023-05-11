/*--- comments slider variables start ---*/
let currentCommentIndex = 1;
const comments = document.querySelectorAll(".comment");
const commentsHolderQuery = document.querySelector("#comments");
const commentsDiv = document.getElementById("comments");
const commentsHolder = document.getElementById("comments_holder");
let pcMode = false;
let tabletMode = false;
let phoneMode = false;
/*--- comments slider variables end ---*/

/*--- comments slider code start ---*/
function animateCommentsSlider(){
    if(pcMode || tabletMode){
        commentsDiv.style.marginLeft = -500 * currentCommentIndex + "px";
    }
    else if(phoneMode){
        commentsDiv.style.marginLeft = -320 * currentCommentIndex + "px";
    }
}
function startSettings(){
    /*set comments*/
    if(screen.width > 450 && screen.width <= 1080){
        commentsHolder.style.width = "500px";
        pcMode = false;
        tabletMode = true;
        phoneMode = false;
    }
    else if(screen.width <= 450 && screen.width <= 1080){
        commentsHolder.style.width = "320px";
        pcMode = false;
        tabletMode = false;
        phoneMode = true;
        console.log("Phone mode ON");
    }
    else{
        commentsHolder.style.width = "1000px";
        pcMode = true;
        tabletMode = false;
        phoneMode = false;
    }

    /*duplicate cumments*/
    const firstClone = comments[0].cloneNode(true);
    const lastClone = comments[comments.length-1].cloneNode(true);
    commentsHolderQuery.append(firstClone);
    commentsHolderQuery.prepend(lastClone);
}
startSettings(); 
animateCommentsSlider();

function nextComment(){
    currentCommentIndex ++;
    commentsDiv.style.transition = "0.75s";
    animateCommentsSlider();
}
function previousComment(){
    currentCommentIndex --;
    animateCommentsSlider();
    commentsDiv.style.transition = "0.75s";
}
commentsDiv.addEventListener("transitionend", () =>{
    if(tabletMode || phoneMode){
        if(currentCommentIndex >= 6){
            currentCommentIndex = 1;
            commentsDiv.style.transition = "0s";
            animateCommentsSlider();
        }
        else if(currentCommentIndex <= 0){
            currentCommentIndex = 5;
            commentsDiv.style.transition = "0s";
            animateCommentsSlider();
        }
        else{}
    }
    else if(pcMode){
        if(currentCommentIndex >= 5){
            currentCommentIndex = 0;
            commentsDiv.style.transition = "0s";
            animateCommentsSlider();
        }
        else if(currentCommentIndex <= 0){
            currentCommentIndex = 5;
            commentsDiv.style.transition = "0s";
            animateCommentsSlider();
        }
        else{}
    }
})
/*--- comments slider code end ---*/