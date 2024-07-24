document.addEventListener('DOMContentLoaded', () => {
    const decrementButton = document.querySelector('.decrement');
    const incrementButton = document.querySelector('.increment');
    const numberInput = document.querySelector('.number-input');

    decrementButton.addEventListener('click', () => {
        let currentValue = parseInt(numberInput.value);
        if (currentValue > numberInput.min) {
            numberInput.value = currentValue - 1;
        }
    });

    incrementButton.addEventListener('click', () => {
        let currentValue = parseInt(numberInput.value);
        numberInput.value = currentValue + 1;
    });
});
