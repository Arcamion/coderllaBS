$(function() {
    $(document).ready(function(){
        $('.venobox').venobox();
    });

    // wow js
    new WOW().init();
    // tinyslider js

    
    var slider = tns({
        container: '.noticias-active',
        items: 1,
        slideBy: 'page',
        autoplay: false,
        mouseDrag: true,
        nav: false,
        controlsText: ['<i class="fa-solid fa-angle-left prev"></i>', '<i class="fa-solid fa-angle-right next"></i>'],
      });
});
window.addEventListener("scroll",() =>{
    let navBar=document.getElementById("navBarId");
    if(window.scrollY >= 10){
        navBar.classList.add("navBarScroll");
    } else{
        navBar.classList.remove("navBarScroll");
    }
    console.log(window.scrollY);   
})