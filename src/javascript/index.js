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
const container = document.getElementById("manga-container");
mangalist.forEach(manga => {
  const mangaCard = document.createElement("a");
  mangaCard.href = `mangaDetails.html?id=${manga.id}`;
  mangaCard.classList.add("manga-card");
  mangaCard.innerHTML = `
    <div class="relative h-[150px] w-[120px] bg-gray-300 flex-shrink-0 rounded-lg flex flex-col justify-end">
      <img
        src="${manga.coverImage}"
        alt="${manga.title} Cover"
        class="h-[150px] w-[120px] flex-shrink-0 rounded-lg border object-cover absolute top-0 left-0"
      />
      <h2 class="w-[90%] mb-2 mx-1.5 font-inter text-[16px] font-bold line-clamp-2 z-10 bg-opacity-50 bg-gray-500 p-2 rounded ">
        ${manga.title}
      </h2>
    </div>
  `;
  container.appendChild(mangaCard);
});

const carouselContainer = document.getElementById("carousel-inner");
// Clear existing carousel items
carouselContainer.innerHTML = "";

mangalist.forEach(carouselManga => {
  const carouselItem = document.createElement("div");
  carouselItem.classList.add("img-carousel");
  carouselItem.classList.add(`img${carouselManga.id}`);
  carouselItem.classList.add(
    "h-[300px]",
    "w-full",
    "flex-shrink-0",
    "relative"
  );
  carouselItem.style.cursor = "pointer";
  carouselItem.innerHTML = `
    <img
      src="${carouselManga.coverImage.replace("120x180", "400x300")}"
      alt="${carouselManga.title}"
      class="w-full h-full object-cover rounded-lg"
    />
    <h1
      class="absolute top-[80%] w-[95%] flex mx-[10px] font-inter text-[24px] font-bold text-black drop-shadow-lg bg-opacity-50 bg-gray-300 p-2 rounded "
    >
      ${carouselManga.title}
    </h1>
  `;

  // Add click event to navigate to details page
  carouselItem.addEventListener("click", () => {
    window.location.href = `mangaDetails.html?id=${carouselManga.id}`;
  });

  carouselContainer.appendChild(carouselItem);
});
