function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
var album1 = make_album("Nooor jahan", "Hum tumhary he sanam", 99);
var album2 = make_album("Sinkar sanm", "Bodyguard");
var album3 = make_album("Ahmad ghanzeb", "Tera mera he piyar amar", 1);
console.log(album1);
console.log(album2);
console.log(album3);
