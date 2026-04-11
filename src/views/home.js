import { albums } from "../data.js";
import { AlbumCard } from "../components/albumCard.js";
import { SearchBar } from "../components/searchBar.js";
import { ArtistCard } from "../components/artistCard.js";

export function HomeView() {
  const html = `
    <div class="home-view">
      ${SearchBar()}
      ${QuickActions()}
      ${RecentAlbums()}
      ${RecentArtists()}
    </div>
  `;
  document.getElementById("view").innerHTML = html;
}

function QuickActions() {
  return `
    <div class="quick-actions row center-align">

      <div class="column center-align">
        <button class="shape sunny extra fill">
            <span class="shape flower max medium-space">
              <i class="extra">history</i>
            </span>
        </button>
        <small>History</small>
      </div>

      <div class="column center-align">
        <button class="shape sided-cookie6 extra fill">
            <span class="shape sided-cookie4 max medium-space">
              <i class="extra">favorite</i>
            </span>
        </button>
        <small>Favorites</small>
      </div>

      <div class="column center-align">
        <button class="shape puffy extra">
          <i class="extra">trending_up</i>
        </button>
        <small>Most played</small>
      </div>
    </div>
  `;
}

function RecentAlbums() {
  return `
    <section class="section">
      <div class="section-header row">
        <h6 class="bold max left-padding">Recently played albums</h6>
        <button class="transparent">
          <i class="bold">arrow_forward</i>
        </button>
      </div>

      <div class="horizontal-list row scroll" style="scrollbar-width: none;">
        ${albums
          .slice(0, 7)
          .map((album) => AlbumCard(album, "home"))
          .join("")}
      </div>
    </section>
  `;
}

function RecentArtists() {
  return `
    <section class="section">
      <div class="section-header row">
        <h6 class="bold max left-padding">Recent artists</h6>
        <button class="transparent">
          <i class="bold ">arrow_forward</i>
        </button>
      </div>

      <div class="horizontal-list row scroll" style="scrollbar-width: none;">
        ${albums
          .slice(0, 7)
          .map((album) => ArtistCard(album, "home"))
          .join("")}
      </div>
    </section>
  `;
}
