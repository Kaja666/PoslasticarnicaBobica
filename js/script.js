/* Za otvaranje ukusa torti, krofni i bombona */
$(document).ready(function(){
    $("#torte").click(function(){
      $("#torte_ukusi").slideToggle("slow");
    });
  });

  $(document).ready(function(){
    $("#krofne").click(function(){
      $("#krofne_ukusi").slideToggle("slow");
    });
  });
  $(document).ready(function(){
    $("#bombone").click(function(){
      $("#bombone_ukusi").slideToggle("slow");
    });
  });

/*slideshow na pocetnoj stranici*/
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("tackica");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); // Menja sliku svake 2 sekunde
}
