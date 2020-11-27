const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const headerMenu = document.querySelector('.header-menu');
const medaiQuery = window.matchMedia('(max-width: 768px)');

btnHamburger.addEventListener('click', function(){

    if(header.classList.contains('open')){
        header.classList.remove('open');
        headerMenu.style.display = "none";
     
    }else  {
        header.classList.add('open');
        headerMenu.style.display = "block";
    }

});
    
medaiQuery.addEventListener("change", (e) => {
    if(e.matches && header.classList.contains('open')){
        headerMenu.style.display ="block";
    }else {
        headerMenu.style.display = "none";
    }
})