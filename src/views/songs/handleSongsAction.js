import * as state from "../../state.js";

export function handleSongsAction(action, el) {
  if (!action.startsWith("songs:")) return;

  const current = state.getState();

  switch (action) {
    case "songs:sort-toggle":
      state.setState({
        isSortOpen: !current.isSortOpen,
      });
      break;

    case "songs:sort": {
      const type = el.dataset.type;
      const currentSort = current.sort.songs;

      const isSame = currentSort.by === type;

      state.setState({
        sort: {
          ...current.sort,
          songs: {
            by: type,
            order: isSame && currentSort.order === "asc" ? "desc" : "asc",
          },
        },
      });
      break;
    }

    case "songs:track-play": {
      const [albumId, trackId] = el.dataset.id.split("_");

      state.setState({
        currentSong: {
          albumId,
          id: trackId,
        },
        currentTime: 0,
        isPlaying: true,
      });

      break;
    }

    case "songs:play-all":
      console.log("play all");
      break;

    case "songs:shuffle":
      console.log("shuffle");
      break;

    case "songs:go-to-album": {
      const albumId = el.dataset.albumId;

      state.setState({
        currentView: "detailedAlbum",
        viewState: { albumId },
      });

      break;
    }

    case "songs:go-to-artist": {
      const artistName = el.dataset.artist;

      state.setState({
        currentView: "detailedArtist",
        viewState: { artistName },
      });

      break;
    }
  }
}
