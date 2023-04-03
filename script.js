const result = document.querySelector('.result');
const form = document.querySelector('#form');

const ENGLISH = 'qwertyuiopasdfghjklzxcvbnm';
const RUSSIAN = 'йцукенгшщзхъфывапролджэячсмитьбю';
const NUMBERS = '1234567890';
const OPERATORS = ['Caps Lock', 'Backspace', 'Language'];

let currentLanguage = ENGLISH;

console.log(form.dataset);
window.addEventListener('load', () => {
    currentLanguage.split('').forEach((char) => {
        form.innerHTML += `<button data-type="letter">${char}</button>`;
    });
    NUMBERS.split('').forEach((char) => {
        form.innerHTML += `<button data-type="number">${char}</button>`;
    });
    OPERATORS.forEach((char) => {
        form.innerHTML += `<button data-type="${char}">${char}</button>`;
    });
});

form.addEventListener('click', (event) => {
    event.preventDefault();
    if (event.target.nodeName !== 'BUTTON') return;

    const type = event.target.dataset.type;
    if (type === 'letter' || type === 'number') {
        const value = event.target.innerHTML;
        result.innerHTML += value;
        return;
    }
    if (type === 'Caps Lock') {
        const letters = form.querySelectorAll('button[data-type="letter"]');
        for (let letter of letters) {
            const isUpperCase =
                letter.innerHTML === letter.innerHTML.toUpperCase();
            letter.innerHTML = isUpperCase
                ? letter.innerHTML.toLowerCase()
                : letter.innerHTML.toUpperCase();
        }

        return;
    }
    if (type === 'Backspace') {
        result.innerHTML = result.innerHTML.slice(
            0,
            result.innerHTML.length - 1
        );
        return;
    }
    if (type === 'Language') {
        language();
    }
    function language() {
        form.innerHTML = '';
        currentLanguage = currentLanguage === ENGLISH ? RUSSIAN : ENGLISH;
        currentLanguage.split('').forEach((char) => {
            form.innerHTML += `<button data-type="letter">${char}</button>`;
        });
        NUMBERS.split('').forEach((char) => {
            form.innerHTML += `<button data-type="number">${char}</button>`;
        });
        OPERATORS.forEach((char) => {
            form.innerHTML += `<button data-type="${char}">${char}</button>`;
        });
    }
});
