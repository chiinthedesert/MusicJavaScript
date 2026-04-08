import { albums } from "../data.js";
import { SearchBar } from "../components/searchBar.js";

export function AlbumsView() {
  return `
    <div class="container albums-view">
      ${SearchBar()}
    </div>
  `;
}
