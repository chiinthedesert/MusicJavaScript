import { albums } from "../data.js";

/**
 * Lấy danh sách tất cả các track từ tất cả các album, có thể lọc theo tên nghệ sĩ nếu được cung cấp.
 * (sau nay có thể mở rộng thêm filter theo album, duration,...)
 * Mỗi track sẽ bao gồm thông tin về id, title, duration, lyrics (nếu có), albumId, artist và cover của album.
 *
 * @param {Object} [options]
 * @param {string} [options.artist] - Tên nghệ sĩ để lọc track. Nếu không cung cấp, sẽ trả về tất cả track từ tất cả album.
 *
 * @returns {Array<{
 *   id: string,
 *   title: string,
 *   duration: number,
 *   lyrics?: string,
 *   albumId: string,
 *   artist: string,
 *   cover: string
 * }>}
 */
export function getTracks({ artist, albumId } = {}) {
  let filteredAlbums = albums;

  if (artist) {
    filteredAlbums = filteredAlbums.filter((album) => album.artist === artist);
  }

  if (albumId) {
    filteredAlbums = filteredAlbums.filter((album) => album.id === albumId);
  }

  return filteredAlbums.flatMap((album) =>
    album.tracks.map((track) => ({
      ...track,
      albumId: album.id,
      album: album.name,
      artist: album.artist,
      cover: album.cover,
    })),
  );
}
