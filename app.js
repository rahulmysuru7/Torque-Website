let intro = document.querySelector('.intro');
let logo = document.querySelector('.logohead');
let logo1 = document.querySelector('.logo1');
let logo2 = document.querySelector('.logo2');
let fadein = document.querySelectorAll('.fade-in');
let fadein2 = document.querySelectorAll('.fade-in2');
window.addEventListener('DOMContentLoaded', () => {

    setTimeout(() => {
        logo1.classList.add('active');
    }, 50);
    setTimeout(() => {
        logo2.classList.add('active');
    }, 50);
    setTimeout(() => {
        setTimeout(() => {
            logo1.classList.remove('active');
            logo1.classList.add('fade1');
        }, 50);
        setTimeout(() => {
            logo2.classList.remove('active');
            logo2.classList.add('fade2');
        }, 50);
    }, 1000);
    setTimeout(() => {
        intro.style.top = '-100vh';
    }, 1800);
    setTimeout(() => {
        fadein.forEach((fade, idx) => {
            setTimeout(() => {
                fade.classList.add('active2');
            }, (idx + 1) * 200 );
        }, 10000);
    });
    setTimeout(() => {
        fadein2.forEach((fade, idx) => {
            setTimeout(() => {
                fade.classList.add('active2');
            }, (idx + 1) * 200 );
        }, 10000);
    });
});


