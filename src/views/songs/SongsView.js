import { SearchBar } from "../../components/searchBar.js";
import { TrackItem } from "../../components/trackItem.js";
import * as state from "../../state.js";

import { getTracks } from "../../utils/getTracks.js";
import { sortItems } from "../../utils/sortItems.js";

export function SongsView() {
  const { sort, isSortOpen } = state.getState();
  const { by, order } = sort.songs;

  let tracks = getTracks();
  tracks = sortItems(tracks, by, order);

  const html = `
    <div class="songs-view padding">
      ${SearchBar()}
      ${SortMenu({ by, order, isSortOpen })}
      ${PlayAndShuffle()}
      ${SongsListSection(tracks)}
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
      <button data-action="songs:sort-toggle" class="${isSortOpen ? "active" : ""}">
        <span>Sort</span>
        <i>sort</i>
      </button>

      <menu class="group no-wrap small-space bottom ${isSortOpen ? "active" : ""}">
        <li>
          <button data-action="songs:sort" data-type="title" class="fill small ${by === "title" ? "active" : ""}">
            <span>Title</span>
            ${arrowIcon("title")}
          </button>
        </li>

        <li>
          <button data-action="songs:sort" data-type="album" class="fill small ${by === "album" ? "active" : ""}">
            <span>Album</span>
            ${arrowIcon("album")}
          </button>
        </li>

        <li>
          <button data-action="songs:sort" data-type="artist" class="fill small ${by === "artist" ? "active" : ""}">
            <span>Artist</span>
            ${arrowIcon("artist")}
          </button>
        </li>
      </menu>
    </div>
  `;
}

function PlayAndShuffle() {
  return `
    <div class="play-buttons row center-align">
      <button data-action="songs:play-all" class="play-button shape sided-cookie6 medium active">
        <i class="extra">play_arrow</i>
      </button>
      <button data-action="songs:shuffle" class="shuffle-button shape sided-cookie12 medium">
        <i class="extra">shuffle</i>
      </button>
    </div>
  `;
}

function SongsListSection(tracks) {
  return `
    <h5 class="section-title bold top-margin">Songs</h5>
    <section>
      <ul class="songs-list no-padding no-margin">
        ${tracks.map((track) => TrackItem(track)).join("")}
      </ul>
    </section>
  `;
}
