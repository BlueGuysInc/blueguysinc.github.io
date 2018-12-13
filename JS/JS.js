//function slider
let slider = document.getElementById('Slider');
let icon1 = document.getElementById('divIcon1');
let icon2 = document.getElementById('divIcon2');
let icon3 = document.getElementById('divIcon3');
let icon4 = document.getElementById('divIcon4');
let icon5 = document.getElementById('divIcon5');

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

 let slider2 = document.getElementById('divSlider2');
let icon6 = document.getElementById('divIcon6');
let icon7 = document.getElementById('divIcon7');
let icon8 = document.getElementById('divIcon8');
let icon9 = document.getElementById('divIcon9');
let icon10 = document.getElementById('divIcon10');

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


//function invisiblу
 var cunt = document.getElementById("content");
 var menu = document.getElementById("Menu1");
 var men = document.getElementsByClassName("menu")
function viewDiv(){
     cunt2.style.display = "none";
 if(cunt.style.display == "none"){
        cunt.style.display = "block";
        menu.style.background = "lightgray";
        menu2.style.background = "#E6E6E6";
        
    }  else {
        cunt.style.display = "none";
         menu.style.background = "#E6E6E6";
};
};

var cunt2 = document.getElementById("content2");
var menu2 = document.getElementById("Menu2");
function viewDiv2(){
 cunt.style.display = "none";
 if(cunt2.style.display == "none"){
        cunt2.style.display = "block";
        menu2.style.background = "lightgray";
        menu.style.background = "#E6E6E6";

    }  else {
        cunt2.style.display = "none";
        menu2.style.background = "#E6E6E6";
 };
};









