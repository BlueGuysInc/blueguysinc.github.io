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


//function invisiblу
 var cunt = document.getElementById("content");
function viewDiv(){
 if(cunt.style.display == "none"){
        cunt.style.display = "block";
    }  else {
        cunt.style.display = "none";
 };
};



/*
let slider-m = document.getElementById('');
let  = document.getElementById('');
let  = document.getElementById('');
let  = document.getElementById('');
let  = document.getElementById('');
let  = document.getElementById('');
*/















