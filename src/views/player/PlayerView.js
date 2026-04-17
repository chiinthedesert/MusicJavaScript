import { getCurrentSong } from "../../utils/getCurrentSong.js";
import { formatTime } from "../../utils/formatTime.js";
import * as state from "../../state.js";

export function PlayerView() {
  const {
    favoriteSongs,
    currentSong,
    isPlaying,
    isShuffle,
    isRepeat,
    currentTime,
    isLyricsOpen,
  } = state.getState();

  const isFavorite = favoriteSongs.includes(
    `${currentSong?.albumId}:${currentSong?.id}`,
  );

  const song = getCurrentSong();
  const title = song?.title || "Unknown title";
  const artist = song?.artist || "Unknown artist";
  const cover = song?.cover || "src/img/no-song.jpg";
  const lyrics = song?.lyrics || null;

  const html = `
    <div id="player-view" class=""
    style="display: flex; flex-direction: column; height: 100dvh; max-width: 65rem; margin: 0 auto;">

      <div class="player-main left-padding right-padding" style="flex: 1; display: flex; flex-direction: column; justify-content: space-around;">
        ${BackButton()}
        ${AlbumCover(cover, isPlaying)}
        ${TitleAndArtist(title, artist, isFavorite)}
        ${Progress(currentTime, song)}
        ${PrevPlayNext(isPlaying)}
        ${OtherButtons(isShuffle, isRepeat)}
      </div>
      ${Lyrics(lyrics, isLyricsOpen)}
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

function AlbumCover(cover, isPlaying) {
  return `
    <div class="row no-margin center-align">
      <div class="shape sided-cookie12 ${isPlaying ? "rotate" : ""}"
      style="block-size: 16rem; inline-size: 16rem; object-fit: cover;"
      >
        <img id="player-view-cover" class=""
        style="" src="${cover}" alt="title" />
      </div>
    </div>
  `;
}

function TitleAndArtist(title, artist, isFavorite) {
  return `
    <div class="row no-margin">
      <div class="max">
        <div id="player-view-song-title" class="bold tiny-line"
          style="font-size: 1.25rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
            <span>${title}</span>
        </div>
        <div id="player-view-artist" class="no-line"
          style="font-size: 1.25rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
            <span>${artist}</span>
        </div>
      </div>
      <button data-action="player:favorite" class="circle extra ${isFavorite ? "active" : ""}">
        <i class="extra">favorite</i>
      </button>
    </div>
  `;
}

function Progress(currentTime, song) {
  return `
    <div class="progress">
      <progress class="wavy" value="${currentTime}" max="${song?.duration || 1}"></progress>
      <div class="row no-margin">
        <span class="max">${formatTime(currentTime)}</span>
        <span>${formatTime(song?.duration || 0)}</span>
      </div>
    </div>
  `;
}

function PrevPlayNext(isPlaying) {
  return `
    <div class="group row no-margin gap center-align" style="">
      <button data-action="player:prev" class="extra round">
        <i class="extra">skip_previous</i>
      </button>
      <button data-action="player:play-toggle" class="extra active" style="width: 6rem; height: 4rem;border-radius:2rem !important;">
        <i id="player-view-play-icon" class="extra">
          ${isPlaying ? "pause" : "play_arrow"}</i>
        <span class="bold">
          ${isPlaying ? "Pause" : "Play"}
        </span>
      </button>
      <button data-action="player:next" class="extra round">
        <i class="extra">skip_next</i>
      </button>
    </div>
    `;
}

function OtherButtons(isShuffle, isRepeat) {
  return `
    <div class="row no-margin gap">
      <div class="group max">
        <button data-action="player:queue" class="left-round">
          <i>queue_music</i>
        </button>
        <button data-action="player:shuffle" class="no-round ${isShuffle ? "active" : ""}">
          <i>shuffle</i>
        </button>
        <button data-action="player:repeat" class="right-round ${isRepeat ? "active" : ""}">
          <i>repeat</i>
        </button>
      </div>
      <button data-action="player:menu" class="circle">
        <i>more_vert</i>
      </button>
    </div>
    `;
}

function Lyrics(lyrics, isLyricsOpen) {
  return `
    <div id="lyrics-bar" class="lyrics-bar secondary small-padding top-round center-align" 
      style="margin-top: auto; 
      border-bottom-left-radius:0 !important;
      border-bottom-right-radius:0 !important;"
    >
      ${
        isLyricsOpen
          ? `
          <div class="lyrics-space secondary padding" style="
            white-space: pre-line;
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            width: 100%;
            height: 55dvh;
            padding-bottom: 2rem !important;
            overflow-y: auto;
          ">
            <h6>${lyrics || "No lyrics"}</h6>
          </div>
          `
          : ""
      }
      <button class="lyrics-button" data-action="player:lyrics-toggle">
        <span style="font-size: 1.25rem; font-weight: bold;">
          ${isLyricsOpen ? "close lyrics" : "show lyrics"} /ᐠ > ˕ <マ
        </span>
      </button>
    </div>
  `;
}
