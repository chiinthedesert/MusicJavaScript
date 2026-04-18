import * as state from "../../state.js";

export function handleAlbumsAction(action, el) {
  if (!action.startsWith("albums:")) return;

  const current = state.getState();

  switch (action) {
    case "albums:sort-toggle":
      state.setState({
        isSortOpen: !current.isSortOpen,
      });
      break;

    case "albums:sort": {
      const type = el.dataset.type;
      const currentSort = current.sort.albums;

      const isSame = currentSort.by === type;

      state.setState({
        sort: {
          ...current.sort,
          albums: {
            by: type,
            order: isSame && currentSort.order === "asc" ? "desc" : "asc",
          },
        },
      });
      break;
    }

    case "albums:album-click": {
      const albumId = el.dataset.albumId;

      state.setState({
        currentView: "detailedAlbum",
        viewState: { albumId },
      });

      break;
    }

    case "albums:play-all":
      console.log("play all");
      break;

    case "albums:shuffle":
      console.log("shuffle");
      break;
  }
}
