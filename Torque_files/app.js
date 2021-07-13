window.addEventListener('load', ()=>{
    const preloader = document.querySelector(".preloader");
    preloader.classList.add("preload-finish")
})

const menuBtn = document.querySelector('.menu-btn');
const drpdown=document.querySelector('.dropdown_menu');
let menuOpen = false;

document.getElementById("ok").style.opacity = 1;
menuBtn.addEventListener('click', () => {
    if(document.getElementById("ok").style.opacity==0)
    {
        return;
    }
    if(!menuOpen){
        menuOpen = true;
        menuBtn.classList.add('open');
        drpdown.classList.add('slide');
    }
    else{
        menuOpen = false;
        menuBtn.classList.remove('open');
        drpdown.classList.remove('slide');
    }
})


var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    if(!menuOpen)
    {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("ok").style.opacity = 1;
            document.getElementById("ok").style.transition= "0.5s";
        } else {
            document.getElementById("ok").style.opacity=0;
            document.getElementById("ok").style.transition ="0.5s";
            document.getElementById("ok").style.transitionDelay= "0.5s";
        }
        prevScrollpos = currentScrollPos;
    }
    var windowHeight = window.innerHeight;
    
    var divHeight1 = document.querySelector('.H1-2').getBoundingClientRect().top;
    if(divHeight1+window.innerWidth/5<windowHeight)
    {
        document.querySelector('.H1-2').style.animation="rollleft 3s";
        document.querySelector('.H1-2').style.opacity=1;
    }

    var divHeight2 = document.querySelector('.G1-2').getBoundingClientRect().top;
    if(divHeight2+window.innerWidth/5<windowHeight)
    {
        document.querySelector('.G1-2').style.animation="rollleft 3s";
        document.querySelector('.G1-2').style.opacity=1;
    }
    
    var divHeight3 = document.querySelector('.A1-1').getBoundingClientRect().top;
    if(divHeight3+window.innerWidth/5<windowHeight)
    {
        document.querySelector('.A1-1').style.animation="rollleft 3s";
        document.querySelector('.A1-1').style.opacity=1;
    }

}


const parallax = document.getElementById("body");
window.addEventListener("scroll", function(){
    let offset =window.pageYOffset;
    parallax.style.backgroundPositionY = offset
    * -0.2 + "px";
})  //Blog scroll effect

