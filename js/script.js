let themeToggler = document.querySelector('#theme-toggler');

themeToggler.onclick = () => {
    themeToggler.classList.toggle('fa-toggle-off');
    if (themeToggler.classList.contains('fa-toggle-off')) {
        document.body.classList.add('active');
    } else {
        document.body.classList.remove('active');
    }
};

// slick slider=====================================
$(document).ready(function () {
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
// const ul = document.querySelector('.nav__mobile-list');
// const a = document.querySelectorAll('.nav__mobile-link');

// a.forEach(el => {
//     el.addEventListener('click', function () {
//         ul.querySelector('.active').classList.remove('active');

//         console.log('haha');

//         el.classList.add('active');
//     });
// });

const navCheckbox = document.querySelector('.nav-checbox');
const navLink = document.querySelectorAll('.nav__mobile-link');

function linkAction() {
    navCheckbox.checked = !navCheckbox.checked;
}
navLink.forEach(n => n.addEventListener('click', linkAction));
