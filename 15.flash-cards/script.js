const buttonPrevious = document.querySelector("#previous");
const buttonNext = document.querySelector("#next");
const progressBarText = document.querySelector("#progressText");
const progressBar = document.querySelector("#progressBar");
const cards = document.querySelectorAll(".card");

let cardNum = 0;

function updateProgressBar() {
    const porcentaje = ((cardNum + 1) / cards.length) * 100;
    progressBar.style.width = `${porcentaje}%`;
}

function showCard(index) {

    cards.forEach(card => card.style.display = 'none');
    
    const currentCard = cards[index];
    currentCard.style.display = 'block';

    currentCard.querySelector('.question').style.display = 'block';
    currentCard.querySelector('.answer').style.display = 'none';

    currentCard.querySelector('button').onclick = () => {
        const q = currentCard.querySelector('.question');
        const a = currentCard.querySelector('.answer');
        if (q.style.display === 'none') {
            q.style.display = 'block';
            a.style.display = 'none';
        } else {
            q.style.display = 'none';
            a.style.display = 'block';
        }
    };

    progressBarText.textContent = `${index + 1} / 10`;
    
    updateProgressBar();
}

showCard(0);

buttonPrevious.addEventListener("click", () => {
    if (cardNum > 0) showCard(--cardNum);
});

buttonNext.addEventListener("click", () => {
    if (cardNum < cards.length - 1) showCard(++cardNum);
});