var animals = [
    { name: "dog", characteristic: "would make a great pet" },
    { name: "cat", characteristic: "would make a great pet" },
    { name: "rabbit", characteristic: "would make a great pet" },
];
animals.forEach(function (animal) { return console.log(animal.name); });
animals.forEach(function (animal) {
    return console.log("A " + animal.name + " " + animal.characteristic);
});
console.log("Any of these animals would make a great pet!");
