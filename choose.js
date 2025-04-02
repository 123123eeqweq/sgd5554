document.addEventListener('DOMContentLoaded', () => {
    const networkButtons = document.querySelectorAll('.network-btn');

    networkButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Переключаем класс .selected при клике
            button.classList.toggle('selected');
        });
    });
});