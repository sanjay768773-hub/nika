const animeData = [
  {
    title: "Demon Slayer",
    category: "Trending",
    genre: "Action",
    language: "Japanese",
    year: "2019",
    rating: "9.0",
    image: "https://image.tmdb.org/t/p/w500/1rWv5pZ2nYfK4Z2nYq4X5F9f2hQ.jpg",
    description: "A determined young hero enters a dangerous world to protect the people he loves.",
    tags: ["Action", "Fantasy", "Japanese"]
  },
  {
    title: "Your Name",
    category: "Popular",
    genre: "Romance",
    language: "Japanese",
    year: "2016",
    rating: "8.8",
    image: "https://image.tmdb.org/t/p/w500/q719jXXEzOoYaps6babgKnONONX.jpg",
    description: "Two strangers discover a mysterious connection that reaches across time and distance.",
    tags: ["Romance", "Drama", "Japanese"]
  },
  {
    title: "Suzume",
    category: "New",
    genre: "Adventure",
    language: "Japanese",
    year: "2022",
    rating: "8.4",
    image: "https://image.tmdb.org/t/p/w500/5Zl6ZqS9kV0m2gW6rYx2mJ8s9eQ.jpg",
    description: "A young girl travels through beautiful landscapes to close mysterious doors of disaster.",
    tags: ["Adventure", "Fantasy", "Japanese"]
  },
  {
    title: "Jujutsu Kaisen",
    category: "Trending",
    genre: "Action",
    language: "Japanese",
    year: "2020",
    rating: "8.7",
    image: "https://image.tmdb.org/t/p/w500/hFWP5HkbVEeV5R2nM2v7jWc5SxN.jpg",
    description: "A student joins a secret world of supernatural battles and impossible choices.",
    tags: ["Action", "Supernatural", "Japanese"]
  },
  {
    title: "A Silent Voice",
    category: "Popular",
    genre: "Romance",
    language: "Japanese",
    year: "2016",
    rating: "8.9",
    image: "https://image.tmdb.org/t/p/w500/tuFaWiqX0TXoWu7DGNcmX3UW7sF.jpg",
    description: "A moving story about regret, friendship, healing, and learning to listen.",
    tags: ["Romance", "Drama", "Japanese"]
  },
  {
    title: "Blue Lock",
    category: "New",
    genre: "Action",
    language: "Japanese",
    year: "2022",
    rating: "8.2",
    image: "https://image.tmdb.org/t/p/w500/2eK9f1tK6v4L8u7c4mJ5q3xZ9sN.jpg",
    description: "Young football players compete in an intense program designed to create a striker.",
    tags: ["Sports", "Action", "Japanese"]
  },
  {
    title: "Spirited Away",
    category: "Popular",
    genre: "Fantasy",
    language: "Japanese",
    year: "2001",
    rating: "9.3",
    image: "https://image.tmdb.org/t/p/w500/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
    description: "A magical coming-of-age journey through a mysterious world of spirits.",
    tags: ["Fantasy", "Adventure", "Japanese"]
  },
  {
    title: "Weathering With You",
    category: "New",
    genre: "Romance",
    language: "Japanese",
    year: "2019",
    rating: "8.5",
    image: "https://image.tmdb.org/t/p/w500/qgrk7r1fV4IjuoeiGS5HOhXNdLJ.jpg",
    description: "A teenage boy meets a girl with a remarkable ability to change the weather.",
    tags: ["Romance", "Fantasy", "Japanese"]
  }
];

const animeGrid = document.getElementById("animeGrid");
const emptyState = document.getElementById("emptyState");
const searchInput = document.getElementById("searchInput");
const searchPanel = document.getElementById("searchPanel");
const animeModal = document.getElementById("animeModal");

let activeFilter = "All";
let watchlist = JSON.parse(localStorage.getItem("nikaSharoList") || "[]");

