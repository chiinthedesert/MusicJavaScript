ui("theme", "#FFB4B4");
import * as state from "./state.js";

import { NavBar } from "./components/navBar.js";
import { renderNavBar } from "./components/navBar.js";

import { HomeView } from "./views/home.js";
import { SongsView } from "./views/songs.js";
import { AlbumsView } from "./views/albums.js";
import { PlaylistsView } from "./views/playlists.js";
import { ArtistsView } from "./views/artists.js";

const app = document.getElementById("app");
const view = document.getElementById("view");
const views = {
  home: HomeView,
  songs: SongsView,
  albums: AlbumsView,
  playlists: PlaylistsView,
  artists: ArtistsView,
};

export function renderView() {
  view.innerHTML = views[state.getState().currentView]();
}

NavBar();
renderView();
renderNavBar();
