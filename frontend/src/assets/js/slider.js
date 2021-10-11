var slideIndex = 1;
showSlides(slideIndex);
// Next/previous controls
function plusSlides(n) {
 showSlides(slideIndex += n);
}

function showSlides(n) {
 var i;
 var slides = document.getElementsByClassName("mySlides");
 console.log(n)
 if (n > slides.length) {slideIndex = 1}
 if (n < 1) {slideIndex = slides.length - 1}
 for (i = 0; i < slides.length; i++) {
 slides[i].style.display = "none";
 console.log(slides.length)
 }
 slides[slideIndex-1].style.display = "block";

}