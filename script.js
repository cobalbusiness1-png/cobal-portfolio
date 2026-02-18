const logoFill = document.querySelector('.logo-fill');
const menu = document.querySelector('.main-menu');

logoFill.addEventListener('animationend', (e) => {
    if (e.animationName === "moveUpFade") {
        menu.classList.add('show');
    }
});

console.log("Cobal Studio Animation System Active.");
