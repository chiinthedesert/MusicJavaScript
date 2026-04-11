ui("theme", "#FFB4B4");
import * as state from "./state.js";

import { NavBar, renderNavBar } from "./components/navBar.js";

import { PlayerBar, renderPlayerBar } from "./components/playerBar.js";

import { HomeView } from "./views/home.js";
import { SongsView } from "./views/songs.js";
import { AlbumsView } from "./views/albums.js";
import { PlaylistsView } from "./views/playlists.js";
import { ArtistsView } from "./views/artists.js";
import { PlayerView, renderPlayerView } from "./views/player.js";

const app = document.getElementById("app");
const views = {
  home: HomeView,
  songs: SongsView,
  albums: AlbumsView,
  playlists: PlaylistsView,
  artists: ArtistsView,
  player: PlayerView,
};

export function renderView() {
  views[state.getState().currentView]();
}

NavBar();
PlayerBar();

renderView();
renderNavBar();
renderPlayerBar();

let lastView = state.getState().currentView;
state.subscribe(() => {
  const currentView = state.getState().currentView;

  if (lastView !== currentView) {
    renderView();
    lastView = currentView;
  }

  renderNavBar();
  renderPlayerBar();

  if (currentView === "player") {
    renderPlayerView();
  }

  document.getElementById("player-bar").style.display =
    currentView === "player" ? "none" : "block";
  document.getElementById("navbar").style.display =
    currentView === "player" ? "none" : "block";
});
