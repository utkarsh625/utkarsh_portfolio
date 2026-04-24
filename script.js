const hamburger = document.getElementById('hamburger');
const list =      document.getElementById('list');
const overlay =      document.getElementById('overlay');


hamburger.addEventListener('click',()=>{
    list.classList.toggle('navlist-active');
    overlay.classList.toggle('overlay-active');
    

    
})