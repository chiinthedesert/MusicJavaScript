export function AlbumCard(album, variant = "home") {
  return `
    <div class="album-card ${variant}">
      <div class="album-cover">
        <img src="${album.cover}" alt="${album.name}" />
      </div>

      <div class="album-info">
        <div class="album-name">${album.name}</div>
        <div class="album-artist">${album.artist}</div>
      </div>
    </div>
  `;
}
