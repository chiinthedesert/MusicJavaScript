import { albums } from "../../data.js";
import { AlbumCard } from "../../components/albumCard.js";
import { SearchBar } from "../../components/searchBar.js";
import { PlaylistCard } from "../../components/playlistCard.js";
import { ArtistCard } from "../../components/artistCard.js";
import { getArtists } from "../../utils/getArtists.js";
import { getPlaylists } from "../../utils/getPlaylists.js";

export function HomeView() {
  const html = `
    <div id="home-view" class="home-view padding">
      ${QuickActions()}
      ${RecentAlbums()}
      ${RecentArtists()}
      ${RecentPlaylists()}
    </div>
  `;
  document.getElementById("view-container").innerHTML = html;
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
        <h6 class="bold max">Recently played albums</h6>
        <i class="bold">arrow_forward</i>
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
  const artists = getArtists();

  return `
    <section class="section">
      <div class="section-header row">
        <h6 class="bold max">Recent artists</h6>
        <i class="bold ">arrow_forward</i>
      </div>

      <div class="horizontal-list row scroll" style="scrollbar-width: none;">
        ${artists
          .slice(0, 7)
          .map((artist) => ArtistCard(artist, "home"))
          .join("")}
      </div>
    </section>
  `;
}

function RecentPlaylists() {
  const playlists = getPlaylists();
  return `
    <section class="section">
      <div class="section-header row">
        <h6 class="bold max">Recent playlists</h6>
        <i class="bold">arrow_forward</i>
      </div>

      <div class="horizontal-list row scroll" style="scrollbar-width: none;">
        ${playlists
          .slice(0, 7)
          .map((playlist) => PlaylistCard(playlist))
          .join("")}
      </div>
    </section>
  `;
}
