export function AlbumCard(album, variant = "home") {
  return `
    <div data-action="album-click" data-album-id="${album.id}" class="album-card ${variant}"
    style="flex: 0 0 clamp(8rem, 35vw, 12rem); min-width: 0;">
      <div class="album-cover square round" style="aspect-ratio: 1 / 1;">
        <img style="width: 100%; height: 100%; object-fit: cover;" src="${album.cover}" alt="${album.name}" />
      </div>

      <div class="album-info">
        <div class="album-name bold tiny-line"
        style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
          <span>${album.name}</span>
        </div>

        <div class="album-artist no-line"
        style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
          <span>${album.artist}</span>
        </div>
      </div>

    </div>
  `;
}
