//function slider
let slider = document.getElementById('Slider');
let slider2 = document.getElementById('divSlider2');
let slider3 = document.getElementById('Slider3');
let slider4 = document.getElementById('Slider4');
let slider5 = document.getElementById('Slider5');
let icon1 = document.getElementById('divIcon1');
let icon2 = document.getElementById('divIcon2');
let icon3 = document.getElementById('divIcon3');
let icon4 = document.getElementById('divIcon4');
let icon5 = document.getElementById('divIcon5');
let icon6 = document.getElementById('divIcon6');
let icon7 = document.getElementById('divIcon7');
let icon8 = document.getElementById('divIcon8');
let icon9 = document.getElementById('divIcon9');
let icon10 = document.getElementById('divIcon10');
let icon11 = document.getElementById('divIcon11');
let icon12 = document.getElementById('divIcon12');
let icon13 = document.getElementById('divIcon13');
let icon14 = document.getElementById('divIcon14');
let icon15 = document.getElementById('divIcon15');
let icon16 = document.getElementById('divIcon16');
let icon17 = document.getElementById('divIcon17');
let icon18 = document.getElementById('divIcon18');
let icon19 = document.getElementById('divIcon19');
let icon20 = document.getElementById('divIcon20');
let icon21 = document.getElementById('divIcon21');
let icon22 = document.getElementById('divIcon22');
let icon23 = document.getElementById('divIcon23');
let icon24 = document.getElementById('divIcon24');
let icon25 = document.getElementById('divIcon25');

