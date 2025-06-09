// banner.js
document.addEventListener('DOMContentLoaded', () => {
    const hero = document.querySelector('.hero');

    const images = [
        "imagen/banner.png",
        "imagen/categoria-hombre.jpg",
        "imagen/categoria-mujer.png",
        "imagen/categoria-niños.png",
        "imagen/categoria-nuevo.png",
        "imagen/par.png"
    ];

    let currentIndex = 0;

    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        hero.style.backgroundImage = `url('${images[currentIndex]}')`;
    }, 3000);
});
