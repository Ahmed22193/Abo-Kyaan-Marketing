let up = document.querySelector("#up");
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




/* 

let LINKS = document.getElementById('LINKS');
let temp = 'block';
function LINKSS(){
    if(temp==='block'){
        LINKS.style.display='block';
        temp = 'none';
    }
    else if(temp ==='none'){
        LINKS.style.display='none';
        temp = 'block';
    }
}
function LIN(){
    LINKS.style.display='none';
    temp = 'block';
}
 */