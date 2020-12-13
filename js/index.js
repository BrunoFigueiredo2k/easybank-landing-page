/* -- Mobile menu -- */
const CLOSE_ICON_SRC = "/images/icon-close.svg";
const HAMBURGER_ICON_SRC = "/images/icon-hamburger.svg";
const mobileMenu = document.querySelector('#mobile-menu-li');

const mobileBtn = document.querySelector('#mobile-btn');
var btnSrc = document.getElementById('mobile-btn').src;

// Click listener hamburger menu btn
mobileBtn.addEventListener('click', () => {
    if (btnSrc == HAMBURGER_ICON_SRC){
        mobileMenuActive(true);
        mobileMenu.style.display = 'block';

        // Onclick outside hide again
        event.stopPropagation();
        window.onclick = function(e) {
            if(e.target != mobileMenu) {
                mobileMenuActive(false);
                mobileMenu.style.display = 'none';
            } else {
                mobileMenu.style.display = 'block';
            }
        }    
    } else {
        mobileMenuActive(false);
        mobileMenu.style.display = 'none';
    }
});

// Toggle source of mobile menu image btn
function mobileMenuActive(active){
    if (active){
        btnSrc = CLOSE_ICON_SRC;
        mobileBtn.setAttribute("src", CLOSE_ICON_SRC);
    } else {
        btnSrc = HAMBURGER_ICON_SRC;
        mobileBtn.setAttribute("src", HAMBURGER_ICON_SRC);
    }
}