const headerTop = document.querySelector('.header-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        headerTop.classList.add('header-top-shadow');
    } else {
       headerTop.classList.remove('header-top-shadow');
    }
});

const menuToggle = document.querySelector('#menu-toggle');

menuToggle.addEventListener("click", () => {
    const body = document.body;

    if(body.classList.contains("light-mode")) {
        body.classList.remove("light-mode");
        body.classList.add("dark-mode");
        menuToggle.innerHTML = "<div>🌑</div>"
    }else {
        body.classList.remove("dark-mode");
        body.classList.add("light-mode");
        menuToggle.innerHTML = "<div>💡</div>"
    }
});