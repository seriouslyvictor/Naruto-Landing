const btnMenu = document.getElementById("menu");
const mainNav = document.querySelector(".main--nav");

btnMenu.addEventListener("click", () => {
  document.body.classList.add("menu");
  mainNav.classList.add("slide-in-blurred-left");

  const btnClose = document.querySelector(".close");
  btnClose.addEventListener("click", () => {
    mainNav.classList.remove("slide-in-blurred-left");
    mainNav.classList.add("slide-out-blurred-left");

    setTimeout(() => {
      document.body.classList.remove("menu");
      mainNav.classList.remove("slide-out-blurred-left");
    }, 800);
  });
});

function rotateSwirls() {
  const size = document.getElementById("swirl");
  const svgGroup = document.getElementById("rotate2");
  const viewPortH = window.innerHeight;
  const viewPortW = window.innerWidth;
  let angle = 0;

  size.setAttribute("viewBox", `0 0 ${viewPortW} ${viewPortH}`);

  function rotate() {
    angle += -1.5 % 60;
    svgGroup.setAttribute("transform", `rotate(${angle} 0 0)`);
    requestAnimationFrame(rotate);
  }

  rotate();
}

// Start the rotation when the document is ready
document.addEventListener("DOMContentLoaded", rotateSwirls);
