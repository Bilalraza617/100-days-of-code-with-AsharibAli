var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var locations = [
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
console.log("Alphabetical order : ", __spreadArray([], locations, true).sort());
// Original order
console.log("Original order : ", locations);
//  Reverse alphabetical order
console.log("Reverse alphabetical order : ", __spreadArray([], locations, true).sort().reverse());
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
