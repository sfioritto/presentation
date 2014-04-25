(function(){

    var slides = document.getElementsByClassName("slide"),
    active = slides[47],

    nextSlide = function(){
        if (active && active.nextElementSibling) {
            active.classList.remove("active");
            active = active.nextElementSibling;
            active.classList.add("active");
        }
    },

    prevSlide = function(){
        if (active && active.previousElementSibling) {
            active.classList.remove("active");
            active = active.previousElementSibling;
            active.classList.add("active");
        }
    };
    
    document.onkeyup = function(event) {
        if (event.keyCode === 37) {
            prevSlide();
        } else if(event.keyCode === 39) { 
            nextSlide();
        }
    }
})();