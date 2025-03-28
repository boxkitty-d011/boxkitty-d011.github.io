const calcEvenpad = () =>
    document.querySelectorAll(".evenpad").forEach(e => {
      e.style.paddingRight = "unset";
      e.style.paddingRight = e.offsetWidth % 2 + "px";
    });
window.addEventListener("resize", calcEvenpad);
window.addEventListener("load", calcEvenpad);
