export function PlaylistCard(playlist, variant = "playlists") {
  return `
    <div data-action="playlist-click" data-playlist-id="${playlist.id}" class="playlist-card ${variant}"
      style="flex: 0 0 clamp(8rem, 35vw, 12rem); min-width: 0;">
      <div class="playlist-cover square round" style="aspect-ratio: 1 / 1;">
        <img style="width: 100%; height: 100%; object-fit: cover;" src="${playlist.cover}" alt="${playlist.name}"/>
      </div>

      <div class="playlist-info">
        <div class="playlist-name bold tiny-line"
          style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
          <span>${playlist.name}</span>
        </div>

        <div class="playlist-meta no-line"
          style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
          <span>${playlist.curator}</span> • <span>${playlist.tracks} tracks</span>
        </div>
      </div>
    </div>
  `;
}
