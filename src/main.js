ui("theme", "#FFB4B4");

import * as state from "./state.js";

import { NavBar, handleNavBarAction } from "./components/navBar.js";
import { PlayerBar } from "./components/playerBar.js";

import { HomeView } from "./views/home/HomeView.js";

import { SongsView } from "./views/songs/SongsView.js";
import { handleSongsAction } from "./views/songs/handleSongsAction.js";

import { AlbumsView } from "./views/albums/AlbumsView.js";
import { handleAlbumsAction } from "./views/albums/handleAlbumsAction.js";

import { ArtistsView } from "./views/artists/ArtistsView.js";
import { handleArtistsAction } from "./views/artists/handleArtistsAction.js";

import { PlaylistsView } from "./views/playlists/PlaylistsView.js";
import { handlePlaylistsAction } from "./views/playlists/handlePlaylistsAction.js";

import { PlayerView } from "./views/player/PlayerView.js";
import { handlePlayerAction } from "./views/player/handlePlayerAction.js";

import { DetailedAlbumView } from "./views/detailedAlbum/DetailedAlbumView.js";
import { DetailedArtistView } from "./views/detailedArtist/DetailedArtistView.js";
import { DetailedPlaylistView } from "./views/detailedPlaylist/DetailedPlaylistView.js";

const app = document.getElementById("app");
const views = {
  home: HomeView,
  songs: SongsView,
  albums: AlbumsView,
  playlists: PlaylistsView,
  artists: ArtistsView,
  player: PlayerView,
  detailedAlbum: DetailedAlbumView,
  detailedArtist: DetailedArtistView,
  detailedPlaylist: DetailedPlaylistView,
};

export function renderView() {
  views[state.getState().currentView]();
}

NavBar();
PlayerBar();
renderView();

app.onclick = (e) => {
  const el = e.target.closest("[data-action]");
  if (!el) return;

  const action = el.dataset.action;

  handleSongsAction(action, el);
  handleAlbumsAction(action, el);
  handleArtistsAction(action, el);
  handlePlaylistsAction(action, el);
  handlePlayerAction(action, el);
  handleNavBarAction(action, el);
};

app.onkeydown = (e) => {
  const el = e.target;

  if (el.id !== "search-input") return;
  if (e.key !== "Enter") return;

  const { currentView, search } = state.getState();

  state.setState({
    search: {
      ...search,
      [currentView]: el.value,
    },
  });
};

state.subscribe(() => {
  renderView();
  PlayerBar();
  NavBar();
});
