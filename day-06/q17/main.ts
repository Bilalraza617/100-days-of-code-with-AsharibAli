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

// Q17

console.log(
  "Bhaiyon program to wargaya he me sirf 2 bando ko hi dinner pr bola sakta ho.\n"
);

// Remove guest

for (let i = list.length; i >= 3; i--) {
  const element = list.pop();
  console.log(
    "Ary " + element + " bahi aj rehny do agli bar sath dinner kary gy."
  );
}

list.forEach((guest) => {
  console.log(`${guest} kuch bhi ho jaiy tujhy aj ana he.`);
});

list.splice(0, list.length);

console.log(list); // empty array
