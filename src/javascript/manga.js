const mangalist = [
  {
    id: 5,
    title: "One Piece",
    description:
      "A young pirate named Monkey D. Luffy sets out to find the ultimate treasure known as the One Piece.",
    rating: 4.8,
    coverImage:
      "https://via.placeholder.com/120x180/FF6B6B/FFFFFF?text=One+Piece",
  },
  {
    id: 6,
    title: "Naruto",
    description:
      "A young ninja named Naruto Uzumaki seeks recognition and dreams of becoming the Hokage.",
    rating: 4.5,
    coverImage: "https://via.placeholder.com/120x180/4ECDC4/FFFFFF?text=Naruto",
  },
  {
    id: 7,
    title: "Attack on Titan",
    description:
      "A young boy named Eren Yeager joins the military to fight against giant humanoid Titans.",
    rating: 4.7,
    coverImage: "https://via.placeholder.com/120x180/45B7D1/FFFFFF?text=Attack",
  },
  {
    id: 8,
    title: "My Hero Academia",
    description:
      "In a world where people have superpowers, a boy named Izuku Midoriya dreams of becoming a hero.",
    rating: 4.6,
    coverImage:
      "https://via.placeholder.com/120x180/F7DC6F/FFFFFF?text=Hero+Aca",
  },
];
const topRated = document.getElementById("top-rated-manga");
mangalist.forEach(topRatedManga => {
  const topRatedMangaCard = document.createElement("a");
  topRatedMangaCard.href = `mangaDetails.html?id=${topRatedManga.id}`;
  topRatedMangaCard.innerHTML = `
  <div class="relative h-[150px] w-[120px] bg-gray-300 flex-shrink-0 rounded-lg flex flex-col justify-end">
      <img
        src="${topRatedManga.coverImage}"
        alt="${topRatedManga.title} Cover"
        class="h-[150px] w-[120px] flex-shrink-0 rounded-lg border object-cover absolute top-0 left-0"
      />
      <h2 class="w-[90%] mb-2 mx-1.5 font-inter text-[16px] font-bold line-clamp-2 z-10 bg-opacity-50 bg-gray-500 p-2 rounded ">
        ${topRatedManga.title}
      </h2>
    </div>
  `;
  topRated.appendChild(topRatedMangaCard);
});
