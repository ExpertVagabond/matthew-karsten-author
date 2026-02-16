document.querySelector('.nav-toggle')?.addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('open');
});
document.querySelectorAll('.nav-links a').forEach(function(a) {
    a.addEventListener('click', function() {
        document.querySelector('.nav-links').classList.remove('open');
    });
});
