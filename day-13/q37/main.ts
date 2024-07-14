function makeShirt(size = "Large", message = "I love TypeScript") {
  console.log(
    `You have ordered a ${size} sized shirt with the message: "${message}".`
  );
}

makeShirt();

makeShirt("Medium");

makeShirt("Small", "TypeScript is awesome!");
