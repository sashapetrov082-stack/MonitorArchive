function bg(item) {
  const gradient = `linear-gradient(135deg, ${item.colors[0]}, ${item.colors[1]})`;
  return item.image ? `url('${item.image}') center/cover no-repeat, ${gradient}` : gradient;
}

// Слайдер с вкладками
const track = document.getElementById("heroTrack");
const tabs = document.getElementById("heroTabs");
const DELAY = 6000;
let current = 0;
let timer;

SLIDES.forEach((s, i) => {
  const slide = document.createElement("div");
  slide.className = "hero__slide";
  slide.style.background = bg(s);
  slide.innerHTML = `<div class="hero__content"><h1>${s.title}</h1><p>${s.text}</p><a href="#games" class="btn">Играть</a></div>`;
  track.appendChild(slide);

  const tab = document.createElement("button");
  tab.className = "hero__tab";
  tab.innerHTML = `<span>${s.title}</span><i></i>`;
  tab.addEventListener("click", () => go(i));
  tabs.appendChild(tab);
});

function go(i) {
  current = (i + SLIDES.length) % SLIDES.length;
  track.style.transform = `translateX(-${current * 100}%)`;
  [...tabs.children].forEach((t, j) => {
    t.classList.remove("is-active");
    if (j === current) {
      void t.offsetWidth; // перезапуск анимации полосы прогресса
      t.classList.add("is-active");
    }
  });
  clearInterval(timer);
  timer = setInterval(() => go(current + 1), DELAY);
}
go(0);

// Мобильные игры
const mobileGrid = document.getElementById("mobileGrid");
MOBILE_GAMES.forEach((g) => {
  const card = document.createElement("a");
  card.href = g.url || "#";
  card.className = "poster";
  card.style.background = bg(g);
  card.innerHTML = `<div class="poster__info"><h3>${g.title}</h3><span>${g.genre}</span></div>`;
  mobileGrid.appendChild(card);
});

// PC-игры
const pcList = document.getElementById("pcList");
PC_GAMES.forEach((g) => {
  const item = document.createElement("a");
  item.href = g.url || "#";
  item.className = "pc-item";
  item.innerHTML = `<div class="pc-item__img" style="background:${bg(g)}"></div>
    <div><h3>${g.title}</h3><span>${g.genre}</span></div>`;
  pcList.appendChild(item);
});



// Мобильное меню
document.getElementById("burger").addEventListener("click", () => {
  document.getElementById("nav").classList.toggle("is-open");
});

// Выпадающий список «Наши проекты»
const familyBtn = document.getElementById("familyBtn");
const familyList = document.getElementById("familyList");
familyBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  const open = familyList.classList.toggle("is-open");
  familyBtn.setAttribute("aria-expanded", open);
});
document.addEventListener("click", () => {
  familyList.classList.remove("is-open");
  familyBtn.setAttribute("aria-expanded", false);
});
