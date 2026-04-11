import * as state from "../state.js";
import { albums } from "../data.js";

export function getCurrentSong() {
  const { currentSong } = state.getState();
  if (!currentSong) return null;

  const album = albums.find((album) => album.id === currentSong.albumId);
  if (!album) return null;

  const track = album.tracks.find((track) => track.id === currentSong.id);
  if (!track) return null;

  return {
    title: track.title,
    artist: album.artist,
    cover: album.cover,
  };
}
