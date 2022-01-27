'use strict';

const modal= document.querySelector('.modal');
const tab= document.querySelector('.close-tab');
const button= document.querySelectorAll('.show-modal');
// console.log(button);

for(let i=0; i<button.length; i++)
button[i].addEventListener('click',
function(){
    modal.classList.remove('hidden');
    document.querySelector('.grey').classList.remove('hidden');
});
    

tab.addEventListener('click', function(){
    modal.classList.add('hidden');
    document.querySelector('.grey').classList.add('hidden');
})

document.addEventListener('keydown', function(){
    modal.classList.add('hidden');
    document.querySelector('.grey').classList.add('hidden');
})





