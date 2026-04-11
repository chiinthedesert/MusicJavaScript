import { SearchBar } from "../components/searchBar.js";

export function AlbumsView() {
  const html = `
    <div class="container albums-view">
      ${SearchBar()}
    </div>
  `;
  document.getElementById("view").innerHTML = html;
}
