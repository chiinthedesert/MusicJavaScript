export function DetailedAlbumView(album) {
  const html = `
    <div class="album-detail">

      <div class="album-header">
        <img src="${album.image}" class="album-cover"/>

        <p class="album-type">Album</p>
        <h1 class="album-title">${album.title}</h1>
        <p class="album-artist">${album.artist} • ${album.year}</p>
      </div>

      <div class="album-controls">
        <button class="play-btn">
          <i class="material-icons">play_arrow</i>
        </button>
      </div>

      <div class="song-list">

        <div class="song-header">
          <span>#</span>
          <span>Title</span>
          <span class="time">
            <i class="material-icons">schedule</i>
          </span>
        </div>

        ${album.songs.map((song, index) => `
          <div class="song-item">
            
            <div class="song-index">${index + 1}</div>

            <div class="song-info">
              <div class="song-title">${song.title}</div>
              <div class="song-artist">${album.artist}</div>
            </div>

            <div class="song-duration">${song.duration}</div>

          </div>
        `).join("")}

      </div>

    </div>
  `;

  document.getElementById("view").innerHTML = html;
  document.getElementById("navbar").style.display = "none";
}