```javascript
/* =========================================================
   NIKA SHARO — ANIME UNIVERSE
   Tamil-first anime discovery + watch interface
   ========================================================= */


/* ---------------------------------------------------------
   ANIME DATA
   --------------------------------------------------------- */

const animeData = [
  {
    id: 1,
    title: "Demon Slayer",
    tamilTitle: "டீமன் ஸ்லேயர்",
    category: "Trending",
    genre: "Action",
    language: "Japanese",

    year: "2019",
    rating: "9.0",

    image:
      "https://image.tmdb.org/t/p/w500/1rWv5pZ2nYfK4Z2nYq4X5F9f2hQ.jpg",

    description:
      "தன் குடும்பத்தைப் பாதுகாக்க ஒரு இளைஞன் ஆபத்தான உலகிற்குள் நுழைந்து, அரக்கர்களுக்கு எதிராக போராடத் தொடங்குகிறான்.",

    descriptionEn:
      "A determined young hero enters a dangerous world to protect the people he loves.",

    tags: [
      "Action",
      "Fantasy",
      "Japanese"
    ],

    tamilAudio: true,
    tamilSubtitle: true,

    episodes: [
      {
        title: "Episode 1",
        videoUrl:
          "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      },
      {
        title: "Episode 2",
        videoUrl:
          "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      },
      {
        title: "Episode 3",
        videoUrl:
          "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      }
    ]
  },

  {
    id: 2,
    title: "Your Name",
    tamilTitle: "யுவர் நேம்",
    category: "Popular",
    genre: "Romance",
    language: "Japanese",

    year: "2016",
    rating: "8.8",

    image:
      "https://image.tmdb.org/t/p/w500/q719jXXEzOoYaps6babgKnONONX.jpg",

    description:
      "காலத்தையும் தூரத்தையும் கடந்து இரண்டு அந்நியர்களை இணைக்கும் ஒரு மர்மமான உறவின் அழகான காதல் கதை.",

    descriptionEn:
      "Two strangers discover a mysterious connection that reaches across time and distance.",

    tags: [
      "Romance",
      "Drama",
      "Japanese"
    ],

    tamilAudio: false,
    tamilSubtitle: true,

    episodes: [
      {
        title: "Movie",
        videoUrl:
          "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      }
    ]
  },

  {
    id: 3,
    title: "Suzume",
    tamilTitle: "சுசுமே",
    category: "New",
    genre: "Fantasy",

    language: "Japanese",

    year: "2022",
    rating: "8.4",

    image:
      "https://image.tmdb.org/t/p/w500/5Zl6ZqS9kV0m2gW6rYx2mJ8s9eQ.jpg",

    description:
      "மர்மமான கதவுகளால் ஏற்படும் பேரழிவைத் தடுக்க ஒரு இளம் பெண் அழகான உலகங்களைக் கடந்து பயணம் செய்கிறாள்.",

    descriptionEn:
      "A young girl travels through beautiful landscapes to close mysterious doors of disaster.",

    tags: [
      "Adventure",
      "Fantasy",
      "Japanese"
    ],

    tamilAudio: true,
    tamilSubtitle: true,

    episodes: [
      {
        title: "Movie",
        videoUrl:
          "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      }
    ]
  },

  {
    id: 4,
    title: "Jujutsu Kaisen",
    tamilTitle: "ஜுஜுட்சு கைசென்",
    category: "Trending",
    genre: "Action",

    language: "Japanese",

    year: "2020",
    rating: "8.7",

    image:
      "https://image.tmdb.org/t/p/w500/hFWP5HkbVEeV5R2nM2v7jWc5SxN.jpg",

    description:
      "ஒரு மாணவன் மர்மமான சாபங்களும், அதீத சக்திகளும் நிறைந்த ரகசிய உலகிற்குள் நுழைகிறான்.",

    descriptionEn:
      "A student joins a secret world of supernatural battles and impossible choices.",

    tags: [
      "Action",
      "Supernatural",
      "Japanese"
    ],

    tamilAudio: true,
    tamilSubtitle: true,

    episodes: [
      {
        title: "Episode 1",
        videoUrl:
          "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      },
      {
        title: "Episode 2",
        videoUrl:
          "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      }
    ]
  },

  {
    id: 5,
    title: "A Silent Voice",
    tamilTitle: "எ சைலன்ட் வாய்ஸ்",
    category: "Popular",
    genre: "Romance",

    language: "Japanese",

    year: "2016",
    rating: "8.9",

    image:
      "https://image.tmdb.org/t/p/w500/tuFaWiqX0TXoWu7DGNcmX3UW7sF.jpg",

    description:
      "வருத்தம், நட்பு, மனமாற்றம் மற்றும் ஒருவரை ஒருவர் உண்மையாகக் கேட்பது பற்றிய மனதைத் தொடும் கதை.",

    descriptionEn:
      "A moving story about regret, friendship, healing, and learning to listen.",

    tags: [
      "Romance",
      "Drama",
      "Japanese"
    ],

    tamilAudio: true,
    tamilSubtitle: true,

    episodes: [
      {
        title: "Movie",
        videoUrl:
          "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      }
    ]
  },

  {
    id: 6,
    title: "Blue Lock",
    tamilTitle: "ப்ளூ லாக்",
    category: "New",
    genre: "Action",

    language: "Japanese",

    year: "2022",
    rating: "8.2",

    image:
      "https://image.tmdb.org/t/p/w500/2eK9f1tK6v4L8u7c4mJ5q3xZ9sN.jpg",

    description:
      "உலகின் சிறந்த striker-ஐ உருவாக்கும் தீவிரமான football பயிற்சி திட்டத்தில் இளம் வீரர்கள் போட்டியிடுகிறார்கள்.",

    descriptionEn:
      "Young football players compete in an intense program designed to create a striker.",

    tags: [
      "Sports",
      "Action",
      "Japanese"
    ],

    tamilAudio: false,
    tamilSubtitle: true,

    episodes: [
      {
        title: "Episode 1",
        videoUrl:
          "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      },
      {
        title: "Episode 2",
        videoUrl:
          "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      }
    ]
  },

  {
    id: 7,
    title: "Spirited Away",
    tamilTitle: "ஸ்பிரிட்டட் அவே",
    category: "Popular",
    genre: "Fantasy",

    language: "Japanese",

    year: "2001",
    rating: "9.3",

    image:
      "https://image.tmdb.org/t/p/w500/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",

    description:
      "ஆவிகள் நிறைந்த மர்மமான உலகிற்குள் செல்லும் ஒரு சிறுமியின் மாயமான வளர்ச்சிப் பயணம்.",

    descriptionEn:
      "A magical coming-of-age journey through a mysterious world of spirits.",

    tags: [
      "Fantasy",
      "Adventure",
      "Japanese"
    ],

    tamilAudio: true,
    tamilSubtitle: true,

    episodes: [
      {
        title: "Movie",
        videoUrl:
          "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      }
    ]
  },

  {
    id: 8,
    title: "Weathering With You",
    tamilTitle: "வெதரிங் வித் யூ",
    category: "New",
    genre: "Romance",

    language: "Japanese",

    year: "2019",
    rating: "8.5",

    image:
      "https://image.tmdb.org/t/p/w500/qgrk7r1fV4IjuoeiGS5HOhXNdLJ.jpg",

    description:
      "வானிலையை மாற்றும் அற்புதமான சக்தி கொண்ட ஒரு பெண்ணை ஒரு இளைஞன் சந்திக்கிறான்.",

    descriptionEn:
      "A teenage boy meets a girl with a remarkable ability to change the weather.",

    tags: [
      "Romance",
      "Fantasy",
      "Japanese"
    ],

    tamilAudio: true,
    tamilSubtitle: true,

    episodes: [
      {
        title: "Movie",
        videoUrl:
          "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      }
    ]
  },

  {
    id: 9,
    title: "My Hero Academia",
    tamilTitle: "மை ஹீரோ அகாடமியா",
    category: "Trending",
    genre: "Action",

    language: "Japanese",

    year: "2016",
    rating: "8.5",

    image:
      "https://image.tmdb.org/t/p/w500/iv0f8sYk5Y9yT4Z5zL8L3K6vR3Y.jpg",

    description:
      "சக்திகள் நிறைந்த உலகில் ஒரு சாதாரண சிறுவன் உண்மையான ஹீரோவாக மாறும் கனவைத் தொடர்கிறான்.",

    descriptionEn:
      "In a world filled with superpowers, a young boy follows his dream of becoming a true hero.",

    tags: [
      "Action",
      "Superhero",
      "Japanese"
    ],

    tamilAudio: true,
    tamilSubtitle: true,

    episodes: [
      {
        title: "Episode 1",
        videoUrl:
          "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      }
    ]
  },

  {
    id: 10,
    title: "Spy x Family",
    tamilTitle: "ஸ்பை x ஃபேமிலி",
    category: "Popular",
    genre: "Comedy",

    language: "Japanese",

    year: "2022",
    rating: "8.6",

    image:
      "https://image.tmdb.org/t/p/w500/3r4LYFuXrg3L6T7q0s7P5L5v9hQ.jpg",

    description:
      "ஒரு உளவாளி, ஒரு assassin மற்றும் ஒரு மனதைப் படிக்கும் குழந்தை ஒரு போலி குடும்பமாக இணைகிறார்கள்.",

    descriptionEn:
      "A spy, an assassin, and a telepathic child form an unlikely fake family.",

    tags: [
      "Comedy",
      "Action",
      "Japanese"
    ],

    tamilAudio: true,
    tamilSubtitle: true,

    episodes: [
      {
        title: "Episode 1",
        videoUrl:
          "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      },
      {
        title: "Episode 2",
        videoUrl:
          "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      }
    ]
  }
];


/* ---------------------------------------------------------
   TRANSLATIONS
   --------------------------------------------------------- */

const translations = {

  ta: {
    navHome: "முகப்பு",
    navDiscover: "கண்டறியுங்கள்",
    navGenres: "வகைகள்",
    navList: "எனது பட்டியல்",

    heroEyebrow: "✦ உங்கள் anime உலகம்",
    heroLineOne: "மனதில்",
    heroLineTwo: "நிலைக்கும் கதைகள்.",

    heroText:
      "அழகான உலகங்கள், மறக்க முடியாத கதாபாத்திரங்கள் மற்றும் உங்களுக்குப் பிடித்த anime-களை ஒரே இடத்தில் கண்டறியுங்கள்.",

    explore: "இப்போது பார்க்கலாம்",
    trailer: "முன்னோட்டம்",

    titles: "Anime",
    languages: "மொழிகள்",
    adventures: "சாகசங்கள்",

    featured: "சிறப்பு தேர்வு",

    curated: "உங்களுக்காக தேர்ந்தெடுக்கப்பட்டது",
    findWorld: "அடுத்த உலகத்தை கண்டறியுங்கள்",

    viewAll: "அனைத்தையும் பார்க்க",
    clear: "அழி",

    all: "அனைத்தும்",
    trending: "பிரபலமாகும்",
    popular: "பிரபலமானவை",
    new: "புதியவை",
    romance: "காதல்",
    action: "ஆக்ஷன்",
    fantasy: "Fantasy",
    comedy: "நகைச்சுவை",

    madeEveryone: "அனைவருக்காகவும்",
    watchYourWay: "உங்கள் மொழியில் பாருங்கள்",

    personalShelf: "உங்கள் தனிப்பட்ட பட்டியல்",
    keepFavorite: "பிடித்த anime-களை அருகில் வைத்திருங்கள்.",

    watchlistText:
      "உங்களுக்குப் பிடித்த anime-களை பட்டியலில் சேர்த்து, எப்போது வேண்டுமானாலும் மீண்டும் பாருங்கள்.",

    openList: "எனது பட்டியலைத் திற",

    watchNow: "இப்போது பார்க்க",
    addList: "பட்டியலில் சேர்",

    trailerTitle: "Nika Sharo-க்கு வரவேற்கிறோம்",
    trailerText:
      "Anime உலகத்தை ஆராயுங்கள், உங்களுக்குப் பிடித்த கதைகளைத் தேர்வு செய்யுங்கள்.",

    footerText:
      "கனவு காண்பவர்கள், பயணிகள் மற்றும் anime ரசிகர்களுக்காக.",

    animeDreamer: "Anime ரசிகர்",

    empty:
      "Anime எதுவும் கிடைக்கவில்லை. வேறு தேடலை முயற்சிக்கவும்.",

    listEmpty:
      "உங்கள் பட்டியல் இன்னும் காலியாக உள்ளது.",

    addSuccess:
      "Anime உங்கள் பட்டியலில் சேர்க்கப்பட்டது.",

    removeSuccess:
      "Anime உங்கள் பட்டியலில் இருந்து நீக்கப்பட்டது.",

    alreadyList:
      "இந்த anime ஏற்கனவே உங்கள் பட்டியலில் உள்ளது.",

    playerNote:
      "வீடியோ playback source உங்கள் சட்டபூர்வமான streaming/video URL-ஐ பயன்படுத்தும்.",

    tamilAudio: "தமிழ் Audio",
    tamilSubtitle: "தமிழ் Subtitle",

    languageSelected: "மொழி தேர்வு செய்யப்பட்டது:",

    noLanguageAnime:
      "இந்த மொழியில் anime எதுவும் கிடைக்கவில்லை.",

    listCount: "பட்டியல்"
  },


  en: {
    navHome: "Home",
    navDiscover: "Discover",
    navGenres: "Genres",
    navList: "My List",

    heroEyebrow: "✦ Your anime universe",
    heroLineOne: "Stories",
    heroLineTwo: "that stay with you.",

    heroText:
      "Discover beautiful worlds, unforgettable characters, and your favorite anime in one peaceful space.",

    explore: "Explore now",
    trailer: "Watch trailer",

    titles: "titles",
    languages: "languages",
    adventures: "adventures",

    featured: "Featured story",

    curated: "Curated for you",
    findWorld: "Find your next world",

    viewAll: "View all",
    clear: "Clear",

    all: "All",
    trending: "Trending",
    popular: "Popular",
    new: "New releases",
    romance: "Romance",
    action: "Action",
    fantasy: "Fantasy",
    comedy: "Comedy",

    madeEveryone: "Made for everyone",
    watchYourWay: "Watch your way",

    personalShelf: "Your personal shelf",
    keepFavorite: "Keep every favorite close.",

    watchlistText:
      "Add anime to your list and come back whenever inspiration strikes.",

    openList: "Open my list",

    watchNow: "Watch now",
    addList: "Add to my list",

    trailerTitle: "Welcome to Nika Sharo",
    trailerText:
      "Explore anime worlds and choose stories that stay with you.",

    footerText:
      "Made for dreamers, explorers, and anime lovers.",

    animeDreamer: "Anime lover",

    empty:
      "No anime found. Try another search.",

    listEmpty:
      "Your list is empty.",

    addSuccess:
      "Anime added to your list.",

    removeSuccess:
      "Anime removed from your list.",

    alreadyList:
      "This anime is already in your list.",

    playerNote:
      "The video player uses your legally hosted streaming/video URL.",

    tamilAudio: "Tamil Audio",
    tamilSubtitle: "Tamil Subtitle",

    languageSelected: "Language selected:",

    noLanguageAnime:
      "No anime found for this language.",

    listCount: "List"
  }
};


/* ---------------------------------------------------------
   STATE
   --------------------------------------------------------- */

const state = {
  language:
    localStorage.getItem("nikaSharoLanguage") || "ta",

  activeFilter: "All",

  selectedLanguage: null,

  selectedAnime: null,

  currentEpisode: 0,

  watchlist:
    JSON.parse(
      localStorage.getItem("nikaSharoList") || "[]"
    )
};


/* ---------------------------------------------------------
   DOM
   --------------------------------------------------------- */

const animeGrid =
  document.getElementById("animeGrid");

const emptyState =
  document.getElementById("emptyState");

const searchInput =
  document.getElementById("searchInput");

const searchPanel =
  document.getElementById("searchPanel");

const animeModal =
  document.getElementById("animeModal");

const playerModal =
  document.getElementById("playerModal");

const trailerModal =
  document.getElementById("trailerModal");

const profileMenu =
  document.getElementById("profileMenu");

const watchlistGrid =
  document.getElementById("watchlistGrid");

const toast =
  document.getElementById("toast");

const animePlayer =
  document.getElementById("animePlayer");

const videoSource =
  document.getElementById("videoSource");

const episodeSelect =
  document.getElementById("episodeSelect");


/* ---------------------------------------------------------
   HELPERS
   --------------------------------------------------------- */

function t(key) {
  return (
    translations[state.language][key] ||
    translations.ta[key] ||
    key
  );
}


function saveState() {
  localStorage.setItem(
    "nikaSharoList",
    JSON.stringify(state.watchlist)
  );
}


function getAnime(id) {
  return animeData.find(
    (anime) => anime.id === Number(id)
  );
}


function isSaved(anime) {
  return state.watchlist.includes(anime.id);
}


function showToast(message) {
  toast.textContent = message;

  toast.classList.add("show");

  clearTimeout(showToast.timer);

  showToast.timer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2600);
}


function setBodyModalState() {
  const open =
    document.querySelectorAll(".modal.open").length > 0;

  document.body.classList.toggle(
    "modal-open",
    open
  );
}


/* ---------------------------------------------------------
   TRANSLATE UI
   --------------------------------------------------------- */

function applyTranslations() {

  document.documentElement.lang =
    state.language === "ta"
      ? "ta"
      : "en";

  document
    .querySelectorAll("[data-i18n]")
    .forEach((element) => {

      const key =
        element.dataset.i18n;

      if (translations[state.language][key]) {
        element.textContent =
          translations[state.language][key];
      }
    });


  searchInput.placeholder =
    state.language === "ta"
      ? "Anime, கதாபாத்திரம் அல்லது வகையைத் தேடுங்கள்..."
      : "Search anime, characters, or genres...";


  emptyState.textContent =
    t("empty");


  document.getElementById(
    "languageToggle"
  ).innerHTML =
    state.language === "ta"
      ? "<span>A</span><small>EN</small>"
      : "<span>அ</span><small>தமிழ்</small>";
}


/* ---------------------------------------------------------
   LANGUAGE TOGGLE
   --------------------------------------------------------- */

document
  .getElementById("languageToggle")
  .addEventListener("click", () => {

    state.language =
      state.language === "ta"
        ? "en"
        : "ta";

    localStorage.setItem(
      "nikaSharoLanguage",
      state.language
    );

    applyTranslations();

    renderAnime();

    renderWatchlist();

    if (state.selectedAnime) {
      populateAnimeModal(
        state.selectedAnime
      );
    }

    showToast(
      state.language === "ta"
        ? "தமிழ் மொழி தேர்வு செய்யப்பட்டது."
        : "English selected."
    );
  });


/* ---------------------------------------------------------
   IMAGE FALLBACK
   --------------------------------------------------------- */

function createImageFallback(img, title) {

  const fallback =
    document.createElement("div");

  fallback.className =
    "poster-fallback";

  fallback.innerHTML =
    `<span>${title}</span>`;

  img.replaceWith(fallback);
}


/* ---------------------------------------------------------
   RENDER ANIME
   --------------------------------------------------------- */

function renderAnime() {

  const searchTerm =
    searchInput.value
      .trim()
      .toLowerCase();


  const filteredAnime =
    animeData.filter((anime) => {

      const matchesFilter =
        state.activeFilter === "All" ||
        anime.category === state.activeFilter ||
        anime.genre === state.activeFilter;


      const matchesLanguage =
        !state.selectedLanguage ||
        anime.language === state.selectedLanguage;


      const searchableText = [
        anime.title,
        anime.tamilTitle,
        anime.category,
        anime.genre,
        anime.language,
        anime.year,
        ...anime.tags
      ]
        .join(" ")
        .toLowerCase();


      const matchesSearch =
        searchableText.includes(
          searchTerm
        );


      return (
        matchesFilter &&
        matchesLanguage &&
        matchesSearch
      );
    });


  animeGrid.innerHTML = "";


  filteredAnime.forEach((anime) => {

    const card =
      document.createElement("article");

    card.className =
      "anime-card";

    card.dataset.id =
      anime.id;


    const saved =
      isSaved(anime);


    const displayTitle =
      state.language === "ta"
        ? anime.tamilTitle
        : anime.title;


    card.innerHTML = `
      <div class="anime-poster">

        <img
          src="${anime.image}"
          alt="${displayTitle}"
          loading="lazy"
        />

        <span class="rating">
          ★ ${anime.rating}
        </span>

        <span class="card-language">
          ${anime.tamilAudio ? "தமிழ்" : "SUB"}
        </span>

      </div>

      <div class="card-content">

        <h3>${displayTitle}</h3>

        <p>
          ${anime.genre}
          ·
          ${anime.language}
          ·
          ${anime.year}
        </p>

        <div class="card-bottom">

          <span>
            ${anime.category}
          </span>

          <button
            class="card-list-button ${saved ? "saved" : ""}"
            data-list-id="${anime.id}"
            aria-label="${
              saved
                ? "Remove from list"
                : "Add to list"
            }"
          >
            ${saved ? "✓" : "+"}
          </button>

        </div>

      </div>
    `;


    const image =
      card.querySelector("img");


    image.addEventListener(
      "error",
      () => {
        createImageFallback(
          image,
          displayTitle
        );
      },
      { once: true }
    );


    card.addEventListener(
      "click",
      (event) => {

        if (
          event.target.closest(
            ".card-list-button"
          )
        ) {
          return;
        }

        openAnimeModal(anime);
      }
    );


    const listButton =
      card.querySelector(
        ".card-list-button"
      );


    listButton.addEventListener(
      "click",
      (event) => {

        event.stopPropagation();

        toggleWatchlist(anime.id);
      }
    );


    animeGrid.appendChild(card);
  });


  emptyState.style.display =
    filteredAnime.length
      ? "none"
      : "block";
}


/* ---------------------------------------------------------
   WATCHLIST
   --------------------------------------------------------- */

function toggleWatchlist(id) {

  const index =
    state.watchlist.indexOf(id);

  const anime =
    getAnime(id);


  if (!anime) return;


  if (index === -1) {

    state.watchlist.push(id);

    showToast(
      state.language === "ta"
        ? `${anime.tamilTitle} ${t("addSuccess")}`
        : `${anime.title} ${t("addSuccess")}`
    );

  } else {

    state.watchlist.splice(
      index,
      1
    );

    showToast(
      state.language === "ta"
        ? `${anime.tamilTitle} ${t("removeSuccess")}`
        : `${anime.title} ${t("removeSuccess")}`
    );
  }


  saveState();

  renderAnime();

  renderWatchlist();

  updateProfileCount();


  if (state.selectedAnime) {

    populateAnimeModal(
      state.selectedAnime
    );
  }
}


function renderWatchlist() {

  watchlistGrid.innerHTML = "";


  const savedAnime =
    state.watchlist
      .map((id) => getAnime(id))
      .filter(Boolean);


  if (!savedAnime.length) {

    watchlistGrid.classList.remove(
      "show"
    );

    return;
  }


  watchlistGrid.classList.add(
    "show"
  );


  savedAnime.forEach((anime) => {

    const card =
      document.createElement("article");

    card.className =
      "anime-card";


    const displayTitle =
      state.language === "ta"
        ? anime.tamilTitle
        : anime.title;


    card.innerHTML = `
      <div class="anime-poster">

        <img
          src="${anime.image}"
          alt="${displayTitle}"
          loading="lazy"
        />

        <span class="rating">
          ★ ${anime.rating}
        </span>

      </div>

      <div class="card-content">

        <h3>${displayTitle}</h3>

        <p>
          ${anime.genre}
          ·
          ${anime.year}
        </p>

        <div class="card-bottom">

          <span>
            ${t("listCount")}
          </span>

          <button
            class="card-list-button saved"
            data-remove-id="${anime.id}"
          >
            ✓
          </button>

        </div>

      </div>
    `;


    const image =
      card.querySelector("img");


    image.addEventListener(
      "error",
      () => {
        createImageFallback(
          image,
          displayTitle
        );
      },
      { once: true }
    );


    card.addEventListener(
      "click",
      (event) => {

        if (
          event.target.closest(
            "[data-remove-id]"
          )
        ) {
          return;
        }

        openAnimeModal(anime);
      }
    );


    card
      .querySelector("[data-remove-id]")
      .addEventListener(
        "click",
        (event) => {

          event.stopPropagation();

          toggleWatchlist(
            anime.id
          );
        }
      );


    watchlistGrid.appendChild(card);
  });
}


/* ---------------------------------------------------------
   ANIME MODAL
   --------------------------------------------------------- */

function populateAnimeModal(anime) {

  state.selectedAnime =
    anime;


  const displayTitle =
    state.language === "ta"
      ? anime.tamilTitle
      : anime.title;


  const description =
    state.language === "ta"
      ? anime.description
      : anime.descriptionEn;


  const modalImage =
    document.getElementById(
      "modalImage"
    );


  modalImage.src =
    anime.image;

  modalImage.alt =
    displayTitle;


  document.getElementById(
    "modalCategory"
  ).textContent =
    `${anime.category} · ${anime.year}`;


  document.getElementById(
    "modalTitle"
  ).textContent =
    displayTitle;


  document.getElementById(
    "modalRating"
  ).textContent =
    anime.rating;


  document.getElementById(
    "modalDescription"
  ).textContent =
    description;


  document.getElementById(
    "modalTags"
  ).innerHTML =
    anime.tags
      .map(
        (tag) =>
          `<span>${tag}</span>`
      )
      .join("");


  const availability =
    document.getElementById(
      "modalAvailability"
    );


  availability.innerHTML = "";


  if (anime.tamilAudio) {

    availability.innerHTML += `
      <span class="availability-badge">
        ✓ ${t("tamilAudio")}
      </span>
    `;
  }


  if (anime.tamilSubtitle) {

    availability.innerHTML += `
      <span class="availability-badge">
        ✓ ${t("tamilSubtitle")}
      </span>
    `;
  }


  const modalListButton =
    document.getElementById(
      "modalListButton"
    );


  if (isSaved(anime)) {

    modalListButton.innerHTML =
      `✓ ${state.language === "ta"
        ? "எனது பட்டியலில் உள்ளது"
        : "In my list"}`;

  } else {

    modalListButton.innerHTML =
      `＋ ${t("addList")}`;
  }
}


function openAnimeModal(anime) {

  populateAnimeModal(anime);

  animeModal.classList.add(
    "open"
  );

  animeModal.setAttribute(
    "aria-hidden",
    "false"
  );

  setBodyModalState();
}


function closeAnimeModal() {

  animeModal.classList.remove(
    "open"
  );

  animeModal.setAttribute(
    "aria-hidden",
    "true"
  );

  setBodyModalState();
}


/* ---------------------------------------------------------
   MODAL BUTTONS
   --------------------------------------------------------- */

document
  .getElementById("modalClose")
  .addEventListener(
    "click",
    closeAnimeModal
  );


animeModal.addEventListener(
  "click",
  (event) => {

    if (
      event.target === animeModal
    ) {
      closeAnimeModal();
    }
  }
);


document
  .getElementById("modalListButton")
  .addEventListener(
    "click",
    () => {

      if (!state.selectedAnime) {
        return;
      }

      toggleWatchlist(
        state.selectedAnime.id
      );
    }
  );


/* ---------------------------------------------------------
   SEARCH
   --------------------------------------------------------- */

document
  .getElementById("searchToggle")
  .addEventListener(
    "click",
    () => {

      searchPanel.classList.toggle(
        "open"
      );

      if (
        searchPanel.classList.contains(
          "open"
        )
      ) {
        searchInput.focus();
      }
    }
  );


searchInput.addEventListener(
  "input",
  renderAnime
);


document
  .getElementById("clearSearch")
  .addEventListener(
    "click",
    () => {

      searchInput.value = "";

      renderAnime();

      searchInput.focus();
    }
  );


/* ---------------------------------------------------------
   FILTERS
   --------------------------------------------------------- */

document
  .querySelectorAll(".filter-button")
  .forEach((button) => {

    button.addEventListener(
      "click",
      () => {

        document
          .querySelectorAll(
            ".filter-button"
          )
          .forEach(
            (item) =>
              item.classList.remove(
                "active"
              )
          );


        button.classList.add(
          "active"
        );


        state.activeFilter =
          button.dataset.filter;


        state.selectedLanguage =
          null;


        document
          .querySelectorAll(
            ".language-card"
          )
          .forEach(
            (card) =>
              card.classList.remove(
                "active"
              )
          );


        renderAnime();
      }
    );
  });


/* ---------------------------------------------------------
   LANGUAGE FILTERS
   --------------------------------------------------------- */

document
  .querySelectorAll(".language-filter")
  .forEach((button) => {

    button.addEventListener(
      "click",
      () => {

        const language =
          button.dataset.language;


        state.selectedLanguage =
          state.selectedLanguage ===
          language
            ? null
            : language;


        document
          .querySelectorAll(
            ".language-card"
          )
          .forEach(
            (card) =>
              card.classList.remove(
                "active"
              )
          );


        if (
          state.selectedLanguage
        ) {

          button.classList.add(
            "active"
          );

          showToast(
            `${t("languageSelected")} ${button.querySelector("span:not(.language-symbol)").textContent}`
          );
        }


        renderAnime();


        document
          .getElementById(
            "discover"
          )
          .scrollIntoView({
            behavior: "smooth"
          });
      }
    );
  });


/* ---------------------------------------------------------
   EXPLORE
   --------------------------------------------------------- */

document
  .getElementById("exploreButton")
  .addEventListener(
    "click",
    () => {

      document
        .getElementById(
          "discover"
        )
        .scrollIntoView({
          behavior: "smooth"
        });
    }
  );


/* ---------------------------------------------------------
   TRAILER
   --------------------------------------------------------- */

document
  .getElementById("trailerButton")
  .addEventListener(
    "click",
    () => {

      trailerModal.classList.add(
        "open"
      );

      trailerModal.setAttribute(
        "aria-hidden",
        "false"
      );

      setBodyModalState();
    }
  );


document
  .getElementById("trailerClose")
  .addEventListener(
    "click",
    closeTrailer
  );


trailerModal.addEventListener(
  "click",
  (event) => {

    if (
      event.target === trailerModal
    ) {
      closeTrailer();
    }
  }
);


function closeTrailer() {

  trailerModal.classList.remove(
    "open"
  );

  trailerModal.setAttribute(
    "aria-hidden",
    "true"
  );

  setBodyModalState();
}


document
  .getElementById("trailerExplore")
  .addEventListener(
    "click",
    () => {

      closeTrailer();

      document
        .getElementById(
          "discover"
        )
        .scrollIntoView({
          behavior: "smooth"
        });
    }
  );


/* ---------------------------------------------------------
   WATCH PLAYER
   --------------------------------------------------------- */

document
  .getElementById("watchNowButton")
  .addEventListener(
    "click",
    () => {

      if (!state.selectedAnime) {
        return;
      }

      openPlayer(
        state.selectedAnime
      );
    }
  );


function openPlayer(anime) {

  state.currentEpisode = 0;

  document.getElementById(
    "playerTitle"
  ).textContent =
    state.language === "ta"
      ? anime.tamilTitle
      : anime.title;


  episodeSelect.innerHTML =
    "";


  anime.episodes.forEach(
    (episode, index) => {

      const option =
        document.createElement(
          "option"
        );

      option.value =
        index;

      option.textContent =
        episode.title;

      episodeSelect.appendChild(
        option
      );
    }
  );


  loadEpisode(
    anime,
    0
  );


  playerModal.classList.add(
    "open"
  );

  playerModal.setAttribute(
    "aria-hidden",
    "false"
  );

  setBodyModalState();


  closeAnimeModal();
}


function loadEpisode(
  anime,
  index
) {

  if (
    !anime ||
    !anime.episodes[index]
  ) {
    return;
  }


  state.currentEpisode =
    index;


  const episode =
    anime.episodes[index];


  videoSource.src =
    episode.videoUrl;


  animePlayer.load();


  episodeSelect.value =
    index;


  const title =
    state.language === "ta"
      ? anime.tamilTitle
      : anime.title;


  document.getElementById(
    "playerTitle"
  ).textContent =
    `${title} — ${episode.title}`;
}


episodeSelect.addEventListener(
  "change",
  () => {

    if (!state.selectedAnime) {
      return;
    }

    loadEpisode(
      state.selectedAnime,
      Number(
        episodeSelect.value
      )
    );
  }
);


/* PREVIOUS */

document
  .getElementById(
    "previousEpisode"
  )
  .addEventListener(
    "click",
    () => {

      if (
        !state.selectedAnime
      ) {
        return;
      }


      const next =
        state.currentEpisode - 1;


      if (next < 0) {

        showToast(
          state.language === "ta"
            ? "இது முதல் episode."
            : "This is the first episode."
        );

        return;
      }


      loadEpisode(
        state.selectedAnime,
        next
      );
    }
  );


/* NEXT */

document
  .getElementById(
    "nextEpisode"
  )
  .addEventListener(
    "click",
    () => {

      if (
        !state.selectedAnime
      ) {
        return;
      }


      const next =
        state.currentEpisode + 1;


      if (
        next >=
        state.selectedAnime.episodes.length
      ) {

        showToast(
          state.language === "ta"
            ? "இது கடைசி episode."
            : "This is the last episode."
        );

        return;
      }


      loadEpisode(
        state.selectedAnime,
        next
      );
    }
  );


/* CLOSE PLAYER */

document
  .getElementById("playerClose")
  .addEventListener(
    "click",
    closePlayer
  );


playerModal.addEventListener(
  "click",
  (event) => {

    if (
      event.target === playerModal
    ) {
      closePlayer();
    }
  }
);


function closePlayer() {

  animePlayer.pause();

  animePlayer.removeAttribute(
    "src"
  );

  videoSource.removeAttribute(
    "src"
  );

  playerModal.classList.remove(
    "open"
  );

  playerModal.setAttribute(
    "aria-hidden",
    "true"
  );

  setBodyModalState();
}


/* ---------------------------------------------------------
   MY LIST BUTTON
   --------------------------------------------------------- */

document
  .getElementById("listButton")
  .addEventListener(
    "click",
    () => {

      document
        .getElementById(
          "watchlist"
        )
        .scrollIntoView({
          behavior: "smooth"
        });


      if (
        !state.watchlist.length
      ) {

        showToast(
          t("listEmpty")
        );

        return;
      }


      renderWatchlist();
    }
  );


/* ---------------------------------------------------------
   PROFILE
   --------------------------------------------------------- */

document
  .getElementById("profileButton")
  .addEventListener(
    "click",
    (event) => {

      event.stopPropagation();

      profileMenu.classList.toggle(
        "open"
      );

      profileMenu.setAttribute(
        "aria-hidden",
        profileMenu.classList.contains(
          "open"
        )
          ? "false"
          : "true"
      );
    }
  );


document.addEventListener(
  "click",
  (event) => {

    if (
      !event.target.closest(
        "#profileMenu"
      ) &&
      !event.target.closest(
        "#profileButton"
      )
    ) {

      profileMenu.classList.remove(
        "open"
      );

      profileMenu.setAttribute(
        "aria-hidden",
        "true"
      );
    }
  }
);


function updateProfileCount() {

  document.getElementById(
    "profileListCount"
  ).textContent =
    state.watchlist.length;
}


/* ---------------------------------------------------------
   KEYBOARD
   --------------------------------------------------------- */

document.addEventListener(
  "keydown",
  (event) => {

    if (
      event.key !== "Escape"
    ) {
      return;
    }


    if (
      animeModal.classList.contains(
        "open"
      )
    ) {
      closeAnimeModal();
    }


    if (
      playerModal.classList.contains(
        "open"
      )
    ) {
      closePlayer();
    }


    if (
      trailerModal.classList.contains(
        "open"
      )
    ) {
      closeTrailer();
    }
  }
);


/* ---------------------------------------------------------
   HERO IMAGE FALLBACK
   --------------------------------------------------------- */

document
  .getElementById("heroImage")
  .addEventListener(
    "error",
    function () {

      this.src =
        "https://placehold.co/780x1000/17181e/f0a8bd?text=NIKA+SHARO";
    },
    { once: true }
  );


/* ---------------------------------------------------------
   INITIALIZE
   --------------------------------------------------------- */

document.getElementById(
  "year"
).textContent =
  new Date().getFullYear();


applyTranslations();

renderAnime();

renderWatchlist();

updateProfileCount();
```
const animeData = [
    {
        title: "Attack on Titan",
        image: "images/attack-on-titan.jpg",
        video: "videos/episode1.mp4"
    }
];
<video id="animePlayer" controls width="100%">
    <source src="videos/episode1.mp4" type="video/mp4">
    Your browser does not support video playback.
</video>
