import * as state from "../state.js";

export function NavBar() {
  const html = `
      <nav class="navbar padding secondary row top-round center-align" style="">
        <button class="button" data-view="home">
          <i>home</i>
        </button>

        <button class="button" data-view="songs">
          <i>library_music</i>
        </button>

        <button class="button " data-view="albums">
          <i>album</i>
        </button>

        <button class="button " data-view="playlists">
          <i>queue_music</i>
        </button>

        <button class="button " data-view="artists">
          <i>artist</i>
        </button>
      </nav>
    `;
  document.getElementById("navbar").insertAdjacentHTML("beforeend", html);

  document.querySelectorAll("#navbar button").forEach((button) => {
    button.onclick = () => {
      state.setState({ currentView: button.dataset.view });
    };
  });
}

export function renderNavBar() {
  document.querySelectorAll("#navbar button").forEach((button) => {
    const isActive = button.dataset.view === state.getState().currentView;
    button.classList.toggle("fill", isActive);
  });
}
