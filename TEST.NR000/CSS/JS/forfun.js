document.addEventListener('DOMContentLoaded', () => {
    let btn = document.querySelector('#btnSend');
    if (btn) {
        btn.addEventListener('click', () => {
            window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
        });
    }
});