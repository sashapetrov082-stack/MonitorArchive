// Контент сайта. Чтобы подставить свои изображения, положите файлы в папку images/
// и укажите путь в поле image (например, "images/banner1.jpg").
// Пока image пустой, вместо картинки показывается цветной градиент.

const SLIDES = [
  { title: "Хроники Астерии", text: "Новая глава эпической RPG уже доступна", image: "", colors: ["#3a1c71", "#d76d77"] },
  { title: "Империя Ветров", text: "Стройте, захватывайте, побеждайте", image: "", colors: ["#0f2027", "#2c5364"] },
  { title: "Пиксельная ферма", text: "Летнее обновление: новые культуры и питомцы", image: "", colors: ["#11998e", "#38ef7d"] },
];

const GAMES = [
  { title: "Хроники Астерии", genre: "rpg", tag: "Новое", image: "", colors: ["#3a1c71", "#d76d77"] },
  { title: "Империя Ветров", genre: "strategy", tag: "Хит", image: "", colors: ["#0f2027", "#2c5364"] },
  { title: "Пиксельная ферма", genre: "casual", tag: "", image: "", colors: ["#11998e", "#38ef7d"] },
  { title: "Клинок Рассвета", genre: "action", tag: "Хит", image: "", colors: ["#c31432", "#240b36"] },
  { title: "Звёздный флот", genre: "strategy", tag: "", image: "", colors: ["#1a2a6c", "#b21f1f"] },
  { title: "Сладкий матч", genre: "casual", tag: "Новое", image: "", colors: ["#f857a6", "#ff5858"] },
  { title: "Легенды Севера", genre: "rpg", tag: "", image: "", colors: ["#4b6cb7", "#182848"] },
  { title: "Арена Теней", genre: "action", tag: "", image: "", colors: ["#232526", "#414345"] },
];

const NEWS = [
  { date: "05.10.2026", category: "Обновление", title: "Хроники Астерии: глава 4 «Пробуждение»", image: "", colors: ["#3a1c71", "#d76d77"] },
  { date: "01.10.2026", category: "Событие", title: "Осенний турнир в Империи Ветров стартует 10 октября", image: "", colors: ["#0f2027", "#2c5364"] },
  { date: "27.09.2026", category: "Компания", title: "PlayNova открывает новую студию разработки", image: "", colors: ["#1a2a6c", "#b21f1f"] },
];
