export function ArtistCard(artist, variant = "home") {
  return `
    <div data-action="artists:artist-click" data-artist="${artist.name}" class="card artist-card ${variant}"
    style="flex: 0 0 clamp(8rem, 35vw, 12rem); min-width: 0;">
      <div class="artist-photo responsive circle" style="aspect-ratio: 1 / 1;">
        <img 
          class=""
          style="width: 100%; height: 100%; object-fit: cover;"
          src="${artist.cover}" 
          alt="${artist.name}" 
        />
      </div>

      <div class="artist-info center-align">
        <div class="artist-name bold"
        style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
          <span>${artist.name}</span>
        </div>
      </div>
    </div>
  `;
}
