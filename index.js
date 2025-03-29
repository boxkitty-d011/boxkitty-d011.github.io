const calcEvenpad = () =>
    document.querySelectorAll(".evenpad").forEach(e => {
      e.style.paddingRight = "unset";
      e.style.paddingRight = e.offsetWidth % 2 + "px";
    });
window.addEventListener("resize", calcEvenpad);
window.addEventListener("load", calcEvenpad);

//---------------------------------- Pages -----------------------------------//
import { render as renderPress } from "/pages/press.js"

//---------------------------------- Router ----------------------------------//
const pageRoutes = {
    "/press": renderPress,
}

const route = () => {
    if (window.location.hash) {
        const path = window.location.hash.substring(1);
        (pageRoutes[path] ?? render404)();
    } else
        renderLanding();
    const allNav = [...document.querySelectorAll("nav>a")];
    const hereNav = allNav.filter(a => a.href === window.location.href);
    allNav.forEach(a => a.classList.toggle("active", false));
    hereNav.forEach(a => a.classList.toggle("active", true));
    calcEvenpad();
};

addEventListener("popstate", route);
route();
