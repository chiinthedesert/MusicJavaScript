import { albums } from "../data.js";
import { SearchBar } from "../components/searchBar.js";

export function SongsView() {
  return `
    <div class="container songs-view">
      ${SearchBar()}
    </div>
  `;
}
