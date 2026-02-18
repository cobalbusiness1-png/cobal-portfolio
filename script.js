const text = document.getElementById("logo-text");
const logo = document.getElementById("cobal-logo");
const menu = document.querySelector(".main-menu");

window.addEventListener("load", () => {

    const length = text.getBBox().width * 1.1;

    text.style.strokeDasharray = length;
    text.style.strokeDashoffset = length;

    /* ペン描画 */
    text.style.transition = "stroke-dashoffset 2.8s ease";
    requestAnimationFrame(() => {
        text.style.strokeDashoffset = "0";
    });

    /* 描画後スライド */
    setTimeout(() => {

        logo.style.transition = "transform 1.2s ease, opacity 1.2s ease";
        logo.style.transform = "translateY(-120px)";
        logo.style.opacity = "0";

        setTimeout(() => {
            menu.classList.add("show");
        }, 1200);

    }, 3000);

});
