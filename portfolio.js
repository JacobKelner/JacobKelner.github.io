//These functions open and close the contact form
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

//This function displays the first image in the slideshow when the page loads
var slideIndex = 1;
showSlides(slideIndex);
//This function changes the slide when the left or the right arrows are clicked
function plusSlides(n) {
    showSlides(slideIndex += n);
}

//This functiin changes the slide when the dots are clicked
function currentSlide(n) {
    showSlides(slideIndex = n);
}


function showSlides(n) {
    var slides = document.getElementsByClassName("mySlides"); //This takes all element with the class name "mySlide" and stores them in the variables array 'slides'
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1};
    if (n < 1) (slideIndex = slides.length);
    for (i =0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

//this code will creat close the contact form when the user clicks off of it
//the first stepo is to add an event listener for any clicks on the website
document.addEventListener("click", function(event) {
    //here we state that if the click happen on the cancel button or anywhere that is not the contavt firn and the click does not happen on any element with the contact class then call the closeForm() function
     if (event.target.matches(".cancel") || !event.target.closest(".form-popup") && !event.target.closest(".Pop_Up_Button") && !event.target.closest(".contact") ) {
         closeForm()
     }
}, false )