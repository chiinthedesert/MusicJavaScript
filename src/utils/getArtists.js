import { albums } from "../data.js";

/**
 * Lấy danh sách tất cả nghệ sĩ, kèm album của họ
 *
 * @returns {Array<{
 *   name: string,
 *   cover: string,
 *   albums: Array
 * }>}
 */
export function getArtists() {
  const map = new Map();

  albums.forEach((album) => {
    // Nếu chưa có artist trong map → tạo mới
    if (!map.has(album.artist)) {
      map.set(album.artist, {
        name: album.artist,
        cover: album.artistPhoto,
        albums: [],
        tracks: 0,
      });
    }

    // Lấy artist ra và thêm album vào danh sách của họ
    map.get(album.artist).albums.push(album);

    // Cập nhật số lượng track của artist
    map.get(album.artist).tracks += album.tracks.length;
  });

  // Trả về mảng artist
  return Array.from(map.values());
}
