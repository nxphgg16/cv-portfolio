let themeToggler = document.querySelector('#theme-toggler');

themeToggler.onclick = () =>{
    themeToggler.classList.toggle('fa-toggle-off');
    if(themeToggler.classList.contains('fa-toggle-off')){
        document.body.classList.add('active');
    }else{
        document.body.classList.remove('active');
    }
}










// slick slider=====================================
$(document).ready(function(){
    $('.image-slider').slick({
        slidesToShow: 1,
        infinite: false,
        arrows: false,
        dots: true,
        // autoplay: true,
        // autoplaySpeed: 1000,
    });  
  });

// slick slider=====================================  








// add avtive
const ul = document.querySelector('.nav__mobile-list');
const a = document.querySelectorAll('.nav__mobile-link');

a.forEach(el => {
    el.addEventListener('click', function() {
        ul.querySelector('.active').classList.remove('active');

        el.classList.add('active');
    });
});



