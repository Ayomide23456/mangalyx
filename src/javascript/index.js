const mangalist = [
  {
    id: 1,
    title: "One Piece",
    description:
      "A young pirate named Monkey D. Luffy sets out to find the ultimate treasure known as the One Piece.",
    rating: 4.8,
    coverImage: "assets/img/One Piece Volume 62.jfif",
  },
  {
    id: 2,
    title: "Naruto",
    description:
      "A young ninja named Naruto Uzumaki seeks recognition and dreams of becoming the Hokage.",
    rating: 4.5,
    coverImage: "assets/img/naruto.jfif",
  },
  {
    id: 3,
    title: "Attack on Titan",
    description:
      "A young boy named Eren Yeager joins the military to fight against giant humanoid Titans.",
    rating: 4.7,
    coverImage: "assets/img/attack-on-titan.jfif",
  },
  {
    id: 4,
    title: "My Hero Academia",
    description:
      "In a world where people have superpowers, a boy named Izuku Midoriya dreams of becoming a hero.",
    rating: 4.6,
    coverImage: "assets/img/my-hero-academia.jfif",
  },
  {
    id: 5,
    title: "Demon Slayer",

    description:
      "A young boy named Tanjiro Kamado becomes a demon slayer to avenge his family and save his sister.",
    rating: 4.7,
    coverImage: "assets/img/Demonslayer.jfif",
  },
];
// const container = document.getElementById("trendin-manga-container");

// mangalist.forEach(manga => {
//   const mangaCard = document.createElement("a");
//   mangaCard.href = `mangaDetails.html?id=${manga.id}`;
//   mangaCard.classList.add("manga-card");
//   mangaCard.innerHTML = `
//     <div class="relative h-[150px] w-[120px] bg-gray-300 flex-shrink-0 rounded-lg flex flex-col justify-end">
//       <img
//         src="${manga.coverImage}"
//         alt="${manga.title} Cover"
//         class="h-[150px] w-[120px] flex-shrink-0 rounded-lg border object-cover absolute top-0 left-0"
//       />
//       <h2 class="w-[90%] mb-2 mx-1.5 font-inter text-[16px] font-bold line-clamp-2 z-10 bg-opacity-50 bg-gray-500 p-2 rounded ">
//         ${manga.title}
//       </h2>
//     </div>
//   `;
//   container.appendChild(mangaCard);
// });
// const topRated = document.getElementById("top-rated-manga");

// mangalist.forEach(topRatedManga => {
//   const topRatedMangaCard = document.createElement("a");
//   topRatedMangaCard.href = `mangaDetails.html?id=${topRatedManga.id}`;
//   topRatedMangaCard.innerHTML = `
//   <div class="relative h-[150px] w-[120px] bg-gray-300 flex-shrink-0 rounded-lg flex flex-col justify-end">
//       <img
//         src="${topRatedManga.coverImage}"
//         alt="${topRatedManga.title} Cover"
//         class="h-[150px] w-[120px] flex-shrink-0 rounded-lg border object-cover absolute top-0 left-0"
//       />
//       <h2 class="w-[90%] mb-2 mx-1.5 font-inter text-[16px] font-bold line-clamp-2 z-10 bg-opacity-50 bg-gray-500 p-2 rounded ">
//         ${topRatedManga.title}
//       </h2>
//     </div>
//   `;
//   topRated.appendChild(topRatedMangaCard);
// });
// const carouselContainer = document.getElementById("carousel-inner");
// carouselContainer.innerHTML = "";

// mangalist.forEach(carouselManga => {
//   const carouselItem = document.createElement("div");
//   carouselItem.classList.add("img-carousel");
//   carouselItem.classList.add(`img${carouselManga.id}`);
//   carouselItem.classList.add(
//     "h-[300px]",
//     "w-full",
//     "flex-shrink-0",
//     "relative"
//   );
//   carouselItem.style.cursor = "pointer";
//   carouselItem.innerHTML = `
//     <img
//       src="${carouselManga.coverImage.replace("120x180", "400x300")}"
//       alt="${carouselManga.title}"
//       class="w-full h-full object-cover rounded-lg"
//     />
//     <h1
//       class="absolute top-[80%] w-[95%] flex mx-[10px] font-inter text-[24px] font-bold text-black drop-shadow-lg bg-opacity-50 bg-gray-300 p-2 rounded "
//     >
//       ${carouselManga.title}
//     </h1>
//   `;

//   // Add click event to navigate to details page
//   carouselItem.addEventListener("click", () => {
//     window.location.href = `mangaDetails.html?id=${carouselManga.id}`;
//   });

//   carouselContainer.appendChild(carouselItem);
// });

