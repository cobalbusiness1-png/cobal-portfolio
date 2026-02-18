const text = document.getElementById("logo-text");
const logo = document.getElementById("cobal-logo");
const menu = document.querySelector(".main-menu");

/* フォント読み込み完了後に実行 */
document.fonts.ready.then(() => {

    const length = text.getComputedTextLength();

    text.style.strokeDasharray = length;
    text.style.strokeDashoffset = length;

    /* ペン描画 */
    setTimeout(() => {
        text.style.transition = "stroke-dashoffset 3s ease";
        text.style.strokeDashoffset = "0";
    }, 200);

    /* 描画後スライド */
    setTimeout(() => {
        logo.style.transition = "transform 1.4s ease, opacity 1.4s ease";
        logo.style.transform = "translateY(-120px)";
        logo.style.opacity = "0";

        setTimeout(() => {
            menu.classList.add("show");
        }, 1400);

    }, 3300);

});
