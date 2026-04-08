import * as state from "../state.js";
import { renderView } from "../main.js";

export function NavBar() {
  var html = `
      <nav class="navbar padding secondary row center-align space-around">
        <button class="button transparent" data-view="home">
          <i>home</i>
        </button>

        <button class="button transparent" data-view="songs">
          <i>library_music</i>
        </button>

        <button class="button transparent" data-view="albums">
          <i>album</i>
        </button>

        <button class="button transparent" data-view="playlists">
          <i>queue_music</i>
        </button>

        <button class="button transparent" data-view="artists">
          <i>artist</i>
        </button>
      </nav>
    `;
  document.getElementById("navbar").insertAdjacentHTML("afterbegin", html);

  document.querySelectorAll("#navbar button").forEach((button) => {
    button.onclick = () => {
      state.setState({ currentView: button.dataset.view });

      renderView();
      renderNavBar();
    };
  });
}

export function renderNavBar() {
  document.querySelectorAll("#navbar button").forEach((button) => {
    const isActive = button.dataset.view === state.getState().currentView;
    button.classList.toggle("active", isActive);
    button.classList.toggle("primary", isActive);
  });
}
