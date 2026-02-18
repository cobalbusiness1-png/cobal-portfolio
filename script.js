const logoStroke = document.querySelector('.logo-stroke');
const logoFill = document.querySelector('.logo-fill');
const logo = document.getElementById('cobal-logo');
const menu = document.querySelector('.main-menu');

/* 塗りアニメ終了後にロゴを上へスライド */
logoFill.addEventListener('animationend', (e) => {

    if (e.animationName === "fillFade") {

        // 少し待ってから上へ移動
        setTimeout(() => {
            logo.classList.add('logo-exit');

            // ロゴ移動後にメニュー表示
            setTimeout(() => {
                menu.classList.add('show');
            }, 1500);

        }, 800);
    }
});

console.log("Cobal Studio Animation System Active.");
