import { SearchBar } from "../../components/searchBar.js";
import { ArtistCard } from "../../components/artistCard.js";
import { sortItems } from "../../utils/sortItems.js";
import { getArtists } from "../../utils/getArtists.js";
import * as state from "../../state.js";

export function ArtistsView() {
  const { sort, isSortOpen } = state.getState();
  const { by, order } = sort.artists;

  let artists = getArtists();
  artists = sortItems(artists, by, order);

  const html = `
    <div id="artists-view" class="artists-view padding">
      ${SearchBar()}
      ${SortMenu({ by, order, isSortOpen })}
      ${PlayAndShuffle()}
      ${ArtistsGrid(artists)}
    </div>
  `;
  document.getElementById("view").innerHTML = html;
}

function SortMenu({ by, order, isSortOpen }) {
  return `
    <div class="sort row">
      <button data-action="artists:sort-toggle" class="${isSortOpen ? "active" : ""}">
        <span>Sort</span>
        <i>sort</i>
      </button>

      <menu class="group no-wrap small-space bottom ${isSortOpen ? "active" : ""}">
        <li>
          <button data-action="artists:sort" data-type="name" class="fill small ${by === "name" ? "active" : ""}">
            <span>Name</span>
            ${
              by === "name"
                ? `<i>${order === "asc" ? "arrow_downward" : "arrow_upward"}</i>`
                : ""
            }
          </button>
        </li>
      </menu>
    </div>
  `;
}

function PlayAndShuffle() {
  return `
    <div class="play-buttons row center-align">
      <button data-action="artists:play-all" class="shape sided-cookie6 medium active">
        <i class="extra">play_arrow</i>
      </button>
      <button data-action="artists:shuffle" class="shape sided-cookie12 medium">
        <i class="extra">shuffle</i>
      </button>
    </div>
  `;
}

function ArtistsGrid(artists) {
  if (artists.length === 0) {
    return `<p>No artists found</p>`;
  }

  return `
    <section 
      style="
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(clamp(8rem, 25vw, 12rem), 1fr));
        gap: 1rem;
      "
    >
      ${artists.map((artist) => ArtistCard(artist, "artists")).join("")}
    </section>
  `;
}
