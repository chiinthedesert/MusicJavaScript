# Thiết kế web app nghe nhạc ngoại tuyến theo Material Design

## Những việc cần làm
- [x] chỉnh giao diện cho phù hợp với màn hình desktop
- [ ] logic queue đơn giản
- [ ] viết README đầy đủ, giải thích code album view, artist view và detailed album view để làm mẫu
- [ ] animation khi chuyển đổi giữa các view, hover
- [ ] animation cho thanh progress
- [x] home view
  - [x] giao diện
  - [x] logic click để vào các view khác
- [x] player view
  - [x] giao diện
  - [x] interaction với các button play/pause, next, previous, shuffle, repeat mô phỏng
  - [x] lyrics
- [x] songs view
  - [x] giao diện
  - [x] logic click để vào detail song view
- [x] albums view
  - [x] giao diện
  - [x] logic click để vào detail album view
  - [x] cần style tốt hơn
- [x] artists view
  - [x] giao diện
  - [x] logic click để vào detail artist view
  - [x] cần style tốt hơn
- [x] detail artist view
  - [x] giao diện
- [x] detail album view
  - [x] giao diện
  - [x] cần style tốt hơn
- [x] playlists view
- [x] search
- [ ] settings view

## Cách web được thiết kế
- Sử dụng [BeerCSS](https://beercss.com/) để thiết kế giao diện theo Material Design
- Phần layout (tức là không có style) được làm trên [Figma](https://www.figma.com/design/VHeDromqlylH1M2kEWZUKF/MusicJS?m=auto&t=YHQhjtbVFaDoRymq-6)

Vì là một web app nghe nhạc ngoại tuyến nên sẽ nhất nhiều giao diện, không thể làm nhiều file html rồi link chúng lại với nhau được, nên sẽ sử dụng một file html duy nhất, sau đó dùng JavaScript để điều khiển việc hiển thị các view khác nhau. Cách làm này cũng giúp cho việc chuyển đổi giữa các view trở nên mượt mà hơn, không cần phải tải lại trang.

## Cách tổ chức code

- [index.html](./index.html): file html duy nhất chứa tất cả các view, sau đó sẽ dùng JavaScript để điều khiển việc hiển thị các view khác nhau
- [main.js](./src/main.js): file JavaScript dùng module để quản lý code, mỗi view sẽ có một module riêng, sau đó sẽ import vào main.js để điều khiển việc hiển thị các view khác nhau
- [main.css](./styles/main.css): file css chứa style chung cho toàn bộ web
- [state.js](./src/state.js): file JavaScript chứa state của web, bao gồm các biến lưu trữ thông tin về bài hát đang phát, view hiện tại, v.v.
- [data.js](./src/data.js): file JavaScript chứa dữ liệu mẫu về bài hát, album, nghệ sĩ, v.v. để phục vụ cho việc phát triển và thử nghiệm
- Các file *View.js sẽ chứa code về giao diện
- Các file handle*.js sẽ chứa code về logic xử lý các sự kiện click, hover, v.v. của view đó

Hầu hết phần styling và layout đều được làm trên chính js, beercss và inline css với những lý do sau:
- Dễ dàng điều chỉnh giao diện cho từng thành phần mà không ảnh hưởng đến các thành phần khác
- Dễ dàng tạo ra các component có thể tái sử dụng được, ví dụ như albumCard, artistCard, playlistCard, trackItem, v.v.
- Khi viết code không phải chuyển đi chuyển lại giữa các files gây tốn thời gian

```
.
├── index.html
├── README.md
├── src
│   ├── components
│   │   ├── albumCard.js
│   │   ├── artistCard.js
│   │   ├── navBar.js
│   │   ├── playerBar.js
│   │   ├── playlistCard.js
│   │   ├── searchBar.js
│   │   └── trackItem.js
│   ├── data.js
│   ├── img
│   │   ├── artists
│   │   │   ├── illit.jpg
│   │   │   ├── radiohead.jpg
│   │   │   ├── radwimps.jpg
│   │   │   ├── sufjan-stevens.jpg
│   │   │   ├── the-beach-boys.webp
│   │   │   └── the-beatles.jpg
│   │   ├── covers
│   │   │   ├── acoustic-sunday.jpg
│   │   │   ├── carrie-lowell.jpg
│   │   │   ├── ill-like-you.jpg
│   │   │   ├── jpop-kicks.jpg
│   │   │   ├── kpop-spark.png
│   │   │   ├── not-cute-anymore.png
│   │   │   ├── ok-computer.png
│   │   │   ├── pet-sounds.jpg
│   │   │   ├── rainy-day-loop.jpg
│   │   │   ├── rubber-soul.jpg
│   │   │   ├── soft-morning.webp
│   │   │   ├── study-focus.png
│   │   │   ├── super-real-me.jpg
│   │   │   └── your-name.jpg
│   │   ├── no-playlist.jpg
│   │   ├── no-playlist.png
│   │   └── no-song.jpg
│   ├── main.js
│   ├── state.js
│   ├── utils
│   │   ├── formatTime.js
│   │   ├── getAlbum.js
│   │   ├── getAlbums.js
│   │   ├── getArtist.js
│   │   ├── getArtists.js
│   │   ├── getCurrentSong.js
│   │   ├── getPlaylist.js
│   │   ├── getPlaylists.js
│   │   ├── getTracks.js
│   │   ├── previousView.js
│   │   └── sortItems.js
│   └── views
│       ├── albums
│       │   ├── AlbumsView.js
│       │   └── handleAlbumsAction.js
│       ├── artists
│       │   ├── ArtistsView.js
│       │   └── handleArtistsAction.js
│       ├── detailedAlbum
│       │   └── DetailedAlbumView.js
│       ├── detailedArtist
│       │   └── DetailedArtistView.js
│       ├── detailedPlaylist
│       │   └── DetailedPlaylistView.js
│       ├── home
│       │   ├── handleHomeAction.js
│       │   └── HomeView.js
│       ├── player
│       │   ├── handlePlayerAction.js
│       │   └── PlayerView.js
│       ├── playlists
│       │   ├── handlePlaylistsAction.js
│       │   └── PlaylistsView.js
│       └── songs
│           ├── handleSongsAction.js
│           ├── handleSongsHover.js
│           └── SongsView.js
└── styles
    └── main.css

18 directories, 63 files
```
## cách chạy web
1. Clone repository này về máy tính của bạn
2. Mở file index.html bằng trình duyệt web (như Chrome, Firefox, v.v.)
3. Bạn sẽ thấy giao diện của web, có thể click vào các phần khác nhau để xem các view khác nhau, ví dụ như Home, Songs, Albums, Artists, Playlists, v.v.
4. Trong mỗi view, bạn có thể click vào các phần tử khác nhau để xem chi tiết hơn, ví dụ như click vào một album để xem chi tiết album, click vào một nghệ sĩ để xem chi tiết nghệ sĩ, v.v.
5. Bạn cũng có thể click vào thanh player ở dưới cùng để xem giao diện player, và tương tác với các button play/pause, next, previous, shuffle, repeat mô phỏng, cũng như xem lyrics
6. Bạn có thể thử nghiệm với các dữ liệu mẫu về bài hát, album, nghệ sĩ, v.v. được lưu trữ trong file data.js để xem cách web hoạt động với các dữ liệu khác nhau<br>
Code trên chính github được deploy bằng netlify, bạn có thể truy cập web tại địa chỉ: [https://musicjavascript.netlify.app/](https://musicjavascript.netlify.app/)

## Những khó khăn gặp phải và chưa giải quyết
- [ ] Chính vì là SPA nên cập nhật URL khi chuyển đổi trang chưa được xử lý, (tương lại dùng history api???) 
- [ ] Reload trang web sẽ bị mất state, nên cần phải lưu state vào localStorage hoặc sessionStorage để khi reload trang có thể lấy lại được state cũ
- [ ] Logic queue chưa có thời gian để làm, nên prev and next button không hoạt động
- [ ] Chưa có animation khi chuyển đổi giữa các view, hover, v.v. (nhưng với mong muốn về thiết kế tối giản thì có lẽ không cần thiết, mất performance)
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<del>mất ngủ vì làm bài tập nhóm, không thích bài tập nhóm /ᐠ ╥ ˕ ╥マ | (ง ͠ಥ_ಥ)ง | (◞‸ ◟)💧</del>
