var list = ["Bilal", "Sheriyans", "Chahat fateh ali khan"];
console.log("Suno suno I found a bigger dinner table.");
// Add guest in biginnig
list.unshift("Hitesh chudary");
// Add guest in middle
list.splice(list.length / 2, 0, "Ali hamza");
// Add guest in end
list.push("Amad kabari");
//print invitation massage
list.forEach(function (list) {
    console.log(list + " bhai rat ko ajana sath khany khaiy gy.");
});
