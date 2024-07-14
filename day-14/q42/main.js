var magicion = [
    "Chahat fateh ali khan",
    "RAhat fateh ali khan",
    "Nusrat Fateh ali kahn",
];
function showMAgisions(magicio) {
    magicio.forEach(function (magi) { return console.log(magi); });
}
function make_great(magicians) {
    magicians.forEach(function (magician) { return console.log("".concat(magician, " the Great")); });
}
showMAgisions(magicion);
make_great(magicion);
