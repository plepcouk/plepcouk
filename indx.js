window.addEventListener('scroll', function() {
    var footer = document.querySelector('.footer');
    var scrollPosition = window.scrollY + window.innerHeight;
    var pageHeight = document.documentElement.scrollHeight;

    if (scrollPosition >= pageHeight) {
        footer.style.bottom = '0';
    } else {
        footer.style.bottom = '-50px';
    }
});
