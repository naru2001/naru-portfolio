document.addEventListener("DOMContentLoaded", function () {
    const btn = document.querySelector('.menu-btn');
    const nav = document.querySelector('nav');
    const m = document.querySelector("main");
    const tab = document.querySelector(".tabmenu");
    btn.addEventListener('click', function () {
        var z="open-menu";
        nav.classList.toggle(z);
        m.classList.toggle(z);
        tab.classList.toggle(z);
        if (btn.innerHTML === 'メニュー') {
            btn.innerHTML = '閉じる';
        } else {
            btn.innerHTML = 'メニュー';
        }
    });
})
