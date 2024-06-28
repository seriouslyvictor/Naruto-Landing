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
  // const viewPortH = window.innerHeight;
  // const viewPortW = window.innerWidth;
  let angle = 0;

  // size.setAttribute("viewBox", `0 0 ${viewPortW} ${viewPortH}`);

  function rotate() {
    angle += -1;
    angle <= -360 ? (angle = 0) : null;
    svgGroup.setAttribute("transform", `rotate(${angle} 0 0)`);
    requestAnimationFrame(rotate);
  }

  rotate();
}

// Start the rotation when the document is ready
document.addEventListener("DOMContentLoaded", rotateSwirls);

const thumbs = [
  "Assets/Images/Naruto__mini.png",
  "Assets/Images/kakashi__mini.png",
  "Assets/Images/kisame__mini.png",
  "Assets/Images/sasuke__mini.png",
  "Assets/Images/tsunade__mini.png",
  "Assets/Images/Naruto__mini.png",
  "Assets/Images/kakashi__mini.png",
  "Assets/Images/kisame__mini.png",
  "Assets/Images/sasuke__mini.png",
  "Assets/Images/tsunade__mini.png",
];

function carregarPersonagens() {
  const container = document.querySelector(".personagens--container");
  for (const thumb of thumbs) {
    const html = `<div class="thumb">
    <img class="thumb--img" src="${thumb}" alt="Miniatura do Personagem">
    </div>`;
    container.insertAdjacentHTML("beforeEnd", html);
  }
  const allThumbs = document.querySelectorAll(".thumb");
  for (const thumbEl of allThumbs) {
    thumbEl.addEventListener("click", abrirMiniatura);
  }
}

// function abrirMiniatura(e) {
//   const source = e.target.getAttribute("src");
//   const wrapper = document.querySelector(".p--wrapper");
//   const frame = document.querySelector(".personagens--frame img");

//   if (source === frame.getAttribute("src")) wrapper.classList.remove("loaded");
//   else {
//     wrapper.classList.add("loaded");
//     frame.setAttribute("src", source);
//   }
// }

carregarPersonagens();
