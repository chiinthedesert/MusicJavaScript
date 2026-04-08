import { albums } from "../data.js";
import { SearchBar } from "../components/searchBar.js";

export function HomeView() {
  return `
    <div class="container home-view">
      ${SearchBar()}
    </div>
  `;
}

function QuickActions() {}
function CurrentAlbums() {}
function CurrentArtists() {}
