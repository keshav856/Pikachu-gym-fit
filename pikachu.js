//show menu Bar
const nav=document.querySelector('.nav');
const toggle=document.querySelector('.nav-toggle');
toggle.onclick=()=>{
    nav.classList.toggle('show-menu')

}
//remove menu bar
const navLink=document.querySelectorAll('.nav-link');
function linkAction(){
    const navMenu=document.querySelector('.nav');
    nav.classList.remove('show-menu')
}
navLink.forEach(n=>n.addEventListener('click',linkAction))

//change color link
const linkcolor= document.querySelectorAll('.nav-link');
function colorLink(){
    if(colorLink){
         linkcolor.forEach(l.classList.remove('active'));
         this.classList.add('active');
    }
}
linkcolor.forEach(l=>l.addEventListener('click',colorLink))

// Swipe Home Section
var swiper = new Swiper('.home-slider', {
    loop:true,
    // slidesPerView: 3,

    centeredSlides: true,
    spaceBetween: 30,
    autoplay:{
        delay:2500,
        disableOnInteraction:false,
    },
    pagination: {
      el: '.swiper-pagination',
    //  
    clickable:true,
    },
    
  });

  //Swiper schedule Section 
  var swiper = new Swiper(".time-imgs", {
    loop:true,
    // slidesPerView: 3,

    centeredSlides: true,
    spaceBetween: 0,
    grapCursor:true,
    autoplay:{
        delay:2500,
    },
    breakpoints:{
        0:{
            slidesPerview:1,
        },
        640:{
            slidesPerview:3,
        },
        768:{
            slidesPerview:4,
        },
        1024:{
            slidesPerview:5,
        },
    }
  });

// Change header backgroung
const header =document.querySelector('.header')
window.addEventListener('scroll',()=>{
    if(window.scrollY >=70){
        header.classList.add('header-shadow')
    }
    else         header.classList.remove('header-shadow')

})

//Scroll top Button
const up=document.querySelector('.up')
window.onscroll= () =>{
    up.classList.toggle('show', window.scrollY>=560)
}
up.onclick= ()=>{
    window.scrollTo({behavior:'smooth',top:'0'})
}