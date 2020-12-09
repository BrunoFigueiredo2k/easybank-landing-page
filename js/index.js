/* -- Mobile menu -- */
const CLOSE_ICON_SRC = "/images/icon-close.svg";
const HAMBURGER_ICON_SRC = "/images/icon-hamburger.svg";
const mobileMenu = document.querySelector('#mobile-menu-li');

const mobileBtn = document.querySelector('#mobile-btn');
var btnSrc = document.getElementById('mobile-btn').src;

// Click listener hamburger menu btn
// TODO: fix
mobileBtn.addEventListener('click', () => {
    if (btnSrc == HAMBURGER_ICON_SRC){
        btnSrc = CLOSE_ICON_SRC;
        mobileMenu.style.display = 'block';

        // Onclick outside hide again
        event.stopPropagation();
        window.onclick = function(e) {
            if(e.target != mobileMenu) {
                btnSrc = HAMBURGER_ICON_SRC;
                mobileMenu.style.display = 'none';
            } else {
                mobileMenu.style.display = 'block';
            }
        }    
    } else {
        btnSrc = HAMBURGER_ICON_SRC;
        mobileMenu.style.display = 'none';
    }
});