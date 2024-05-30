const locations: string[] = [
  "Karachi",
  "Baldia",
  "Marri",
  "Shikar poor",
  "Haari poor",
  "Kashmeer",
  "Zulekha nagri",
  "Lohor zoo",
  "Islam abad",
  "Gujrat",
  "Sindh",
  "Oceans",
  "Data nagri",
];

// Original order

console.log("Original order : ", locations);

// Alphabatic order

console.log("Alphabetical order : ", [...locations].sort());

// Original order

console.log("Original order : ", locations);

//  Reverse alphabetical order

console.log("Reverse alphabetical order : ", [...locations].sort().reverse());

// Oroginal array

console.log("Oroginal array : ", locations);

// Original array change in reverse order
locations.reverse();
console.log("It's order has changed : ", locations);

// Reverse order cahnge in original order

locations.reverse();
console.log("It's back to it's original order : ", locations);

// Original order change in alphabetical order

locations.sort();
console.log("Its order changed in alphabetical order : ", locations);

// Alphabetical order change in reverse alphabetical order

locations.reverse();
console.log("Its order change in reverse alphabetical order : ", locations);
