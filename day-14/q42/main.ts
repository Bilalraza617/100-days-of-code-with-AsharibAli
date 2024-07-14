let magicion: string[] = [
  "Chahat fateh ali khan",
  "RAhat fateh ali khan",
  "Nusrat Fateh ali kahn",
];

function showMAgisions(magicio: string[]) {
  magicio.forEach((magi) => console.log(magi));
}

function make_great(magicians: string[]) {
  magicians.forEach((magician) => console.log(`${magician} the Great`));
}

showMAgisions(magicion);
make_great(magicion);