icon1.addEventListener('click', function(e) {
    slider.classList.remove('img2', 'img3', 'img4', 'img5');
    slider.classList.add('img1');
    icon3.style.background = "gray";
    icon2.style.background = "gray";
    icon4.style.background = "gray";
    icon5.style.background = "gray";
    icon1.style.background = "black";
});
icon2.addEventListener('click', function(e) {
    slider.classList.remove('img1', 'img3', 'img4', 'img5');
    slider.classList.add('img2');
    icon3.style.background = "gray";
    icon1.style.background = "gray";
    icon4.style.background = "gray";
    icon5.style.background = "gray";
    icon2.style.background = "black";

});
icon3.addEventListener('click', function(e) {
    slider.classList.remove('img1', 'img2', 'img4', 'img5');
    slider.classList.add('img3');
    icon1.style.background = "gray";
    icon2.style.background = "gray";
    icon4.style.background = "gray";
    icon5.style.background = "gray";
    icon3.style.background = "black";
});
icon4.addEventListener('click', function(e) {
    slider.classList.remove('img1', 'img2', 'img3', 'img5');
    slider.classList.add('img4');
    icon3.style.background = "gray";
    icon2.style.background = "gray";
    icon1.style.background = "gray";
    icon5.style.background = "gray";
    icon4.style.background = "black";
});
icon5.addEventListener('click', function(e) {
    slider.classList.remove('img1', 'img2', 'img3', 'img4');
    slider.classList.add('img5');
    icon3.style.background = "gray";
    icon2.style.background = "gray";
    icon1.style.background = "gray";
    icon4.style.background = "gray";
    icon5.style.background = "black";
});
icon6.addEventListener('click', function(e) {
    slider2.classList.remove('img7', 'img8', 'img9', 'img10');
    slider2.classList.add('img6');
    icon7.style.background = "gray";
    icon8.style.background = "gray";
    icon9.style.background = "gray";
    icon10.style.background = "gray";
    icon6.style.background = "black";
});
icon7.addEventListener('click', function(e) {
    slider2.classList.remove('img6', 'img8', 'img9', 'img10');
    slider2.classList.add('img7');
    icon6.style.background = "gray";
    icon8.style.background = "gray";
    icon9.style.background = "gray";
    icon10.style.background = "gray";
    icon7.style.background = "black";

});
icon8.addEventListener('click', function(e) {
    slider2.classList.remove('img6', 'img7', 'img9', 'img10');
    slider2.classList.add('img8');
    icon6.style.background = "gray";
    icon7.style.background = "gray";
    icon9.style.background = "gray";
    icon10.style.background = "gray";
    icon8.style.background = "black";
});
icon9.addEventListener('click', function(e) {
    slider2.classList.remove('img6', 'img7', 'img8', 'img10');
    slider2.classList.add('img9');
    icon6.style.background = "gray";
    icon7.style.background = "gray";
    icon8.style.background = "gray";
    icon10.style.background = "gray";
    icon9.style.background = "black";
});
icon10.addEventListener('click', function(e) {
    slider2.classList.remove('img6', 'img7', 'img8', 'img9');
    slider2.classList.add('img10');
    icon6.style.background = "gray";
    icon7.style.background = "gray";
    icon8.style.background = "gray";
    icon9.style.background = "gray";
    icon10.style.background = "black";
});
icon11.addEventListener('click', function(e) {
    slider3.classList.remove('img12', 'img13', 'img14', 'img15');
    slider3.classList.add('img11');
    icon13.style.background = "gray";
    icon12.style.background = "gray";
    icon14.style.background = "gray";
    icon15.style.background = "gray";
    icon11.style.background = "black";
});
icon12.addEventListener('click', function(e) {
    slider3.classList.remove('img11', 'img13', 'img14', 'img15');
    slider3.classList.add('img12');
    icon13.style.background = "gray";
    icon11.style.background = "gray";
    icon14.style.background = "gray";
    icon15.style.background = "gray";
    icon12.style.background = "black";

});
icon13.addEventListener('click', function(e) {
    slider3.classList.remove('img11', 'img12', 'img14', 'img15');
    slider3.classList.add('img13');
    icon11.style.background = "gray";
    icon12.style.background = "gray";
    icon14.style.background = "gray";
    icon15.style.background = "gray";
    icon13.style.background = "black";
});
icon14.addEventListener('click', function(e) {
    slider3.classList.remove('img11', 'img12', 'img13', 'img15');
    slider3.classList.add('img14');
    icon13.style.background = "gray";
    icon12.style.background = "gray";
    icon11.style.background = "gray";
    icon15.style.background = "gray";
    icon14.style.background = "black";
});
icon15.addEventListener('click', function(e) {
    slider3.classList.remove('img11', 'img12', 'img13', 'img14');
    slider3.classList.add('img15');
    icon13.style.background = "gray";
    icon12.style.background = "gray";
    icon11.style.background = "gray";
    icon14.style.background = "gray";
    icon15.style.background = "black";
});
icon16.addEventListener('click', function(e) {
    slider4.classList.remove('img17', 'img18', 'img19', 'img20');
    slider4.classList.add('img16');
    icon17.style.background = "gray";
    icon18.style.background = "gray";
    icon19.style.background = "gray";
    icon20.style.background = "gray";
    icon16.style.background = "black";
});
icon17.addEventListener('click', function(e) {
    slider4.classList.remove('img16', 'img18', 'img19', 'img20');
    slider4.classList.add('img17');
    icon16.style.background = "gray";
    icon18.style.background = "gray";
    icon19.style.background = "gray";
    icon20.style.background = "gray";
    icon17.style.background = "black";

});
icon18.addEventListener('click', function(e) {
    slider4.classList.remove('img16', 'img17', 'img19', 'img20');
    slider4.classList.add('img18');
    icon16.style.background = "gray";
    icon17.style.background = "gray";
    icon19.style.background = "gray";
    icon20.style.background = "gray";
    icon18.style.background = "black";
});
icon19.addEventListener('click', function(e) {
    slider4.classList.remove('img16', 'img17', 'img18', 'img20');
    slider4.classList.add('img19');
    icon16.style.background = "gray";
    icon17.style.background = "gray";
    icon18.style.background = "gray";
    icon20.style.background = "gray";
    icon19.style.background = "black";
});
icon20.addEventListener('click', function(e) {
    slider4.classList.remove('img16', 'img17', 'img18', 'img19');
    slider4.classList.add('img20');
    icon16.style.background = "gray";
    icon17.style.background = "gray";
    icon18.style.background = "gray";
    icon19.style.background = "gray";
    icon20.style.background = "black";
});
icon21.addEventListener('click', function(e) {
    slider5.classList.remove('img22', 'img23', 'img24', 'img25');
    slider5.classList.add('img21');
    icon23.style.background = "gray";
    icon22.style.background = "gray";
    icon24.style.background = "gray";
    icon25.style.background = "gray";
    icon21.style.background = "black";
});
icon22.addEventListener('click', function(e) {
    slider5.classList.remove('img21', 'img23', 'img24', 'img25');
    slider5.classList.add('img22');
    icon23.style.background = "gray";
    icon21.style.background = "gray";
    icon24.style.background = "gray";
    icon25.style.background = "gray";
    icon22.style.background = "black";

});
icon23.addEventListener('click', function(e) {
    slider5.classList.remove('img21', 'img22', 'img24', 'img25');
    slider5.classList.add('img23');
    icon21.style.background = "gray";
    icon22.style.background = "gray";
    icon24.style.background = "gray";
    icon25.style.background = "gray";
    icon23.style.background = "black";
});
icon24.addEventListener('click', function(e) {
    slider5.classList.remove('img21', 'img22', 'img23', 'img25');
    slider5.classList.add('img24');
    icon23.style.background = "gray";
    icon22.style.background = "gray";
    icon21.style.background = "gray";
    icon25.style.background = "gray";
    icon24.style.background = "black";
});
icon25.addEventListener('click', function(e) {
    slider5.classList.remove('img21', 'img22', 'img23', 'img24');
    slider5.classList.add('img25');
    icon23.style.background = "gray";
    icon22.style.background = "gray";
    icon21.style.background = "gray";
    icon24.style.background = "gray";
    icon25.style.background = "black";
});

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
function viewDiv(){
     cunt2.style.display = "none";
     cunt3.style.display = "none";
     cunt4.style.display = "none";
     cunt5.style.display = "none";
 if(cunt.style.display == "none"){
        cunt.style.display = "block";
        menu.style.background = "lightgray";
        menu2.style.background = "inherit";
        menu.style.borderRight = "none";
        menu2.style.borderRight = "1px solid gray";
        footer.style.margin = "0";
        menu3.style.background = "inherit";
        menu3.style.borderRight = "1px solid gray";
        menu4.style.background = "inherit";
        menu4.style.borderRight = "1px solid gray";
        menu5.style.background = "inherit";
        menu5.style.borderRight = "1px solid gray";
    }  else {
        cunt.style.display = "none";
         menu.style.background = "inherit";
         footer.style.marginTop = "342px";
};
};
function viewDiv2(){
 cunt.style.display = "none";
 cunt3.style.display = "none";
 cunt4.style.display = "none";
 cunt5.style.display = "none";
 if(cunt2.style.display == "none"){
        cunt2.style.display = "block";
        menu2.style.background = "lightgray";
        menu.style.background = "inherit";
        menu2.style.borderRight = "none";
        menu.style.borderRight = "1px solid gray";
        footer.style.margin = "0";
        menu3.style.background = "inherit";
        menu3.style.borderRight = "1px solid gray";
        menu4.style.background = "inherit";
        menu4.style.borderRight = "1px solid gray";
        menu5.style.background = "inherit";
        menu5.style.borderRight = "1px solid gray";
    }  else {
        cunt2.style.display = "none";
        menu2.style.background = "inherit";
        footer.style.marginTop = "342px";
};
        
};
function viewDiv3(){
     cunt2.style.display = "none";
     cunt.style.display = "none";
     cunt4.style.display = "none";
     cunt5.style.display = "none";
 if(cunt3.style.display == "none"){
        cunt3.style.display = "block";
        menu3.style.background = "lightgray";
        menu2.style.background = "inherit";
        menu3.style.borderRight = "none";
        menu2.style.borderRight = "1px solid gray";
        footer.style.margin = "0";
        menu.style.background = "inherit";
        menu.style.borderRight = "1px solid gray";
        menu4.style.background = "inherit";
        menu4.style.borderRight = "1px solid gray";
        menu5.style.background = "inherit";
        menu5.style.borderRight = "1px solid gray";
    }  else {
        cunt3.style.display = "none";
        menu3.style.background = "inherit";
        footer.style.marginTop = "342px";
};
};
function viewDiv4(){
     cunt2.style.display = "none";
     cunt.style.display = "none";
     cunt3.style.display = "none";
     cunt5.style.display = "none";
 if(cunt4.style.display == "none"){
        cunt4.style.display = "block";
        menu4.style.background = "lightgray";
        menu2.style.background = "inherit";
        menu4.style.borderRight = "none";
        menu2.style.borderRight = "1px solid gray";
        footer.style.margin = "0";
        menu.style.background = "inherit";
        menu.style.borderRight = "1px solid gray";
        menu3.style.background = "inherit";
        menu3.style.borderRight = "1px solid gray";
        menu5.style.background = "inherit";
        menu5.style.borderRight = "1px solid gray";
    } else {
        cunt4.style.display = "none";
        menu4.style.background = "inherit";
        footer.style.marginTop = "342px";
};
};
function viewDiv5(){
     cunt2.style.display = "none";
     cunt.style.display = "none";
     cunt3.style.display = "none";
     cunt4.style.display = "none";
 if(cunt5.style.display == "none"){
        cunt5.style.display = "block";
        menu5.style.background = "lightgray";
        menu2.style.background = "inherit";
        menu5.style.borderRight = "none";
        menu2.style.borderRight = "1px solid gray";
        footer.style.margin = "0";
        menu.style.background = "inherit";
        menu.style.borderRight = "1px solid gray";
        menu3.style.background = "inherit";
        menu3.style.borderRight = "1px solid gray";
        menu4.style.background = "inherit";
        menu4.style.borderRight = "1px solid gray";
    } else {
        cunt5.style.display = "none";
        menu5.style.background = "inherit";
        footer.style.marginTop = "342px";
};
};
 
     
   
    




