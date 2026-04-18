import * as state from "../../state.js";

export function handlePlaylistsAction(action, el) {
  if (!action.startsWith("playlists:")) return;

  const current = state.getState();

  switch (action) {
    case "playlists:sort-toggle":
      state.setState({
        isSortOpen: !current.isSortOpen,
      });
      break;

    case "playlists:sort": {
      const type = el.dataset.type;
      const currentSort = current.sort.playlists;
      const isSame = currentSort.by === type;

      state.setState({
        sort: {
          ...current.sort,
          playlists: {
            by: type,
            order: isSame && currentSort.order === "asc" ? "desc" : "asc",
          },
        },
      });
      break;
    }

    case "playlists:playlist-click": {
      const playlistId = el.dataset.playlistId;
      state.setState({
        currentView: "detailedPlaylist",
        viewState: { playlistId },
      });
      break;
    }

    case "playlists:play-all":
      console.log("play all playlists");
      break;

    case "playlists:shuffle":
      console.log("shuffle playlists");
      break;
  }
}
