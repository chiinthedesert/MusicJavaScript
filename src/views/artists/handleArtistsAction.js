import * as state from "../../state.js";

export function handleArtistsAction(action, el) {
  if (!action.startsWith("artists:")) return;

  const current = state.getState();

  switch (action) {
    case "artists:sort-toggle":
      state.setState({
        isSortOpen: !current.isSortOpen,
      });
      break;

    case "artists:sort": {
      const type = el.dataset.type;
      const currentSort = current.sort.artists;

      const isSame = currentSort.by === type;

      state.setState({
        sort: {
          ...current.sort,
          artists: {
            by: type,
            order: isSame && currentSort.order === "asc" ? "desc" : "asc",
          },
        },
      });
      break;
    }

    case "artists:artist-click": {
      const artistName = el.dataset.artist;

      state.setState({
        currentView: "detailedArtist",
        viewState: { artistName },
      });

      break;
    }

    case "artists:play-all":
      console.log("play all");
      break;

    case "artists:shuffle":
      console.log("shuffle");
      break;
  }
}
