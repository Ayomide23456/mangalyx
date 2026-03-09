const mangalist = [
  {
    id: 1,
    title: "One Piece",
    description:
      "A young pirate named Monkey D. Luffy sets out to find the ultimate treasure known as the One Piece.",
    rating: 4.8,
    coverImage:
      "https://via.placeholder.com/120x180/FF6B6B/FFFFFF?text=One+Piece",
  },
  {
    id: 2,
    title: "Naruto",
    description:
      "A young ninja named Naruto Uzumaki seeks recognition and dreams of becoming the Hokage.",
    rating: 4.5,
    coverImage: "https://via.placeholder.com/120x180/4ECDC4/FFFFFF?text=Naruto",
  },
  {
    id: 3,
    title: "Attack on Titan",
    description:
      "A young boy named Eren Yeager joins the military to fight against giant humanoid Titans.",
    rating: 4.7,
    coverImage: "https://via.placeholder.com/120x180/45B7D1/FFFFFF?text=Attack",
  },
  {
    id: 4,
    title: "My Hero Academia",
    description:
      "In a world where people have superpowers, a boy named Izuku Midoriya dreams of becoming a hero.",
    rating: 4.6,
    coverImage:
      "https://via.placeholder.com/120x180/F7DC6F/FFFFFF?text=Hero+Aca",
  },
];
const container = document.getElementById("manga-container");
mangalist.forEach(manga => {
  const mangaCard = document.createElement("a");
  mangaCard.href = `../html/mangaDetails.html?id=${manga.id}`;
  mangaCard.classList.add("manga-card");
  mangaCard.innerHTML = `
    <div class="relative h-[150px] w-[120px] bg-gray-300 flex-shrink-0 rounded-lg flex flex-col justify-end">
      <img
        src="${manga.coverImage}"
        alt="${manga.title} Cover"
        class="h-[150px] w-[120px] flex-shrink-0 rounded-lg border object-cover absolute top-0 left-0"
      />
      <h2 class="w-full mb-2 mx-1.5 font-inter text-[14px] font-medium z-50">
        ${manga.title}
      </h2>
    </div>
  `;
  container.appendChild(mangaCard);
});
