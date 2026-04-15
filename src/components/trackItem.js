import { formatTime } from "../utils/formatTime.js";
import * as state from "../state.js";

export function TrackItem(track, { variant = "default", index } = {}) {
  const { currentSong } = state.getState();
  const { isPlaying } = state.getState();

  const isActive =
    currentSong &&
    currentSong.albumId === track.albumId &&
    currentSong.id === track.id;

  return `
    <li class="track-item no-round row tiny-space ${isActive ? "secondary-container" : ""}"
    data-action="songs:track-play"
    data-id="${track.albumId}_${track.id}"
    >
      ${Cover(track, isActive, isPlaying, variant, index)}
      ${TitleAndArtist(track)}
      ${Duration(track)}
      ${Menu()}
    </li>
  `;
}

function Cover(track, isActive, isPlaying, variant, index) {
  if (variant === "album") {
    return `
      <div class="center-align middle-align"
        style="width: 3.5rem; height: 3.5rem;>
        <span">${index}</span>
      </div>
    `;
  }
  return `
    <div class="shape ${isActive ? "sided-cookie12" : "no-round"} ${isPlaying ? "rotate" : ""} transparent" 
      style="">
      <img 
      src="${track.cover}" 
        class=""
        style="object-fit: cover;"
      />
    </div>
  `;
}

function TitleAndArtist(track) {
  return `
    <div class="max" style="min-width: 0;">

      <div class="track-item-title bold tiny-line"
        style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
        <span>${track.title}</span>
      </div>

      <div class="track-item-artist no-line"
        style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
        ${track.artists.map((artist) => `<span>${artist}</span>`).join(", ")}
      </div>

    </div>
  `;
}

function Duration(track) {
  return `
    <div class="track-duration small-text">
      ${formatTime(track.duration)}
    </div>
  `;
}
function Menu() {
  return `
    <button data-action="songs:track-menu" class="circle transparent">
      <i>more_vert</i>
    </button>
  `;
}
