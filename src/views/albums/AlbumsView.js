import { SearchBar } from "../../components/searchBar.js";
import { albums } from "../../data.js";
import { AlbumCard } from "../../components/albumCard.js";

let sortDirection = "asc";
let keyword = "";

export function AlbumsView() {
  const filteredAlbums = getFilteredAlbums();
  const html = `
    <div class="container albums-view padding">
      ${SearchBar()}
      ${AlbumsHeader()}
      ${AlbumsGrid(filteredAlbums)}
    </div>
  `;
  document.getElementById("view").innerHTML = html;
}

function AlbumsHeader() {
  return `
    <div class="section-header row space-between"
      style="background:#f5f5f5; margin-bottom:10px;">
      <h6 class="bold max sortable" id="sort-name" style="cursor:pointer; color:#1976d2;">
        Name ${sortDirection === "asc" ? "↑" : "↓"}</h6>
      <h6 class="bold" style="color:#333;">Artist</h6>
      <h6 class="bold" style="color:#333;">Date</h6>
    </div>
  `;
}
function AlbumsGrid(list) {
  return `
      <div class="grid-list row wrap" style="padding:15px; background:#fafafa;">
        ${
          list.length > 0
            ? list.map((album) => AlbumCard(album, "albums")).join("")
            : `<p style="padding: 20px; color:#999;">No albums found</p>`
        }
      </div>
    `;
}

function getFilteredAlbums() {
  let result = [...albums];

  if (keyword.trim() !== "") {
    result = result.filter((album) => {
      const albumName = album.name.toLowerCase();
      const artistName = album.artist.toLowerCase();
      const searchWord = keyword.toLowerCase();
      return albumName.includes(searchWord) || artistName.includes(searchWord);
    });
  }

  if (sortDirection === "asc") {
    result.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
  } else {
    result.sort((a, b) => {
      return b.name.localeCompare(a.name);
    });
  }
  return result;
}
