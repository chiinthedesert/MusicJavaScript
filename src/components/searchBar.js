import { html } from "../utils/html.js";
export function SearchBar() {
  return html`
    <div class="padding">
      <div class="field round fill prefix">
        <i>menu</i>
        <input id="search-input" type="text" placeholder="Search your music" />
      </div>
    </div>
  `;
}
