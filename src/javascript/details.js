// Import manga list - reuse the same data
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

// Get manga ID from URL
const urlParams = new URLSearchParams(window.location.search);
const mangaId = parseInt(urlParams.get("id")) || 1;

// Find the manga
const manga = mangalist.find(m => m.id === mangaId);

document.addEventListener("DOMContentLoaded", () => {
  if (manga) {
    // Update the carousel section
    const mangaCard = document.getElementById("manga-cover");
    const descriptionParagraph = document.querySelector(".collapsible p");
    const mangaInfo = document.getElementById("manga-info");

    if (mangaCard) {
      mangaCard.src = manga.coverImage;
      mangaCard.alt = manga.title;
    }

    if (mangaInfo) {
      mangaInfo.innerHTML = `
        <h3 class="font-inter font-medium line-clamp-2">
          ${manga.title}
        </h3>
        <h3 class="font-inter font-medium line-clamp-2">
          Author: ${manga.author}
        </h3>
        <h3 class="font-inter font-medium">Rating: ${manga.rating} <i class="bi bi-star-fill text-[#FFDF00]"></i></h3>
      `;
    }

    if (descriptionParagraph) {
      descriptionParagraph.textContent = manga.description;
    }

    // Heart toggle functionality
    const heartIcon = document.getElementById("manga-heart");
    if (heartIcon) {
      heartIcon.addEventListener("click", function () {
        this.classList.toggle("text-white");
        this.classList.toggle("text-red-500");
      });
    }
  }
});
