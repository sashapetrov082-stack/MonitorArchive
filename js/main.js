function bg(item) {
  const gradient = `linear-gradient(135deg, ${item.colors[0]}, ${item.colors[1]})`;
  return item.image ? `url('${item.image}') center/cover no-repeat, ${gradient}` : gradient;
}

// Слайдер
const track = document.getElementById("heroTrack");
const dots = document.getElementById("heroDots");
let current = 0;

SLIDES.forEach((s, i) => {
  const slide = document.createElement("div");
  slide.className = "hero__slide";
  slide.style.background = bg(s);
  slide.innerHTML = `<div class="container hero__content"><h1>${s.title}</h1><p>${s.text}</p><a href="#games" class="btn">Играть</a></div>`;
  track.appendChild(slide);

  const dot = document.createElement("button");
  dot.setAttribute("aria-label", `Слайд ${i + 1}`);
  dot.addEventListener("click", () => go(i));
  dots.appendChild(dot);
});

function go(i) {
  current = (i + SLIDES.length) % SLIDES.length;
  track.style.transform = `translateX(-${current * 100}%)`;
  [...dots.children].forEach((d, j) => d.classList.toggle("is-active", j === current));
}

document.getElementById("heroPrev").addEventListener("click", () => go(current - 1));
document.getElementById("heroNext").addEventListener("click", () => go(current + 1));
let timer = setInterval(() => go(current + 1), 6000);
document.querySelector(".hero").addEventListener("mouseenter", () => clearInterval(timer));
document.querySelector(".hero").addEventListener("mouseleave", () => (timer = setInterval(() => go(current + 1), 6000)));
go(0);

// Игры
const grid = document.getElementById("gamesGrid");
const genreNames = { rpg: "RPG", strategy: "Стратегия", casual: "Казуальная", action: "Экшен" };

function renderGames(filter) {
  grid.innerHTML = "";
  GAMES.filter((g) => filter === "all" || g.genre === filter).forEach((g) => {
    const card = document.createElement("a");
    card.href = "#";
    card.className = "card";
    card.innerHTML = `
      <div class="card__img" style="background:${bg(g)}">${g.tag ? `<span class="badge">${g.tag}</span>` : ""}</div>
      <div class="card__body"><h3>${g.title}</h3><span>${genreNames[g.genre]}</span></div>`;
    grid.appendChild(card);
  });
}

document.getElementById("tabs").addEventListener("click", (e) => {
  const btn = e.target.closest(".tab");
  if (!btn) return;
  document.querySelectorAll(".tab").forEach((t) => t.classList.toggle("is-active", t === btn));
  renderGames(btn.dataset.filter);
});
renderGames("all");

// Новости
const newsList = document.getElementById("newsList");
NEWS.forEach((n) => {
  const item = document.createElement("a");
  item.href = "#";
  item.className = "news__item";
  item.innerHTML = `
    <div class="news__img" style="background:${bg(n)}"></div>
    <div class="news__body"><span class="news__meta">${n.category} · ${n.date}</span><h3>${n.title}</h3></div>`;
  newsList.appendChild(item);
});

// Мобильное меню
document.getElementById("burger").addEventListener("click", () => {
  document.getElementById("nav").classList.toggle("is-open");
});
