let h2_primary = document.querySelector('.h2-p');
let h2_secundary = document.querySelector('.h2-s');

function geretareColor() {
    let chacacters = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
        color += chacacters[Math.floor(Math.random() * 16)];
    }

    return color
}

function changeColor() {
    h2_primary.innerHTML = 'Generated Color'
    h2_secundary.innerHTML = geretareColor();
    h2_secundary.style.backgroundColor = geretareColor();
}