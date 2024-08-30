const heroText = document.querySelector("hero h2");
const colors = ["FF5733", "#33FF57", "3357FF"];
let colorIndex = 0;

function changeHeroTextColor() {
    heroText.computedStyle.color = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
}

setInterval(changeHeroTextColor, 2000);

let curerentImageIndex = 0;
const images = ["aesthetic-landscape-reflection-background-hd-wallpaper-sr10012410-1706502139247-cover.webp", "desktop-wallpaper-couple-alone-sunset-neon-mountains-moon.jpg", "18445e7529a11bb16b500e77f1daabee.jpg"];

function changeHeroImage() {
    curerentImageIndex = (curerentImageIndex + 1) % images.length;
    document.querySelector(
        "#hero"
    ).style.backgroundImage = `url('${images[curerentImageIndex]}')`;
}

setInterval(changeHeroImage, 2000);

produckImages.forEach((image) => {
    image.addEventListener("click", () => {
    image.style.transform = "scale(1.5)";
    image.style.transition = "transform 0.5s";
});
image.addEventListener("mouseleave", () => {
    image.style.transform = "scale(1)";
});
});