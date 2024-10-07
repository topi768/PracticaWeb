document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    let currentValue = '';

    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', () => {
            const action = button.dataset.action;
            const value = button.dataset.value;

            if (action === 'clear') {
                currentValue = '';
                updateDisplay();
            } else if (action === 'calculate') {
                try {
                    currentValue = eval(currentValue);
                    updateDisplay();
                } catch {
                    display.value = 'Error';
                    currentValue = '';
                }
            } else {
                currentValue += value;
                updateDisplay();
            }
        });
    });

    function updateDisplay() {
        display.value = currentValue || '0';
    }
});
