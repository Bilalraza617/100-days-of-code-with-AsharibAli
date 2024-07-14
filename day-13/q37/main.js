function makeShirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("You have ordered a ".concat(size, " sized shirt with the message: \"").concat(message, "\"."));
}
makeShirt();
makeShirt("Medium");
makeShirt("Small", "TypeScript is awesome!");
