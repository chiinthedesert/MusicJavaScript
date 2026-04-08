import { albums } from "../data.js";
import { SearchBar } from "../components/searchBar.js";

export function PlaylistsView() {
  return `
    <div class="container playlists-view">
      ${SearchBar()}
    </div>
  `;
}
