import { SearchBar } from "../../components/searchBar.js";
import { AlbumCard } from "../../components/albumCard.js";
import { sortItems } from "../../utils/sortItems.js";
import { getAlbums } from "../../utils/getAlbums.js";
import * as state from "../../state.js";

export function AlbumsView() {
  const { sort, isSortOpen, search } = state.getState();
  const { by, order } = sort.albums;

  const searchQuery = search.albums.toLowerCase();

  let albums = getAlbums();
  if (searchQuery) {
    albums = albums.filter(
      (album) =>
        album.name.toLowerCase().includes(searchQuery) ||
        album.artist.toLowerCase().includes(searchQuery),
    );
  }
  albums = sortItems(albums, by, order);

  const html = `
      <div id="albums-view" class="albums-view padding">
        ${SearchBar()}
        ${SortMenu({ by, order, isSortOpen })}
        ${AlbumsGrid(albums)}
      </div>
    `;
  document.getElementById("view-container").innerHTML = html;
}

function SortMenu({ by, order, isSortOpen }) {
  function arrowIcon(type) {
    if (by === type) {
      return order === "asc" ? "<i>arrow_upward</i>" : "<i>arrow_downward</i>";
    }
    return "";
  }

  return `
    <div class="sort row">
      <button data-action="albums:sort-toggle" class="${isSortOpen ? "active" : ""}">
        <span>Sort</span>
        <i>sort</i>
      </button>

      <menu class="group no-wrap small-space bottom ${isSortOpen ? "active" : ""}">
        <li>
          <button data-action="albums:sort" data-type="name" class="fill small ${by === "name" ? "active" : ""}">
            <span>Name</span>
            ${arrowIcon("name")}
          </button>
        </li>

        <li>
          <button data-action="albums:sort" data-type="artist" class="fill small ${by === "artist" ? "active" : ""}">
            <span>Artist</span>
            ${arrowIcon("artist")}
          </button>
        </li>

        <li>
          <button data-action="albums:sort" data-type="year" class="fill small ${by === "year" ? "active" : ""}">
            <span>Year</span>
            ${arrowIcon("year")}
          </button>
        </li>

      </menu>
    </div>
  `;
}

function PlayAndShuffle() {
  return `
    <div class="play-buttons row center-align">
      <button data-action="albums:play-all" class="play-button shape sided-cookie6 medium active">
        <i class="extra">play_arrow</i>
      </button>
      <button data-action="albums:shuffle" class="shuffle-button shape sided-cookie12 medium">
        <i class="extra">shuffle</i>
      </button>
    </div>
  `;
}

function AlbumsGrid(albums) {
  if (albums.length === 0) {
    return `<h6>No albums found</h6>`;
  }

  return `
    <h5 class="section-title bold top-margin">Albums</h5>
    <section 
      style="
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(clamp(8rem, 25vw, 12rem), 1fr));
        gap: 1rem;
      "
    >
      ${albums.map((album) => AlbumCard(album, "albums")).join("")}
    </section>
  `;
}
