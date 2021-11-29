// slikslider
$(document).ready(function() {
    $('.variable').slick({
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]

    });

});




// login popup form js

const loginPopup = document.querySelector(".loginPopup");
const LoginPopup = document.getElementById("LoginPopup");
const overlayer = document.querySelector(".overlayer");

// open popup
LoginPopup.addEventListener("click", (e) => {
    e.preventDefault();
    loginPopup.style.display = "block";
    overlayer.style.opacity = "1";
    document.querySelector("body").style.overflow = 'hidden';
    loginPopup.classList.add('show');

})

// closePopup 
function closePopup() {
    loginPopup.style.display = "none";
    overlayer.style.opacity = "0";
    document.querySelector("body").style.overflow = 'auto';
    loginPopup.classList.add('show');
}


// login form popup open after 12 seconde on page reload  
let showPopup = function() {
    setTimeout(function() {
        loginPopup.style.display = "block";
        overlayer.style.opacity = "1";
        document.querySelector("body").style.overflow = 'hidden';
    }, 12000);
};
showPopup();



// sidebar menu 
const sidebarWrapper = document.querySelector(".sidebarWrapper");

function sideBar() {
    sidebarWrapper.style.display = "block";
    overlayer.style.opacity = "1";
}

function closeSideBar() {
    sidebarWrapper.style.display = "none";
    overlayer.style.opacity = "0";
}