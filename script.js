const logo = document.getElementById("cobal-logo");
const menu = document.querySelector(".main-menu");
const tspans = document.querySelectorAll("#logo-text tspan");

document.fonts.ready.then(() => {

    let totalDelay = 0;

    tspans.forEach((tspan, index) => {

        const length = tspan.getComputedTextLength();

        tspan.style.strokeDasharray = length;
        tspan.style.strokeDashoffset = length;

        tspan.style.transition = "stroke-dashoffset 1s ease";

        setTimeout(() => {
            tspan.style.strokeDashoffset = "0";
        }, totalDelay);

        totalDelay += 900;
    });

    /* 全描画後スライド */
    setTimeout(() => {
        logo.style.transition = "transform 1.4s ease, opacity 1.4s ease";
        logo.style.transform = "translateY(-120px)";
        logo.style.opacity = "0";

        setTimeout(() => {
            menu.classList.add("show");
        }, 1400);

    }, totalDelay + 300);

});
