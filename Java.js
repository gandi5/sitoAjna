/* Hamburger */

let hamburger = document.querySelector('.hamburger');

let menu = document.querySelector('.menu');

let sp1 = document.querySelector('.sp1');

let sp2 = document.querySelector('.sp2');

let sp3 = document.querySelector('.sp3');

let menunero = document.querySelector('.menu--nero')



hamburger.addEventListener('click', function(){
    
    
    menu.classList.toggle('apri--menu');
    
    sp1.classList.toggle('span--bianco');
    
    sp2.classList.toggle('span--bianco');
    
    sp3.classList.toggle('span--bianco');
    
    menunero.classList.toggle('menu--bianco')
    
    
})
    
/*Menu cambia colore allo scroll*/


let mod1 = document.querySelector('.mod-1');

let mod2 = document.querySelector('.mod-2');    

let mod3 = document.querySelector('.mod-3');

let mod4 = document.querySelector('.mod-4');

let mod5 = document.querySelector('.mod-5');



window.addEventListener('scroll', function(){
     
     if (window.scrollY > 650 && window.scrollY < 1500 || window.scrollY > 2600 && window.scrollY < 3500 ){
         
         mod1.classList.add('nerisci');}
         
     else {
         mod1.classList.remove('nerisci');
     }         
         
          
     
 });  
    

window.addEventListener('scroll', function(){
     
     if (window.scrollY > 650 && window.scrollY < 1500 || window.scrollY > 2600 && window.scrollY < 3500 ){
         
         mod2.classList.add('nerisci');}
         
     else {
         mod2.classList.remove('nerisci');
     }         
         
          
     
 }); 


window.addEventListener('scroll', function(){
     
     if (window.scrollY > 650 && window.scrollY < 1500 || window.scrollY > 2600 && window.scrollY < 3500 ){
         
         mod3.classList.add('nerisci');}
         
     else {
         mod3.classList.remove('nerisci');
     }         
         
          
     
 }); 

window.addEventListener('scroll', function(){
     
     if (window.scrollY > 650 && window.scrollY < 1500 || window.scrollY > 2600 && window.scrollY < 3500 ){
         
         mod4.classList.add('nerisci');}
         
     else {
         mod4.classList.remove('nerisci');
     }         
         
          
     
 }); 

window.addEventListener('scroll', function(){
     
     if (window.scrollY > 650 && window.scrollY < 1500 || window.scrollY > 2600 && window.scrollY < 3500 ){
         
         mod5.classList.add('nerisci');}
         
     else {
         mod5.classList.remove('nerisci');
     }         
         
          
     
 }); 


ScrollReveal().reveal('.reveal',{ distance: '100px', duration: 1500,  easing: 'cubic-bezier(0.115, .50, .355, 1)', interval:1000  });




/*Cambio scroll hamburger*/

let cambio1 = document.querySelector('.cambio1');

let cambio2 = document.querySelector('.cambio2');

let cambio3 = document.querySelector('.cambio3');


window.addEventListener('scroll', function(){
     
     if (window.scrollY > 650 && window.scrollY < 1500 || window.scrollY > 2600 && window.scrollY < 3500 ){
         
         cambio1.classList.add('bgnero');}
         
     else {
         cambio1.classList.remove('bgnero');
     }         
         
          
     
 }); 

window.addEventListener('scroll', function(){
     
     if (window.scrollY > 650 && window.scrollY < 1500 || window.scrollY > 2600 && window.scrollY < 3500 ){
         
         cambio2.classList.add('bgnero');}
         
     else {
         cambio2.classList.remove('bgnero');
     }         
         
          
     
 }); 


window.addEventListener('scroll', function(){
     
     if (window.scrollY > 650 && window.scrollY < 1500 || window.scrollY > 2600 && window.scrollY < 3500 ){
         
         cambio3.classList.add('bgnero');}
         
     else {
         cambio3.classList.remove('bgnero');
     }         
         
          
     
 }); 

