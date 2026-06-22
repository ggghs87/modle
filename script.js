const avatar = document.getElementById("avatarBtn");
const dropdown = document.getElementById("dropdown");
const hint = document.getElementById("hint");

let step = 1;

// открыть/закрыть меню
if (avatar) {
  avatar.addEventListener("click", () => {
    dropdown.classList.toggle("hidden");

    if (step === 1) {
      step = 2;
      if (hint) hint.innerText = "2. Выбери 'О пользователе'";
    }
  });
}

// переходы
document.querySelectorAll("[data-go]").forEach(el => {
  el.addEventListener("click", () => {
    const page = el.dataset.go;
    if (page === "main") window.location.href = "index.html";
    if (page === "user") window.location.href = "user.html";
  });
});

// свайп навигация
let startX = 0;

document.addEventListener("touchstart", e => {
  startX = e.touches[0].clientX;
});

document.addEventListener("touchend", e => {
  let endX = e.changedTouches[0].clientX;

  if (startX - endX > 80) {
    // свайп влево
    if (location.pathname.includes("index")) {
      window.location.href = "user.html";
    }
  }

  if (endX - startX > 80) {
    // свайп вправо
    if (location.pathname.includes("user")) {
      window.location.href = "index.html";
    }
  }
});
