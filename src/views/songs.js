import { SearchBar } from "../components/searchBar.js";

export function SongsView() {
  const html = `
    <div class="container songs-view">
      ${SearchBar()}
    </div>
  `;

  document.getElementById("view").innerHTML = html;
}
