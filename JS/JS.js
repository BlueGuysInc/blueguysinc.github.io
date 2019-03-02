var preloader = document.getElementById("loading");
function Load_screen(){
    preloader.style.display = 'none';
};
//function invisiblу
var cunt = document.getElementById("content");
var menu = document.getElementById("Menu1");
var men = document.getElementsByClassName("menu");
var footer = document.getElementById("footer");
var cunt3 = document.getElementById("content3");
var menu3 = document.getElementById("Menu3");
var cunt2 = document.getElementById("content2");
var menu2 = document.getElementById("Menu2");
var cunt4 = document.getElementById("content4");
var menu4 = document.getElementById("Menu4");
var cunt5 = document.getElementById("content5");
var menu5 = document.getElementById("Menu5");
var cunt6 = document.getElementById("content6");
var menu6 = document.getElementById("Menu6");
var cunt7 = document.getElementById("content7");
var menu7 = document.getElementById("Menu7");
function viewDiv(){
     cunt2.style.display = "none";
     cunt3.style.display = "none";
     cunt4.style.display = "none";
     cunt5.style.display = "none";
     cunt6.style.display = "none";
     cunt7.style.display = "none";
 if(cunt.style.display == "none"){
        cunt.style.display = "block";
        menu.classList.remove('disable_m');
        menu.classList.add('active_m');
        menu2.classList.add('disable_m');
        menu5.classList.add('disable_m');
        menu3.classList.add('disable_m');
        menu4.classList.add('disable_m');
        menu6.classList.add('disable_m');
        menu7.classList.add('disable_m');
    }  else {
        cunt.style.display = "none";
        menu.classList.remove('active_m');
        menu.classList.add('close_m');         
};
};
function viewDiv2(){
 cunt.style.display = "none";
 cunt3.style.display = "none";
 cunt4.style.display = "none";
 cunt5.style.display = "none";
 cunt6.style.display = "none";
 cunt7.style.display = "none";
 if(cunt2.style.display == "none"){
        cunt2.style.display = "block";
        menu2.classList.remove('disable_m');
        menu2.classList.add('active_m');
        menu5.classList.add('disable_m');
        menu.classList.add('disable_m');
        menu3.classList.add('disable_m');
        menu4.classList.add('disable_m');
        menu6.classList.add('disable_m');
        menu7.classList.add('disable_m');
    }  else {
        cunt2.style.display = "none";
        menu2.classList.remove('active_m');
        menu2.classList.add('close_m');
};
        
};
function viewDiv3(){
     cunt2.style.display = "none";
     cunt.style.display = "none";
     cunt4.style.display = "none";
     cunt5.style.display = "none";
     cunt6.style.display = "none";
     cunt7.style.display = "none";
 if(cunt3.style.display == "none"){
        cunt3.style.display = "block";
        menu3.classList.remove('disable_m');
        menu3.classList.add('active_m');
        menu2.classList.add('disable_m');
        menu.classList.add('disable_m');
        menu5.classList.add('disable_m');
        menu4.classList.add('disable_m');
        menu6.classList.add('disable_m');
        menu7.classList.add('disable_m');
    }  else {
        cunt3.style.display = "none";
        menu3.classList.remove('active_m');
        menu3.classList.add('close_m');
};
};
function viewDiv4(){
     cunt2.style.display = "none";
     cunt.style.display = "none";
     cunt3.style.display = "none";
     cunt5.style.display = "none";
     cunt6.style.display = "none";
     cunt7.style.display = "none";
 if(cunt4.style.display == "none"){
        cunt4.style.display = "block";
        menu4.classList.remove('disable_m');
        menu4.classList.add('active_m');
        menu2.classList.add('disable_m');
        menu.classList.add('disable_m');
        menu3.classList.add('disable_m');
        menu5.classList.add('disable_m');
        menu6.classList.add('disable_m');
        menu7.classList.add('disable_m');
    } else {
        cunt4.style.display = "none";
        menu4.classList.remove('active_m');
        menu4.classList.add('close_m');
};
};
function viewDiv5(){
     cunt2.style.display = "none";
     cunt.style.display = "none";
     cunt3.style.display = "none";
     cunt4.style.display = "none";
     cunt6.style.display = "none";
     cunt7.style.display = "none";
 if(cunt5.style.display == "none"){
        cunt5.style.display = "block";
        menu5.classList.remove('disable_m');
        menu5.classList.add('active_m');
        menu2.classList.add('disable_m');
        menu.classList.add('disable_m');
        menu3.classList.add('disable_m');
        menu4.classList.add('disable_m');
        menu6.classList.add('disable_m');
        menu7.classList.add('disable_m');
    } else {
        cunt5.style.display = "none";
        menu5.classList.remove('active_m');
        menu5.classList.add('close_m');
};
};
function viewDiv6(){
    cunt2.style.display = "none";
    cunt.style.display = "none";
    cunt3.style.display = "none";
    cunt4.style.display = "none";
    cunt5.style.display = "none";
    cunt7.style.display = "none";
if(cunt6.style.display == "none"){
       cunt6.style.display = "block";
       menu6.classList.remove('disable_m');
       menu6.classList.add('active_m');
       menu2.classList.add('disable_m');
       menu.classList.add('disable_m');
       menu3.classList.add('disable_m');
       menu4.classList.add('disable_m');
       menu5.classList.add('disable_m');
       menu7.classList.add('disable_m');
   } else {
       cunt6.style.display = "none";
       menu6.classList.remove('active_m');
       menu6.classList.add('close_m');
};
};
function viewDiv7(){
    cunt2.style.display = "none";
    cunt.style.display = "none";
    cunt3.style.display = "none";
    cunt4.style.display = "none";
    cunt5.style.display = "none";
    cunt6.style.display = "none";
if(cunt7.style.display == "none"){
       cunt7.style.display = "block";
       menu7.classList.remove('disable_m');
       menu7.classList.add('active_m');
       menu2.classList.add('disable_m');
       menu.classList.add('disable_m');
       menu3.classList.add('disable_m');
       menu4.classList.add('disable_m');
       menu5.classList.add('disable_m');
       menu6.classList.add('disable_m');
   } else {
       cunt7.style.display = "none";
       menu7.classList.remove('active_m');
       menu7.classList.add('close_m');
};
};