let card = document.querySelector(".card");
let svg = document.querySelector("#button");

svg.addEventListener("click", toggle);

function toggle() {
  card.classList.toggle("back");
}

const cardflip = document.querySelector(".front");

if (cardflip) {
  window.addEventListener("mousemove", (event) => {
    const xPercent = event.clientX / window.innerWidth - 0.5;
    const yPercent = event.clientY / window.innerHeight - 0.5;
    cardflip.style.transform = `rotateX(${yPercent * 60}deg) rotateY(${
      xPercent * 60
    }deg)`;
  });
  window.addEventListener("mouseout", () => {
    cardflip.style.transform = `rotateX(0) rotateY(0)`;
  });
}
