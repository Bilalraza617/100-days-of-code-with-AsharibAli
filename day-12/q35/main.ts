let animals = [
  { name: "dog", characteristic: "would make a great pet" },
  { name: "cat", characteristic: "would make a great pet" },
  { name: "rabbit", characteristic: "would make a great pet" },
];

animals.forEach((animal) => console.log(animal.name));
animals.forEach((animal) =>
  console.log("A " + animal.name + " " + animal.characteristic)
);
console.log("Any of these animals would make a great pet!");
