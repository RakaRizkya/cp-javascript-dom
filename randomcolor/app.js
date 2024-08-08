const button = document.querySelector('button');
const h1 = document.querySelector('h1');

button.addEventListener('click', () => {
    const newColor = randomColorGenerator();
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
});

const randomColorGenerator = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    return `rgb(${r}, ${g}, ${b})`;
}