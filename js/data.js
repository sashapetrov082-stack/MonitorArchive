// Контент сайта. Чтобы подставить свои изображения, положите файлы в папку images/
// и укажите путь в поле image (например, "images/banner1.jpg").
// Пока image пустой, вместо картинки показывается цветной градиент.
//
// Рекомендуемые размеры:
//   SLIDES      — 1920×700
//   MOBILE_GAMES — 600×800 (вертикальный постер)
//   PC_GAMES     — 480×300
//   NEWS         — 800×450

const SLIDES = [
  { title: "몬길: STAR DIVE", text: "", image: "images/mg_top_pc.jpg", colors: ["#3a1c71", "#d76d77"] },
  { title: "왕좌의 게임: 킹스로드", text: "", image: "images/gotasia_pc.jpg", colors: ["#0f2027", "#2c5364"] },
  { title: "일곱 개의 대죄: Origin", text: "", image: "images/origin_top_pc.jpg", colors: ["#c31432", "#240b36"] },
  { title: "세븐나이츠 리버스", text: "", image: "images/sena_1001.jpg", colors: ["#11998e", "#38ef7d"] },
  { title: "SOL: enchant", text: "", image: "images/sol_top_pc.jpg", colors: ["#1a2a6c", "#b21f1f"] },
];

const MOBILE_GAMES = [
  { title: "Хроники Астерии", genre: "RPG", image: "", colors: ["#3a1c71", "#d76d77"] },
  { title: "Империя Ветров", genre: "Стратегия", image: "", colors: ["#0f2027", "#2c5364"] },
  { title: "Сладкий матч", genre: "Казуальная", image: "", colors: ["#f857a6", "#ff5858"] },
  { title: "Легенды Севера", genre: "RPG", image: "", colors: ["#4b6cb7", "#182848"] },
];

const PC_GAMES = [
  { title: "Клинок Рассвета", genre: "Экшен-RPG", image: "", colors: ["#c31432", "#240b36"] },
  { title: "Звёздный флот", genre: "Стратегия", image: "", colors: ["#1a2a6c", "#b21f1f"] },
  { title: "Арена Теней", genre: "Экшен", image: "", colors: ["#232526", "#414345"] },
];

const NEWS = [
  { date: "05.10.2026", category: "Обновление", title: "Хроники Астерии: глава 4 «Пробуждение»", image: "", colors: ["#3a1c71", "#d76d77"] },
  { date: "01.10.2026", category: "Событие", title: "Осенний турнир в Империи Ветров стартует 10 октября", image: "", colors: ["#0f2027", "#2c5364"] },
  { date: "27.09.2026", category: "Компания", title: "PlayNova открывает новую студию разработки", image: "", colors: ["#1a2a6c", "#b21f1f"] },
];