// =======================
// API FETCH FUNCTIONS
// =======================

// =======================
// GLOBAL CACHE (IMPORTANT)
// =======================
let cache = {};
let initialized = false;

// =======================
// SAFE FETCH WRAPPER
// =======================
async function safeFetch(url) {
  try {
    if (cache[url]) return cache[url];

    const res = await fetch(url);

    if (!res.ok) {
      console.warn("API blocked:", res.status);
      return { data: [] };
    }

    const data = await res.json();

    cache[url] = data;
    return data;
  } catch (err) {
    console.error("Fetch error:", err);
    return { data: [] };
  }
}

// =======================
// API FUNCTIONS
// =======================

// 🔥 Trending
async function fetchTrendingManga() {
  const data = await safeFetch("https://api.jikan.moe/v4/top/manga");
  return (data.data || []).slice(0, 10);
}

// ⭐ Top Rated
async function fetchTopRatedManga() {
  const data = await safeFetch(
    "https://api.jikan.moe/v4/top/manga?filter=bypopularity"
  );
  return (data.data || []).slice(0, 10);
}

// 🎞️ Carousel
async function fetchCarouselManga() {
  const data = await safeFetch("https://api.jikan.moe/v4/top/manga");
  return (data.data || []).slice(0, 5);
}

// =======================
// FORMATTER
// =======================
function formatJikan(manga) {
  return {
    id: manga.mal_id,
    title: manga.title,
    coverImage:
      manga.images?.jpg?.image_url || "https://via.placeholder.com/300x450",
  };
}

// =======================
// DOM ELEMENTS
// =======================
const container = document.getElementById("trendin-manga-container");
const topRated = document.getElementById("top-rated-manga");
const carouselContainer = document.getElementById("carousel-inner");

// =======================
// CREATE CARD
// =======================
function createMangaCard(manga) {
  return `
    <div class="relative h-[150px] w-[120px] bg-gray-300 flex-shrink-0 rounded-lg flex flex-col justify-end">
      <img
        src="${manga.coverImage}"
        alt="${manga.title}"
        class="h-[150px] w-[120px] rounded-lg border object-cover absolute top-0 left-0"
        loading="lazy"
      />
      <h2 class="w-[90%] mb-2 mx-1.5 text-[16px] font-bold line-clamp-2 z-10 bg-opacity-50 bg-gray-500 p-2 rounded text-white">
        ${manga.title}
      </h2>
    </div>
  `;
}

// =======================
// TRENDING
// =======================
async function loadTrending() {
  container.innerHTML = "";

  const data = await fetchTrendingManga();

  data.map(formatJikan).forEach(manga => {
    const card = document.createElement("a");

    card.href = `mangaDetails.html?id=${manga.id}`;
    card.innerHTML = createMangaCard(manga);

    container.appendChild(card);
  });
}

// =======================
// TOP RATED
// =======================
async function loadTopRated() {
  topRated.innerHTML = "";

  const data = await fetchTopRatedManga();

  data.map(formatJikan).forEach(manga => {
    const card = document.createElement("a");

    card.href = `mangaDetails.html?id=${manga.id}`;
    card.innerHTML = createMangaCard(manga);

    topRated.appendChild(card);
  });
}

// =======================
// CAROUSEL
// =======================
async function loadCarousel() {
  try {
    carouselContainer.innerHTML = "";

    const data = await fetchCarouselManga();
    const formatted = data.map(formatJikan);

    formatted.forEach(manga => {
      const item = document.createElement("div");
      item.classList.add("img-carousel");
        item.classList.add(`img${manga.id}`);
        item.classList.add(
          "h-[300px]",
          "w-full",
          "flex-shrink-0",
          "relative"
        );

      item.innerHTML = `
      
    <img
      src="${manga.coverImage.replace("120x180", "400x300")}"
      alt="${manga.title}"
      class="w-full h-full object-cover rounded-lg"
    />
    <h1
      class="absolute top-[75%] w-[95%] flex mx-[10px] font-inter text-[24px] font-bold text-black drop-shadow-lg bg-opacity-50 px-2 rounded "
    >
      ${manga.title}
    </h1>
  `;

      item.addEventListener("click", () => {
        window.location.href = `mangaDetails.html?id=${manga.id}`;
      });

      carouselContainer.appendChild(item);
    });
  } catch (err) {
    console.error("Carousel failed:", err);
  }
}
// =======================
// INIT (RATE LIMIT SAFE)
// =======================
async function init() {
  if (initialized) return;
  initialized = true;

  try {
    await loadTrending();
    await loadTopRated();
    await loadCarousel();
  } catch (err) {
    console.error("Init error:", err);
  }
}

// =======================
// START APP
// =======================
init();
