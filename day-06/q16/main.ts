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

console.log(`Suno logo ${list[0]} dinner pr nahi aiy ga.`);

list[list.indexOf("Hitesh chudray")] = "Bilal";

for (const item of list) {
  console.log(`${item} bhai agr hitesh nahi araha to to kia howa ap ajao.`);
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

list.forEach((list) => {
  console.log(list + " bhai rat ko ajana sath khany khaiy gy.");
});
