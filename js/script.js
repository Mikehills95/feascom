window.addEventListener('scroll', function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
   });

   function toggleMenu(){
       var menuToggle = document.querySelector('.menuToggle');
       var movement =  document.querySelector('.movement');
       menuToggle.classList.toggle('active');
       movement.classList.toggle('active');
   }