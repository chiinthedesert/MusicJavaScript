import { albums } from "../data.js";

/**
 * Lấy thông tin của một nghệ sĩ, bao gồm tên, ảnh bìa và danh sách album của họ.
 *
 * @param {string} name - Tên của nghệ sĩ cần tìm kiếm
 * @returns {{
 *   name: string,
 *   cover: string,
 *   albums: Array
 * } | null}
 */
export function getArtist(name) {
  const artistAlbums = albums.filter((album) => album.artist === name);

  if (artistAlbums.length === 0) return null;

  const totalTracks = artistAlbums.reduce(
    (sum, album) => sum + album.tracks.length,
    0,
  );

  return {
    name,
    cover: artistAlbums[0].artistPhoto,
    albums: artistAlbums,
    tracks: totalTracks,
  };
}
