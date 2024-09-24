let up = document.querySelector("#up");

let inputname = document.querySelector('#inputname').value;
let inputemail = document.querySelector('#inputemail').value;
let inputtext = document.querySelector('#textarea').value;
let SUB = document.querySelector('#SUB');


let Submit = function(){
    var WhatsAppURL = "https://wa.me/201210382651?text=" +
    encodeURIComponent(
    " From WebSite " + "\n" +
    "اسم العميل : " + inputname + "\n" +
    " الايميل : " + inputemail + "\n" +
    "استفسار : " + inputtext + "\n"
    );
    window.open(WhatsAppURL, "_blank").focus();
}



up.style.display = "none";
window.onscroll = function() {
    scrollFunction();
};
function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        up.style.display = "block";
    } else {
        up.style.display = "none";
    }
}

