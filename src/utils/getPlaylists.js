import { playlists } from "../data.js";

export function getPlaylists({ curator } = {}) {
  let result = playlists;

  if (curator) {
    result = result.filter((playlist) => playlist.curator === curator);
  }

  return result.map((playlist) => ({
    ...playlist,
    cover:
      typeof playlist.cover === "string" && playlist.cover.trim()
        ? playlist.cover
        : "./src/img/no-playlist.jpg",
  }));
}
