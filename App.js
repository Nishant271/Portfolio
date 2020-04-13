const navToggle=document.querySelector('.nav-toggle');
const navLinks=document.querySelectorAll('.nav_link');


navToggle.addEventListener('click',()=>{
document.body.classList.toggle('nav_open');

})

navLinks.forEach(links=>{
    links.addEventListener('click',()=>{
        document.body.classList.remove('nav_open');
    });
});
