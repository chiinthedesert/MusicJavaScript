import { getAlbum } from "../../utils/getAlbum.js";
import { getTracks } from "../../utils/getTracks.js";
import * as state from "../../state.js";
import { TrackItem } from "../../components/trackItem.js";
import { formatTime } from "../../utils/formatTime.js";

export function DetailedAlbumView() {
  const { viewState } = state.getState();
  const album = getAlbum(viewState.albumId);
  const tracks = getTracks({ albumId: album.id }).sort(
    (a, b) => a.trackNumber - b.trackNumber,
  );

  const html = `
    <div id="detailed-album-view" class="padding">
      ${BackButton()}
      ${PhotoAndInfo(album)}
      ${AlbumArtist(album)}
      ${PlayAndShuffle()}
      ${AlbumTracks(tracks)}
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

function PhotoAndInfo(album) {
  return `
    <section class="row vertical center-align tiny-space">
      <img class="shape no-round"
      style="block-size: 16rem; inline-size: 16rem; object-fit: cover;" src="${album.cover}" alt="" />
      <div class="album-info">
        <h6 class="bold">${album.name}</h6>
        <div class="center-align">
          <span>${album.year}</span> - <span>${formatTime(album.duration)}</span>
        </div>
      </div>
    </section>
  `;
}

function AlbumArtist(album) {
  return `
    <section class="album-artist">
      <div class="album-artist-click" data-action="artists:artist-click" data-artist="${album.artist}" style="display: inline-flex; align-items: center; gap: 0.5rem;">
        <img class="circle extra"
        style="object-fit: cover;" src="${album.artistPhoto}" alt="" />
        <div class="artist-info">
          <h6 class="">${album.artist}</h6>
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

function AlbumTracks(tracks) {
  return `
    <section class="album-tracks">
      <div>
        <h6 class="bold">Tracks</h6>
      </div>
      <ul class="tracks-list no-padding">
        ${tracks.map((track, index) => TrackItem(track, { variant: "album", index: index + 1 })).join("")}
      </ul>
    </section>
  `;
}
