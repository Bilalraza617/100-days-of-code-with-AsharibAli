// Q14 ans:

let list: string[] = ["Hitesh chudray", "Sheriyans", "Chahat fateh ali khan"];

list.forEach((name) => {
  console.log(
    "Mr " +
      name +
      " meri taraf sy dinner ki dawat ko qabol kary or aj rat ka khan mery sath khaiy."
  );
});

//Q15 ans

console.log(`Suno logo ${list[0]} dinner pr nahi aiy ga`);

list[list.indexOf("Hitesh chudray")] = "Bilal";

for (const item of list) {
  console.log(`${item} bhai agr hitesh nahi araha to to kia howa ap ajao`);
}
