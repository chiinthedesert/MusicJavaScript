import * as state from "../../state.js";
import { previousView } from "../../utils/previousView.js";

export function handlePlayerAction(action, el) {
  if (!action.startsWith("player:")) return;

  switch (action) {
    case "player:back":
      previousView();
      break;

    case "player:open":
      state.setState({ currentView: "player", viewState: {} });
      break;

    case "player:play-toggle": {
      const { isPlaying } = state.getState();
      state.setState({ isPlaying: !isPlaying });
      break;
    }

    case "player:prev":
      console.log("prev song");
      break;

    case "player:next":
      console.log("next song");
      break;

    case "player:shuffle":
      console.log("shuffle");
      break;

    case "player:repeat":
      console.log("repeat");
      break;

    case "player:queue":
      console.log("queue");
      break;

    case "player:lyrics-toggle": {
      const { isLyricsOpen } = state.getState();
      state.setState({ isLyricsOpen: !isLyricsOpen });
      break;
    }
  }
}
