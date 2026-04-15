import * as state from "../state.js";

export function NavBar() {
  const { currentView } = state.getState();

  const hidden =
    currentView === "player" ||
    currentView === "detailedArtist" ||
    currentView === "detailedAlbum"
      ? "none"
      : "";

  const html = `
    <nav class="navbar small-padding secondary row top-round center-align"
      style="display: ${hidden}; border-bottom-left-radius: 0 !important; border-bottom-right-radius: 0 !important;">

      ${NavButton("home", "home", currentView)}
      ${NavButton("songs", "library_music", currentView)}
      ${NavButton("albums", "album", currentView)}
      ${NavButton("playlists", "queue_music", currentView)}
      ${NavButton("artists", "artist", currentView)}

    </nav>
  `;

  document.getElementById("navbar").innerHTML = html;
}

function NavButton(view, icon, currentView) {
  const active = view === currentView ? "fill" : "";

  return `
    <button class="button ${active}"
      data-action="nav:go"
      data-view="${view}">
      <i>${icon}</i>
    </button>
  `;
}

export function handleNavBarAction(action, el) {
  if (!action.startsWith("nav:")) return;
  switch (action) {
    case "nav:go":
      state.setState({
        currentView: el.dataset.view,
        viewState: {},
      });
      break;
  }
}
