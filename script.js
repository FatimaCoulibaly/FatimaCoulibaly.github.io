$(function() {
  //All JS goes within these brackets  
  
 document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems, options);
  });


   var instance = M.Parallax.getInstance(elem);
        

});


  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, options);
  });

    var instance = M.Carousel.getInstance(elem);
