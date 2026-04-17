import { playlists } from "../data.js";
import { getTracks } from "./getTracks.js";

export function getPlaylist(playlistId) {
  const playlist = playlists.find((item) => item.id === playlistId);
  if (!playlist) return null;

  const allTracks = getTracks();
  if (allTracks.length === 0) {
    return { ...playlist, duration: 0, items: [] };
  }

  const seed = Math.max(
    playlists.findIndex((item) => item.id === playlistId),
    0,
  );
  const start = (seed * 7) % allTracks.length;

  const items = Array.from(
    { length: Math.min(playlist.tracks, allTracks.length) },
    (_, index) => allTracks[(start + index) % allTracks.length],
  );

  const duration = items.reduce((total, track) => total + track.duration, 0);

  return {
    ...playlist,
    cover:
      typeof playlist.cover === "string" && playlist.cover.trim()
        ? playlist.cover
        : "./src/img/no-playlist.jpg",
    duration,
    items,
  };
}
