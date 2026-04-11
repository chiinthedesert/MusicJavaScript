import { SearchBar } from "../components/searchBar.js";

export function ArtistsView() {
  const html = `
    <div class="container artists-view">
      ${SearchBar()}
    </div>
  `;
  document.getElementById("view").innerHTML = html;
}
