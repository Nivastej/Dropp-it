// script.js

document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    // Load saved theme preference from localStorage
    if (localStorage.getItem('dark-theme') === 'true') {
        body.classList.add('dark-theme');
    }

    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-theme');

        // Save the current theme preference to localStorage
        localStorage.setItem('dark-theme', body.classList.contains('dark-theme'));
    });
});
