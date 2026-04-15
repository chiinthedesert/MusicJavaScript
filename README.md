# Thiết kế web app nghe nhạc ngoại tuyến theo Material Design

## Những việc cần làm
- [ ] thiết kế giao diện cho desktop
- [ ] logic queue đơn giản
- [ ] viết README đầy đủ, giải thích code album view, artist view và detailed album view để làm mẫu
- [ ] animation khi chuyển đổi giữa các view, hover
- [ ] animation cho thanh progress
- [x] home view
  - [x] giao diện
  - [x] logic click để vào các view khác
- [ ] player view
  - [x] giao diện
  - [ ] logic click các buttons
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
- [ ] search view
- [ ] settings view
- [ ] playlists view

## Cách web được thiết kế
- Sử dụng [BeerCSS](https://beercss.com/) để thiết kế giao diện theo Material Design
- Phần layout (tức là không có style) được làm trên [Figma](https://www.figma.com/design/VHeDromqlylH1M2kEWZUKF/MusicJS?m=auto&t=YHQhjtbVFaDoRymq-6)

Vì là một web app nghe nhạc ngoại tuyến nên sẽ nhất nhiều giao diện, không thể làm nhiều file html rồi link chúng lại với nhau được, nên sẽ sử dụng một file html duy nhất, sau đó dùng JavaScript để điều khiển việc hiển thị các view khác nhau. Cách làm này cũng giúp cho việc chuyển đổi giữa các view trở nên mượt mà hơn, không cần phải tải lại trang.

## Cách tổ chức code

- [index.html](./index.html): file html duy nhất chứa tất cả các view, sau đó sẽ dùng JavaScript để điều khiển việc hiển thị các view khác nhau
- [main.js](./src/main.js): file JavaScript dùng module để quản lý code, mỗi view sẽ có một module riêng, sau đó sẽ import vào main.js để điều khiển việc hiển thị các view khác nhau
- [main.css](./styles/main.css): file css chứa style chung cho toàn bộ web app
- [state.js](./src/state.js): file JavaScript chứa state của web app, bao gồm các biến lưu trữ thông tin về bài hát đang phát, view hiện tại, v.v.
- [data.js](./src/data.js): file JavaScript chứa dữ liệu mẫu về bài hát, album, nghệ sĩ, v.v. để phục vụ cho việc phát triển và thử nghiệm
```
.
├── index.html
├── README.md
├── styles/
│   └── main.css

├── src/
│   ├── main.js
│   ├── state.js
│   ├── data.js

│   ├── components/
│   │   ├── albumCard.js
│   │   ├── artistCard.js
│   │   ├── navBar.js
│   │   ├── playerBar.js
│   │   ├── searchBar.js
│   │   └── trackItem.js

│   ├── views/
│   │   ├── home/
│   │   │   ├── home.js
│   │   │   └── handleHomeAction.js
│   │   ├── songs/
│   │   │   ├── SongsView.js
│   │   │   ├── handleSongsAction.js
│   │   │   └── handleSongsHover.js
│   │   ├── albums/
│   │   │   └── AlbumsView.js
│   │   ├── artists/
│   │   │   └── ArtistsView.js
│   │   ├── detailedAlbum/
│   │   │   └── DetailedAlbumView.js
│   │   ├── detailedArtist/
│   │   │   └── DetailedArtistView.js
│   │   ├── player/
│   │   │   ├── PlayerView.js
│   │   │   └── handlePlayerAction.js
│   │   └── playlists/
│   │       └── PlaylistsView.js

│   ├── utils/
│   │   ├── formatTime.js
│   │   ├── getAlbum.js
│   │   ├── getArtist.js
│   │   ├── getCurrentSong.js
│   │   ├── getTracks.js
│   │   ├── previousView.js
│   │   └── sortItems.js

│   └── img/
│       ├── artists/
│       ├── covers/
│       └── no-song.jpg
```

- Các file *View.js sẽ chứa code về giao diện
- Các file handle*.js sẽ chứa code về logic xử lý các sự kiện click, hover, v.v. của view đó
