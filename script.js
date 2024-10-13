const words = ["Frontend Designer", "Web Designer", "Software Engineer", "Web Developer", "Full Stack Web Developer"];
let index = 0;

function changeWord() {
    const span = document.querySelector('.text-animation span');
    span.textContent = words[index];
    index = (index + 1) % words.length;
}

setInterval(changeWord, 2000);


const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.add('active'); 
});


closeIcon.addEventListener('click', () => {
    navbar.classList.remove('active');
});



