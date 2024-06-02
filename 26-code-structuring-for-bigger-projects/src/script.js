import Experience from "./Experience/Experience";

const sizes = {
    width : window.innerWidth,
    height : window.innerHeight,
    ratio : Math.min(window.devicePixelRatio, 2)
}
const experience = new Experience(document.querySelector('canvas.webgl'),sizes)