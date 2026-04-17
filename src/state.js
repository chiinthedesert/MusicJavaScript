const state = {
  currentView: "home",
  viewState: {},
  historyView: [],
  currentSong: { albumId: "carrie-lowell", id: "01" },
  favoriteSongs: [
    "carrie-lowell:01",
    "carrie-lowell:02",
    "carrie-lowell:03",
    "carrie-lowell:04",
    "ill-like-you:01",
    "ill-like-you:02",
    "pet-sounds:02",
    "not-cute-anymore:01",
  ],

  isPlaying: false,
  isLyricsOpen: false,
  currentTime: 0,
  isShuffle: false,
  isRepeat: false,

  search: {
    songs: "",
    albums: "",
    artists: "",
    playlists: "",
  },

  sort: {
    songs: { by: "title", order: "asc" },
    albums: { by: "name", order: "asc" },
    artists: { by: "name", order: "asc" },
    playlists: { by: "name", order: "asc" },
  },
  isSortOpen: false,
};

export function getState() {
  return state;
}

const listeners = [];
export function subscribe(fn) {
  listeners.push(fn);
}

export function setState(partial, { skipHistory = false } = {}) {
  const next = typeof partial === "function" ? partial(state) : partial;

  if (
    !skipHistory &&
    next.currentView &&
    next.currentView !== state.currentView
  ) {
    state.historyView.push({
      currentView: state.currentView,
      viewState: { ...state.viewState },
    });
  }

  Object.assign(state, next);

  listeners.forEach((fn) => fn());
}
