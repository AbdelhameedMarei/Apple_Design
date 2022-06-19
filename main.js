let myProduct = document.getElementById('myProduct');
let container = document.querySelector('.container');

function phones(phone) {
    myProduct.src = phone;
}

function bgColos(color) {
    container.style.background = color;
}