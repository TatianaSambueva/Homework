const btn2 = document.querySelector('.btn-2');
const colorInput = document.querySelector('#colorInput');

btn2.addEventListener('click', function () {
    const newColor = colorInput.value;
    document.body.style.background = newColor;
});
