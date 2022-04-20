window.addEventListener('scroll', ()=> {
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
});
function navMenu(){
    const menu = document.querySelector(".menuToggle")
    const navbar = document.querySelector(".navigation")
    menu.classList.toggle('active')
    navbar.classList.toggle('active')
}

