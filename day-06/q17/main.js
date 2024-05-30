// Q14 ans:
var list = ["Hitesh chudray", "Sheriyans", "Chahat fateh ali khan"];
list.forEach(function (name) {
    console.log("Mr " +
        name +
        " meri taraf sy dinner ki dawat ko qabol kary or aj rat ka khan mery sath khaiy.");
});
//Q15 ans
console.log("Suno logo ".concat(list[0], " dinner pr nahi aiy ga."));
list[list.indexOf("Hitesh chudray")] = "Bilal";
for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
    var item = list_1[_i];
    console.log("".concat(item, " bhai agr hitesh nahi araha to to kia howa ap ajao."));
}
//Q 16 ANS
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
// Q17
console.log("Bhaiyon program to wargaya he me sirf 2 bando ko hi dinner pr bola sakta ho.\n");
// Remove guest
for (var i = list.length; i >= 3; i--) {
    var element = list.pop();
    console.log("Ary " + element + " bahi aj rehny do agli bar sath dinner kary gy.");
}
list.forEach(function (guest) {
    console.log("".concat(guest, " kuch bhi ho jaiy tujhy aj ana he."));
});
list.splice(0, list.length);
console.log(list); // empty array
