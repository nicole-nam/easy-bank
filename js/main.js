const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const headerMenu = document.querySelector('.header-menu');

btnHamburger.addEventListener('click', function(){

    if(header.classList.contains('open') ){
        header.classList.remove('open');
        headerMenu.style.display = "none";
     
    }else  {
        header.classList.add('open');
        headerMenu.style.display = "block";
    }


});
    