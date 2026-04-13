import { SearchBar } from "../../components/searchBar.js";
import { albums } from "../../data.js";
import { AlbumCard } from "../../components/albumCard.js";

export function AlbumsView() {
  const html = `
    <div class="container albums-view">
      ${SearchBar()}
      ${AlbumsHeader()}
      ${AlbumsGrid()}
    </div>
  `;
  document.getElementById("view").innerHTML = html;
}

  function AlbumsHeader() {
  return `
    <div class="section-header row space-between">
      <h6 class="bold max">Name ↓</h6>
      <h6 class="bold">Artist</h6>
      <h6 class="bold">Date</h6>
    </div>
  `;
  }
  function AlbumsGrid() {
    return `
      <div class="grid-list row wrap">
        ${albums.map((album) => AlbumCard(album, "albums")).join("")}
      </div>
    `;
  }
