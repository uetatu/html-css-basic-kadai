const returnTop = document.querySelector('.return_top');

window.addEventListener('scroll', () => {
    let scroll_Y = window.scrollY;
    if(scroll_Y > 1200) {
        returnTop.classList.add('active');
    } else {
        returnTop.classList.remove('active');
    }

}) ;