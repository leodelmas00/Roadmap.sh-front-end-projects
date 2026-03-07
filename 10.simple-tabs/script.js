const backgrounds = {
    dog: 'media/dog.webp',
    cat: 'media/cat.webp',
    monkey: 'media/monkey.webp',
    raccoon: 'media/raccoon.webp'
};

const links = document.querySelectorAll('.card-container a');
const bg = document.querySelector('.background-container');

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        links.forEach(l => l.classList.remove('active'));
        link.classList.add('active');

        const animal = link.textContent.toLowerCase();
        bg.style.backgroundImage = `url('${backgrounds[animal]}')`;
    });
});

links[0].classList.add('active');