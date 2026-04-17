import { getArtist } from "../../utils/getArtist.js";
import { getTracks } from "../../utils/getTracks.js";
import { TrackItem } from "../../components/trackItem.js";
import { AlbumCard } from "../../components/albumCard.js";
import * as state from "../../state.js";

export function DetailedArtistView() {
  const artist = getArtist(state.getState().viewState.artistName);
  const tracks = getTracks({ artist: artist.name });

  const html = `
    <div id="detailed-artist-view" class="padding">

      ${BackButton()}
      ${PhotoAndInfo(artist)}
      ${PlayAndShuffle()}
      ${ArtistSongs(tracks)}
      ${ArtistAlbums(artist)}

    </div>
  `;

  document.getElementById("view-container").innerHTML = html;
}

function BackButton() {
  return `
    <button data-action="player:back" class="extra circle transparent ">
      <i class="bold">arrow_back</i>
    </button>
  `;
}

function PhotoAndInfo(artist) {
  return `
    <section class="row vertical center-align tiny-space">
      <img class="shape circle"
      style="block-size: 16rem; inline-size: 16rem; object-fit: cover;" src="${artist.cover}" alt="" />
      <div class="artist-info">
        <h6 class="bold">${artist.name}</h6>
        <div class="center-align">
          <span>${artist.tracks} songs</span>
        </div>
      </div>
    </section>
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

function ArtistSongs(tracks) {
  return `
    <section class="artist-songs">
      <div>
        <h6 class="bold">Top Songs</h6>
      </div>
      <ul class="songs-list no-padding ">
        ${tracks
          .slice(0, 7)
          .map((track) => TrackItem(track))
          .join("")}
      </ul>
    </section>
  `;
}

function ArtistAlbums(artist) {
  return `
    <section class="section">
      <div class="section-header row">
        <h6 class="bold max">Albums</h6>
        <button class="transparent">
          <i class="bold">arrow_forward</i>
        </button>
      </div>

      <div class="horizontal-list row scroll" style="scrollbar-width: none;">
        ${artist.albums.map((album) => AlbumCard(album, "home")).join("")}
      </div>
    </section>
  `;
}
