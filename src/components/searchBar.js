import * as state from "../state.js";

export function SearchBar() {
  const { search, currentView } = state.getState();

  return `
    <div id="search-bar" class="search-bar">
      <div class="field round fill prefix">
        <i>menu</i>
        <input 
          id="search-input"
          type="text"
          placeholder="Search your music"
          value="${search[currentView] || ""}"
        />
      </div>
    </div>
  `;
}
