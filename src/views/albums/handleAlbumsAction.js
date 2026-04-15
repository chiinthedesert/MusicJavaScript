import * as state from "../../state.js";

export function handleAlbumsAction(action, el) {
  if (!action.startsWith("albums:")) return;
  const current = state.getState();

  if (action === "albums:sort-toggle") {
    state.setStarted({ isSortOpen: !current.isSortOpen});
  }
  else if (action === "albums:sort") {
    const type = el.dataset.type;
    const currentSort = current.sort.albums;
    const isSameType = currentSort.by === type;
    const newOrder = (isSameType && currentSort.order === "asc")
      ? "desc"
      : "asc";

      state.setState({sort: {...current.sort, albums: {
                                                        by: type,
                                                        order: newOrder},},
                    });
    }

    else if (action === "albums:play") {
      console.log("Play album có id:", el.dataset.id);
  }
    else if (action === "albums:menu") {
      console.log("Mở menu album có id:", el.dataset.id);
  }
}
