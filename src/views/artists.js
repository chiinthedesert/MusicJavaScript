import { albums } from "../data.js";
import { SearchBar } from "../components/searchBar.js";

export function ArtistsView() {
  return `
    <div class="container artists-view">
      ${SearchBar()}
    </div>
  `;
}
