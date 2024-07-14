interface Album {
  artist: string;
  title: string;
  tracks?: number;
}

function make_album(artist: string, title: string, tracks?: number) {
  let album: Album = {
    artist: artist,
    title: title,
  };

  if (tracks !== undefined) {
    album.tracks = tracks;
  }

  return album;
}

let album1 = make_album("Nooor jahan", "Hum tumhary he sanam", 99);
let album2 = make_album("Sinkar sanm", "Bodyguard");
let album3 = make_album("Ahmad ghanzeb", "Tera mera he piyar amar", 1);

console.log(album1);
console.log(album2);
console.log(album3);
