$(document).on('ready', function() {
    $(".variable").slick({
        autoplay: true,
        slidesToShow:3,
        slidesToScroll:1,
        dots: true,
        infinite: true,
        variableWidth: true

  
      })};



// login popup form js

const loginPopup = document.querySelector(".loginPopup");
const LoginPopup = document.getElementById("LoginPopup");
const overlayer = document.querySelector(".overlayer");

// open popup
LoginPopup.addEventListener("click", (e)=>{
    e.preventDefault();
    loginPopup.style.display ="block";
    overlayer.style.opacity = "1";

})

// closePopup 
function closePopup(){
    loginPopup.style.display ="none";
    overlayer.style.opacity = "0";  
}


// login form popup open after 12 seconde on page reload  
let showPopup = function () {
    setTimeout(function(){ 
        loginPopup.style.display ="block";
        overlayer.style.opacity = "1";  
     }, 12000);
};
showPopup();



// sidebar menu 
 function sideBar(){
     console.log("click")
 }