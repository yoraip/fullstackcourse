let btn = document.getElementById('divhr');
let list = document.getElementById('divlist');

btn.addEventListener( 'click', (event) => {
    if ( list.style.display == 'none')
        list.style.display = 'block';
    else
        list.style.display = 'none';
})

document.addEventListener('scroll', (event) => {
    scroll = window.scrollY;
    if (scroll > 500) {
        scrollbar.style.display = 'block';
    
    newScroll = scroll;

    } else if (newScroll > 500 && scroll < 500) {
    scrollbar.innerText = 'WE ARE GOING UP';
    }
})
