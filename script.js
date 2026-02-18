const text = document.getElementById("logo-text");
const logo = document.getElementById("cobal-logo");
const menu = document.querySelector(".main-menu");

/* SVG長さ取得 */
const length = text.getComputedTextLength();

/* 初期状態（見えない） */
text.style.strokeDasharray = length;
text.style.strokeDashoffset = length;

/* ペン描画アニメ */
setTimeout(() => {
    text.style.transition = "stroke-dashoffset 3s ease";
    text.style.strokeDashoffset = "0";
}, 300);

/* 描画後処理 */
setTimeout(() => {

    /* 白で塗る */
    text.style.fill = "white";

    /* 少し待って上へ */
    setTimeout(() => {
        logo.style.transform = "translateY(-120px)";
        logo.style.opacity = "0";

        /* メニュー表示 */
        setTimeout(() => {
            menu.classList.add("show");
        }, 1400);

    }, 800);

}, 3300);
