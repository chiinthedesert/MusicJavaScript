import { getPlaylist } from "../../utils/getPlaylist.js";
import { formatTime } from "../../utils/formatTime.js";
import { TrackItem } from "../../components/trackItem.js";
import * as state from "../../state.js";

export function DetailedPlaylistView() {
  const { viewState } = state.getState();
  const playlist = getPlaylist(viewState.playlistId);

  if (!playlist) {
    document.getElementById("view-container").innerHTML = `
      <div id="detailed-playlist-view" class="padding">
        ${BackButton()}
        <h6 class="bold">Playlist not found.</h6>
      </div>
    `;
    return;
  }

  const html = `
    <div id="detailed-playlist-view" class="padding">
      ${BackButton()}
      ${PhotoAndInfo(playlist)}
      ${PlayAndShuffle()}
      ${EditButton()}
      ${PlaylistTracks(playlist.items)}
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

function PhotoAndInfo(playlist) {
  return `
    <section class="row vertical center-align tiny-space">
      <img class="shape no-round"
        style="block-size: 16rem; inline-size: 16rem; object-fit: cover;" src="${playlist.cover}" alt="${playlist.name}" />
      <div class="playlist-info center-align">
        <h6 class="bold">${playlist.name}</h6>
        <div>
          <span>${playlist.curator}</span> - <span>${playlist.tracks} tracks</span> - <span>${formatTime(playlist.duration)}</span>
        </div>
      </div>
    </section>
  `;
}

function PlayAndShuffle() {
  return `
    <div class="play-buttons row center-align">
      <button data-action="songs:play-all" class="shape sided-cookie6 medium active">
        <i class="extra">play_arrow</i>
      </button>
      <button data-action="songs:shuffle" class="shape sided-cookie12 medium">
        <i class="extra">shuffle</i>
      </button>
    </div>
  `;
}

function EditButton() {
  return `
    <div class="edit-button-container row center-align">
      <button data-action="playlists:edit" class="shape sided-cookie4 medium">
        <i class="extra">edit</i>
      </button>
    </div>
  `;
}

function PlaylistTracks(tracks) {
  return `
    <section class="playlist-tracks">
      <div>
        <h6 class="bold">Tracks</h6>
      </div>
      <ul class="tracks-list no-padding">
        ${tracks.map((track) => TrackItem(track)).join("")}
      </ul>
    </section>
  `;
}
