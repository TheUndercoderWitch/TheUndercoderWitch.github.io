const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    })
})

const fadeInElements = document.querySelectorAll(".fade_in");
fadeInElements.forEach((el) => observer.observe(el));

const slideUpElements = document.querySelectorAll(".slide_up");
slideUpElements.forEach((el) => observer.observe(el));

const slideRightElements = document.querySelectorAll(".slide_right");
slideRightElements.forEach((el) => observer.observe(el));