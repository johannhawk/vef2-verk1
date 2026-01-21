/* útfæra */

const correctElement = document.querySelector('.counter .correct');
const incorrectElement = document.querySelector('.counter .incorrect');

if (!correctElement || !incorrectElement) {
    console.error('unable to find elements')
}

function questionAnswerHandler(e) {
    const button = e.target;

    const isCorrect = button.classList.contains('button-correct')
    const parentQuestion = button.closest('.question');

    console.log(button,parentQuestion)

    if (!correctElement) {
        throw new Error('missing correct element')
    }

    if (isCorrect) {
        const currentCorrectText = correctElement.textContent;
        const currentCorrect = Number.parseInt(currentCorrectText ?? '0');

        const updatedCorrect = currentCorrect + 1;

        correctElement.textContent = updatedCorrect.toString();

    }

}

const buttons = document.querySelectorAll('button');

for (const button of buttons) {
    button.addEventListener('click', questionAnswerHandler);
}
