"use strict";
const mangalist = [
  {
    id: 1,
    title: "One Piece",
    author: "Eiichiro Oda",
    description:
      "A young pirate named Monkey D. Luffy sets out to find the ultimate treasure known as the One Piece.",
    rating: 4.8,
    coverImage: "assets/img/one-piece.jfif",
  },
  {
    id: 2,
    title: "Naruto",
    author: "Masashi Kishimoto",
    description:
      "A young ninja named Naruto Uzumaki seeks recognition and dreams of becoming the Hokage.",
    rating: 4.5,
    coverImage: "assets/img/naruto.jfif",
  },
  {
    id: 3,
    title: "Attack on Titan",
    author: "Hajime Isayama",
    description:
      "A young boy named Eren Yeager joins the military to fight against giant humanoid Titans.",
    rating: 4.7,
    coverImage: "assets/img/attack-on-titan.jfif",
  },
  {
    id: 4,
    title: "My Hero Academia",
    author: "Kohei Horikoshi",
    description:
      "In a world where people have superpowers, a boy named Izuku Midoriya dreams of becoming a hero.",
    rating: 4.6,
    coverImage: "assets/img/my-hero-academia.jfif",
  },
  {
    id: 5,
    title: "Demon Slayer",
    author: "Koyoharu Gotouge",
    description:
      "A young boy named Tanjiro Kamado becomes a demon slayer to avenge his family and save his sister.",
    rating: 4.7,
    coverImage: "assets/img/Demonslayer.jfif",
  },
];
const container = document.getElementById("trendin-manga-container");

mangalist.forEach(manga => {
  const mangaCard = document.createElement("a");
  mangaCard.href = `mangaDetails.html?id=${manga.id}`;
  mangaCard.classList.add("manga-card");
  mangaCard.innerHTML = `
    <div class="h-[150px] w-full flex-shrink-0 rounded-lg flex">
              <img
                src="${manga.coverImage}"
                alt="${manga.title} Cover"
                class="h-[150px] w-[120px] flex-shrink-0 rounded-lg border object-cover"
              />
              <div
                class="mx-1.5 font-inter text-[16px] font-bold line-clamp-2 z-10 bg-opacity-50 bg-gray-500 p-2 rounded w-[250px] h-auto py-3 justify-center px-2 flex flex-col"
              >
                <h3 class="font-orbitron font-medium text-[24px] line-clamp-2">
                  ${manga.title}
                </h3>
                <h3 class="font-inter font-medium text-[16px] line-clamp-2">
                  Author: ${manga.author}
                </h3>
                <h3 class="font-inter font-medium text-[16px] line-clamp-2">
                  Description: ${manga.description}
                </h3>
              </div>
            </div>
  `;
  container.appendChild(mangaCard);
});
const topRated = document.getElementById("top-rated-container");

mangalist.forEach(topRatedManga => {
  const topRatedMangaCard = document.createElement("a");
  topRatedMangaCard.href = `mangaDetails.html?id=${topRatedManga.id}`;
  topRatedMangaCard.innerHTML = `
  <div class="h-[150px] w-full flex-shrink-0 rounded-lg flex">
              <img
                src="${topRatedManga.coverImage}"
                alt="${topRatedManga.title} Cover"
                class="h-[150px] w-[120px] flex-shrink-0 rounded-lg border object-cover"
              />
              <div
                class="mx-1.5 font-inter text-[16px] font-bold line-clamp-2 z-10 bg-opacity-50 bg-gray-500 p-2 rounded w-[250px] h-auto py-3 justify-center px-2 flex flex-col"
              >
                <h3 class="font-orbitron font-medium text-[24px] line-clamp-2">
                  ${topRatedManga.title}
                </h3>
                <h3 class="font-inter font-medium text-[16px] line-clamp-2">
                  Author: ${topRatedManga.author}
                </h3>
                <h3 class="font-inter font-medium text-[16px] line-clamp-2">
                  Description: ${topRatedManga.description}
                </h3>
              </div>
            </div>
  `;
  topRated.appendChild(topRatedMangaCard);
});
const carousel = document.getElementById("carousel-page");
const trendingBtn = document.getElementById("trending-btn");
const topRatedBtn = document.getElementById("top-rated-btn");

trendingBtn.addEventListener("click", () => {
  carousel.style.transform = "translateX(0)";
  trendingBtn.classList.add("bg-opacity-100");
});

topRatedBtn.addEventListener("click", () => {
  carousel.style.transform = "translateX(-100%)";
});
