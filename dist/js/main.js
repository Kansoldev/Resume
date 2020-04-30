const headerarea = document.querySelector(".header_area");

window.addEventListener('scroll', () => {
    if(document.documentElement.scrollTop > 80) {
       headerarea.classList.add('navbar_fixed');
    } else {
       headerarea.classList.remove('navbar_fixed');
    }
})