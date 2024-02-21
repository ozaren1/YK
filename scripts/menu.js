
const iconMenu = document.querySelector('.header__burger-icon');
if(iconMenu){
    const menuBodu = document.querySelector('.menu__bodu');
    iconMenu.addEventListener("click", function(e){
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBodu.classList.toggle('_active');
    });
}