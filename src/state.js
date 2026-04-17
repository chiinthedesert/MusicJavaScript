const state = {
  currentView: "home",
  viewState: {},
  historyView: [],
  currentSong: { albumId: "carrie-lowell", id: "01" },

  isPlaying: false,
  isLyricsOpen: false,
  currentTime: 0,

  sort: {
    songs: {
      by: "title",
      order: "asc",
    },
    albums: {
      by: "name",
      order: "asc",
    },
    artists: {
      by: "name",
      order: "asc",
    },
    playlists: {
      by: "name",
      order: "asc",
    },
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
  if (
    !skipHistory &&
    partial.currentView &&
    partial.currentView !== state.currentView
  ) {
    state.historyView.push({
      currentView: state.currentView,
      viewState: { ...state.viewState },
    });
  }

  Object.assign(state, partial);

  listeners.forEach((fn) => fn());
}
