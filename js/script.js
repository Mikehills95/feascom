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

   const menuBtn = document.querySelector('.menu_btn');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true
    }else{
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
})