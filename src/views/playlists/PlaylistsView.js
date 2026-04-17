import { SearchBar } from "../../components/searchBar.js";
import { PlaylistCard } from "../../components/playlistCard.js";
import { sortItems } from "../../utils/sortItems.js";
import { getPlaylists } from "../../utils/getPlaylists.js";
import * as state from "../../state.js";

export function PlaylistsView() {
  const { sort, isSortOpen, search } = state.getState();
  const { by, order } = sort.playlists;
  const searchQuery = search.playlists.toLowerCase();

  let playlists = getPlaylists();
  if (searchQuery) {
    playlists = playlists.filter(
      (playlist) =>
        playlist.name.toLowerCase().includes(searchQuery) ||
        (playlist.curator || "").toLowerCase().includes(searchQuery),
    );
  }
  playlists = sortItems(playlists, by, order);

  const html = `
    <div id="playlists-view" class="playlists-view padding">
      ${SearchBar()}
      ${SortMenu({ by, order, isSortOpen })}
      ${PlaylistsGrid(playlists)}
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
      <button data-action="playlists:sort-toggle" class="${isSortOpen ? "active" : ""}">
        <span>Sort</span>
        <i>sort</i>
      </button>

      <menu class="group no-wrap small-space bottom ${isSortOpen ? "active" : ""}">
        <li>
          <button data-action="playlists:sort" data-type="name" class="fill small ${by === "name" ? "active" : ""}">
            <span>Name</span>
            ${arrowIcon("name")}
          </button>
        </li>

        <li>
          <button data-action="playlists:sort" data-type="curator" class="fill small ${by === "curator" ? "active" : ""}">
            <span>Curator</span>
            ${arrowIcon("curator")}
          </button>
        </li>

        <li>
          <button data-action="playlists:sort" data-type="tracks" class="fill small ${by === "tracks" ? "active" : ""}">
            <span>Songs</span>
            ${arrowIcon("tracks")}
          </button>
        </li>
      </menu>
    </div>
  `;
}

function PlayAndShuffle() {
  return `
    <div class="play-buttons row center-align">
      <button data-action="playlists:play-all" class="play-button shape sided-cookie6 medium active">
        <i class="extra">play_arrow</i>
      </button>
      <button data-action="playlists:shuffle" class="shuffle-button shape sided-cookie12 medium">
        <i class="extra">shuffle</i>
      </button>
    </div>
  `;
}

function PlaylistsGrid(playlists) {
  if (playlists.length === 0) {
    return `
      <h5 class="section-title bold top-margin">Playlists</h5>
      <h6>No playlists found</h6>
    `;
  }

  return `
    <h5 class="section-title bold top-margin">Playlists</h5>
    <section
      style="
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(clamp(8rem, 25vw, 12rem), 1fr));
        gap: 1rem;
      "
    >
      ${playlists.map((playlist) => PlaylistCard(playlist)).join("")}
    </section>
  `;
}