function renderAnime() {
  const searchTerm = searchInput.value.trim().toLowerCase();

  const filteredAnime = animeData.filter((anime) => {
    const matchesFilter =
      activeFilter === "All" ||
      anime.category === activeFilter ||
      anime.genre === activeFilter;

    const searchableText = [
      anime.title,
      anime.category,
      anime.genre,
      anime.language,
      anime.year,
      ...anime.tags
    ].join(" ").toLowerCase();

    return matchesFilter && searchableText.includes(searchTerm);
  });

  animeGrid.innerHTML = "";

  filteredAnime.forEach((anime) => {
    const card = document.createElement("article");
    card.className = "anime-card";

    card.innerHTML = `
      <div class="anime-poster">
        <img src="${anime.image}" alt="${anime.title} poster" loading="lazy">
        <span class="rating">★ ${anime.rating}</span>
      </div>
      <div class="card-content">
        <h3>${anime.title}</h3>
        <p>${anime.genre} · ${anime.language} · ${anime.year}</p>
        <span>${anime.category}</span>
      </div>
    `;

    card.addEventListener("click", () => openAnimeModal(anime));
    animeGrid.appendChild(card);
  });

  emptyState.style.display = filteredAnime.length ? "none" : "block";
}

function openAnimeModal(anime) {
  document.getElementById("modalImage").src = anime.image;
  document.getElementById("modalImage").alt = anime.title;
  document.getElementById("modalCategory").textContent =
    `${anime.category} · ${anime.year}`;
  document.getElementById("modalTitle").textContent = anime.title;
  document.getElementById("modalDescription").textContent = anime.description;

  document.getElementById("modalTags").innerHTML = anime.tags
    .map((tag) => `<span>${tag}</span>`)
    .join("");

  const modalListButton = document.getElementById("modalListButton");
  const isSaved = watchlist.includes(anime.title);
  modalListButton.textContent = isSaved
    ? "✓ In my list"
    : "＋ Add to my list";

  modalListButton.onclick = () => {
    if (!watchlist.includes(anime.title)) {
      watchlist.push(anime.title);
      localStorage.setItem("nikaSharoList", JSON.stringify(watchlist));
      modalListButton.textContent = "✓ In my list";
    }
  };

  animeModal.classList.add("open");
  animeModal.setAttribute("aria-hidden", "false");
}

function closeModal() {
  animeModal.classList.remove("open");
  animeModal.setAttribute("aria-hidden", "true");
}

document.querySelectorAll(".filter-button").forEach((button) => {
  button.addEventListener("click", () => {
    document
      .querySelectorAll(".filter-button")
      .forEach((item) => item.classList.remove("active"));

    button.classList.add("active");
    activeFilter = button.dataset.filter;
    renderAnime();
  });
});

document.getElementById("searchToggle").addEventListener("click", () => {
  searchPanel.classList.toggle("open");

  if (searchPanel.classList.contains("open")) {
    searchInput.focus();
  }
});

searchInput.addEventListener("input", renderAnime);

document.getElementById("clearSearch").addEventListener("click", () => {
  searchInput.value = "";
  renderAnime();
});

document.getElementById("modalClose").addEventListener("click", closeModal);

animeModal.addEventListener("click", (event) => {
  if (event.target === animeModal) {
    closeModal();
  }
});

document.getElementById("exploreButton").addEventListener("click", () => {
  document.getElementById("discover").scrollIntoView({
    behavior: "smooth"
  });
});

document.getElementById("trailerButton").addEventListener("click", () => {
  alert("Add your official YouTube trailer URL here.");
});

document.getElementById("listButton").addEventListener("click", () => {
  if (!watchlist.length) {
    alert("Your list is empty. Open an anime and click “Add to my list”.");
    return;
  }

  alert(`You have ${watchlist.length} anime in your list.`);
});

document.getElementById("year").textContent = new Date().getFullYear();

renderAnime();
