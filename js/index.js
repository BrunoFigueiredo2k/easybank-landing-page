/* -- Mobile menu -- */
const CLOSE_ICON_SRC = "/images/icon-close.svg";
const HAMBURGER_ICON_SRC = "/images/icon-hamburger.svg";
const mobileMenu = document.querySelector('#mobile-menu-li');

const mobileBtn = document.querySelector('#mobile-btn');
var btnSrc = document.getElementById('mobile-btn').src;
console.log(btnSrc);
var mobileMenuActive = false;

// Click listener hamburger menu btn
// TODO: fix
mobileBtn.addEventListener('click', () => {
    if (btnSrc == HAMBURGER_ICON_SRC){
        btnSrc = CLOSE_ICON_SRC;
        mobileMenu.style.display = 'block';
        console.log(btnSrc)
    } else {
        btnSrc = HAMBURGER_ICON_SRC;
        mobileMenu.style.display = 'none';
        console.log(btnSrc)
    }
});
