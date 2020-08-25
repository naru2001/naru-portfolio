document.addEventListener("DOMContentLoaded", function () {
    const btn = document.querySelector('.menu-btn');
    const nav = document.querySelector('nav');
    const m = document.querySelector("main");
    btn.addEventListener('click', function () {
        nav.classList.toggle('open-menu');
        m.classList.toggle('open-menu');
        if (btn.innerHTML === 'メニュー') {
            btn.innerHTML = '閉じる';
        } else {
            btn.innerHTML = 'メニュー';
        }
    });
})
