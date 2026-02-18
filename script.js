const paths = document.querySelectorAll("#cobal-logo path");
const logo = document.getElementById("cobal-logo");
const menu = document.querySelector(".main-menu");

window.addEventListener("load", () => {

let totalDuration = 0;

/* 初期状態：全パスを隠す */
paths.forEach(path => {
    const length = path.getTotalLength();
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;
});

/* 左から順番に描画 */
paths.forEach((path, index) => {

    const length = path.getTotalLength();

    const delay = index * 0.12;
    totalDuration = delay;

    path.style.transition = `stroke-dashoffset 0.8s ease ${delay}s`;
    path.style.strokeDashoffset = "0";
});

/* 描画完了後 */
setTimeout(() => {

    logo.style.transform = "translateY(-120px)";
    logo.style.opacity = "0";

    setTimeout(() => {
        menu.classList.add("show");
    },1200);

}, (totalDuration + 0.8) * 1000);

});
