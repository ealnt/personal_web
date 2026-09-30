(function () {
    var btn = document.querySelector('.menu_toggle');
    var nav = document.querySelector('header nav');
    if (!btn || !nav) return;

    function setOpen(open) {
        nav.classList.toggle('open', open);
        btn.classList.toggle('open', open);
        btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    }

    btn.addEventListener('click', function () {
        setOpen(!nav.classList.contains('open'));
    });

    nav.addEventListener('click', function (e) {
        if (e.target.tagName === 'A') setOpen(false);
    });
    window.addEventListener('resize', function () {
        if (window.innerWidth > 800) setOpen(false);
    });
})();
