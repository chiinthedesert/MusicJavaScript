import { getCurrentSong } from "../utils/getCurrentSong.js";
import { previousView } from "../utils/previousView.js";
import * as state from "../state.js";

export function PlayerView() {
  const html = `
    <div id="player-view" class="player-view"
    style="display: flex; flex-direction: column; height: 100dvh;">
      <div>
      </div>
      <div class="player-main left-padding right-padding" style="flex: 1; display: flex; flex-direction: column; justify-content: space-evenly;">
        <div class="row center-align">
          <img id="player-view-cover" class="shape sided-cookie12"
          style="block-size: 16rem; inline-size: 16rem; object-fit: cover;" src="" alt="" />
        </div>

        <div class="row no-margin">
          <div class="max">
            <div id="player-view-song-title" class="bold tiny-line"
              style="font-size: 1.25rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                <span></span>
            </div>
            <div id="player-view-artist" class="no-line"
              style="font-size: 1.25rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                <span></span>
            </div>
          </div>
          <button class="circle extra">
            <i class="extra">favorite</i>
          </button>
        </div>

        <progress class="wavy" value="30" max="100"></progress>

        <div class="group row no-margin gap center-align" style="">
          <button class="extra round">
            <i class="extra">skip_previous</i>
          </button>
          <button id="player-view-play-button" class="extra active" style="width: 6rem; height: 4rem;border-radius:2rem !important;">
            <i id="player-view-play-icon" class="extra">play_arrow</i>
            <span class="bold">Play</span>
          </button>
          <button class="extra round">
            <i class="extra">skip_next</i>
          </button>
        </div>

        <div class="row no-margin gap">
          <div class="group max">
            <button class="left-round">
              <i>queue_music</i>
            </button>
            <button class="no-round">
              <i>shuffle</i>
            </button>
            <button class="right-round">
              <i>repeat</i>
            </button>
          </div>
          <button class="circle">
            <i>more_vert</i>
          </button>
        </div>
      </div>

      <div id="lyrics-space" class="secondary top-padding bottom-padding top-round center-align" 
      style="margin-top: auto;">
        <span style="font-size: 1.25rem; font-weight: bold;">Wanna see lyrics</span>
      </div>
    </div>
  `;
  document.getElementById("view").innerHTML = html;

  const playerView = document.querySelector(".player-view");
  let startY = 0;
  let currentY = 0;
  playerView.addEventListener("touchstart", (e) => {
    startY = e.touches[0].clientY;
  });
  playerView.addEventListener("touchmove", (e) => {
    currentY = e.touches[0].clientY;
  });
  playerView.addEventListener("touchend", () => {
    const diff = currentY - startY;

    if (diff > 100) {
      previousView();
    }
  });
  renderPlayerView();
}

export function renderPlayerView() {
  const { isPlaying } = state.getState();
  const data = getCurrentSong();

  const titleDiv = document.getElementById("player-view-song-title");
  const artistDiv = document.getElementById("player-view-artist");
  const cover = document.getElementById("player-view-cover");
  const playButton = document.getElementById("player-view-play-button");
  const playIcon = document.getElementById("player-view-play-icon");

  const title = titleDiv.querySelector("span");
  const artist = artistDiv.querySelector("span");

  playButton.onclick = () => {
    const { isPlaying } = state.getState();
    state.setState({ isPlaying: !isPlaying });
  };

  if (!data) {
    title.textContent = "No song";
    artist.textContent = "";
    cover.src = "src/img/no-song.jpg";
  } else {
    title.textContent = data.title;
    artist.textContent = data.artist;
    cover.src = data.cover;
  }

  if (isPlaying) {
    cover.classList.add("rotate");
  } else {
    cover.classList.remove("rotate");
  }
  playIcon.textContent = isPlaying ? "pause" : "play_arrow";
}
