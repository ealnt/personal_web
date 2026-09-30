(function () {
    var target = document.querySelector('.typing_text span');
    if (!target) return;

    
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        target.textContent = roles.join(' | ');
        return;
    }

    var r = 0, c = 0, deleting = false;

    function tick() {
        var word = roles[r];
        c += deleting ? -1 : 1;
        target.textContent = word.slice(0, c);

        var delay = deleting ? 40 : 90;
        if (!deleting && c === word.length) {
            deleting = true;
            delay = 1400;
        } else if (deleting && c === 0) {
            deleting = false;
            r = (r + 1) % roles.length;
            delay = 400;
        }
        setTimeout(tick, delay);
    }
    tick();
})();
