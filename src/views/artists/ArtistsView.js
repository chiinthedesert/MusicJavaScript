import { SearchBar } from "../../components/searchBar.js";
import { albums } from "../../data.js";
import { AlbumCard } from "../../components/albumCard.js";

let keyword = "";

export function ArtistsView() {
  render();
}
  function render() {
    const artists = getArtists();
    
    const html = `
      <div class="container artists-view">
        ${SearchBar()}
        ${ArtistsHeader()}
        ${ArtistsGrid(artists)}
      </div>
    `;
    document.getElementById("view").innerHTML = html;
    attachEvents();
  }

  function ArtistsHeader() {
    return `
      <div class="section-header row">
        <h6 class="bold max">Artists</h6>
      </div>
    `;
    }

  function ArtistsGrid(list) {
      return `
        <div class="grid-list row wrap">
          ${list.length > 0
            ? list.map((artist) => ArtistCard(artist, "artists")).join("")
            : `<p style="padding: 20px;">No artists found</p>`}
        </div>
      `;
  }

  function getArtists() { 
    const map = new Map();
    albums.forEach((album) => {
      if (!map.has(album.artist)) {map.set(album.artist, {name: album.artist, cover: album.artistPhoto,});
      }
    });

let result = Array.from(map.values());
  if (keyword.trim() !== "") {
    result = result.filter(function(artist) {
      const name = artist.name.toLowerCase();
      const searchWord = keyword.toLowerCase();

  if (name.includes(searchWord)) {
    return true;} 
  else {return false;}
  });
}  
