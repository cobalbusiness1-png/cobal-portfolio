window.addEventListener('load', () => {
    const intro = document.getElementById('intro-layer');
    const index = document.getElementById('main-index');

    // 1. アニメーションが終わる頃（例: 4秒後）にフェードアウト開始
    setTimeout(() => {
        intro.style.opacity = '0';
        
        // 2. 完全に消えたらレイヤーを消してインデックスを表示
        setTimeout(() => {
            intro.style.display = 'none';
            index.classList.remove('hidden');
            setTimeout(() => index.classList.add('show'), 50);
        }, 1500); // transitionの時間と合わせる
    }, 4000); 
});
