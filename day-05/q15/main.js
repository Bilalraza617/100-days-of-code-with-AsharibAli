// Q14 ans:
var list = ["Hitesh chudray", "Sheriyans", "Chahat fateh ali khan"];
list.forEach(function (name) {
    console.log("Mr " +
        name +
        " meri taraf sy dinner ki dawat ko qabol kary or aj rat ka khan mery sath khaiy.");
});
//Q15 ans
console.log("Suno logo ".concat(list[0], " dinner pr nahi aiy ga"));
list[list.indexOf("Hitesh chudray")] = "Bilal";
for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
    var item = list_1[_i];
    console.log("".concat(item, " bhai agr hitesh nahi araha to to kia howa ap ajao"));
}
