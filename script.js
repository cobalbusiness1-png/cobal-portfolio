const paths = document.querySelectorAll("#cobal-logo path");
const logo = document.getElementById("cobal-logo");
const menu = document.querySelector(".main-menu");

window.addEventListener("load", () => {

let delay = 0;

/* すべてのパスを非表示状態に */
paths.forEach(path => {
    const length = path.getTotalLength();
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;
});

/* 左から順に描画 */
paths.forEach(path => {

    const length = path.getTotalLength();

    path.style.transition = `stroke-dashoffset 0.8s ease ${delay}s`;
    path.style.strokeDashoffset = "0";

    delay += 0.12;  // 描画間隔
});

/* 描画完了後にスライド */
setTimeout(() => {

    logo.style.transform = "translateY(-120px)";
    logo.style.opacity = "0";

    setTimeout(() => {
        menu.classList.add("show");
    },1200);

}, delay*1000 + 800);

});
