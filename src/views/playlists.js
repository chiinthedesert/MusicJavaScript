import { SearchBar } from "../components/searchBar.js";

export function PlaylistsView() {
  const html = `
    <div class="container playlists-view">
      ${SearchBar()}
    </div>
  `;

  document.getElementById("view").innerHTML = html;
}
