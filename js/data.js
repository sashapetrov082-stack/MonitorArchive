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
  { title: "몬길: STAR DIVE", text: "", image: "images/mg_top_pc.jpg", colors: ["#3a1c71", "#d76d77"], url: "https://stardive.netmarble.com/" },
  { title: "왕좌의 게임: 킹스로드", text: "", image: "images/gotasia_pc.jpg", colors: ["#0f2027", "#2c5364"], url: "https://gotkingsroad.netmarble.com/ko" },
  { title: "일곱 개의 대죄: Origin", text: "", image: "images/origin_top_pc.jpg", colors: ["#c31432", "#240b36"], url: "https://7origin.netmarble.com/" },
  { title: "세븐나이츠 리버스", text: "", image: "images/sena_1001.jpg", colors: ["#11998e", "#38ef7d"], url: "https://sena.netmarble.com/" },
  { title: "SOL: enchant", text: "", image: "images/sol_top_pc.jpg", colors: ["#1a2a6c", "#b21f1f"], url: "https://ntiny.link/SOL_preorder" },
];

const MOBILE_GAMES = [
  { title: "왕좌의 게임: 킹스로드", genre: "RPG", image: "images/gotasia_mobile.jpg", colors: ["#3a1c71", "#d76d77"], url: "https://play.google.com/store/apps/details?id=com.netmarble.gotasia" },
  { title: "몬길: STAR DIVE", genre: "RPG", image: "images/mg_pclist.jpg", colors: ["#0f2027", "#2c5364"], url: "https://play.google.com/store/apps/details?id=com.netmarble.monster2" },
  { title: "일곱 개의 대죄: Origin", genre: "RPG", image: "images/7dso_mobile_subnail.png", colors: ["#f857a6", "#ff5858"], url: "https://play.google.com/store/apps/details?id=com.netmarble.nanaori" },
];

const PC_GAMES = [
  { title: "일곱 개의 대죄: Origin", genre: "멀티형 오픈월드 RPG", image: "images/p-11.png", colors: ["#c31432", "#240b36"], url: "https://7origin.netmarble.com/ko?utm_source=potal&utm_medium=list&utm_campaign=7origin&utm_id=potal_list_7origin" },
  { title: "나 혼자만 레벨업:", genre: "멀티형 오픈월드", image: "images/p-10.png", colors: ["#1a2a6c", "#b21f1f"], url: "https://slvariseoverdrive.netmarble.com/ko?utm_source=potal&utm_medium=list&utm_campaign=sololvcs&utm_id=potal_list_sololvcs" },
  { title: "마구마구", genre: "", image: "images/p-1.png", colors: ["#232526", "#414345"], "https://ma9.netmarble.net/main.asp?utm_source=potal&utm_medium=list&utm_campaign=ma9&utm_id=potal_list_ma9" },
];

