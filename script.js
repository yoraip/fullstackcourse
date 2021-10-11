let btn = document.getElementById('divhr');
let list = document.getElementById('divlist');

btn.addEventListener( 'click', (event) => {
    if ( list.style.display == 'none')
        list.style.display = 'block';
    else
        list.style.display = 'none';
})

let subbtn = document.getElementById('subbtn');

subbtn.addEventListener('click' , (event) => {
    alert('Thank you! I will get back to you ASAP!');
})

function myFunction() {
    let element = document.body;
    element.classList.toggle('dark-mode');
}