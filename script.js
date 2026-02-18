const paths = document.querySelectorAll("#cobal-logo path");
const logo = document.getElementById("cobal-logo");
const menu = document.querySelector(".main-menu");

window.addEventListener("load", () => {

let totalLength = 0;

/* 各パスの長さを取得 */
paths.forEach(path => {
    const length = path.getTotalLength();
    totalLength += length;

    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;
});

/* 左から順番に描画 */
let delay = 0;

paths.forEach(path => {
    const length = path.getTotalLength();

    path.style.transition = `stroke-dashoffset 0.8s ease ${delay}s`;
    path.style.strokeDashoffset = "0";

    delay += 0.15;
});

/* 描画終了後 */
setTimeout(() => {

    logo.style.transform = "translateY(-120px)";
    logo.style.opacity = "0";

    setTimeout(() => {
        menu.classList.add("show");
    },1200);

}, delay*1000 + 800);

});
