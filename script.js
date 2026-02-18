const text = document.getElementById("logo-text");
const logo = document.getElementById("cobal-logo");
const menu = document.querySelector(".main-menu");

window.addEventListener("load", () => {

    const length = text.getBBox().width;

    text.style.strokeDasharray = length;
    text.style.strokeDashoffset = length;

    text.style.transition = "stroke-dashoffset 2.5s ease";

    requestAnimationFrame(() => {
        text.style.strokeDashoffset = "0";
    });

    setTimeout(() => {

        logo.style.transform = "translateY(-120px)";
        logo.style.opacity = "0";

        setTimeout(() => {
            menu.classList.add("show");
        }, 1200);

    }, 2600);

});
