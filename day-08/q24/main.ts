// Tests eith string

console.log("Tests eith string.");

let first: string = "Bilal";
let second: string = "raza";

console.log(first === second); //flase
console.log(first !== second); //true

// Tests with lower case function

console.log("Tests with lower case function.");

let fName: string = "bilal";
let sName: string = "Bilal";

console.log(fName === sName.toLowerCase());
console.log(fName !== sName.toLowerCase());

// Tests with Numerical value

console.log("Tests with Numerical value.");

let fNumber: Number = 1;
let sNumber: Number = 2;

console.log(fName === sName);
console.log(fName !== sName);

console.log(fName < sName);
console.log(fName > sName);

console.log(fName <= sName);
console.log(fName >= sName);

// Tests with "and" and "or" operator

console.log("Tests with 'and' and 'or' operant");

let tCapitalName: string = "Bilal";
let tName: string = "bilal";
let tSCapitalName: string = "Raza";
let tsName: string = "raza";

console.log(tCapitalName === tSCapitalName && tName === tsName); //false
console.log(
  tCapitalName === tName.toUpperCase() || tsName === tSCapitalName.toLowerCase()
); //true

// Tests wheater an items in a array
console.log("Tests wheater an items in a array");

let arr: number[] = [123, 1000, 345298746];

console.log(arr.includes(123)); //True

// Tests wheater an item is not an array
console.log("Tests wheater an item is not an array");

console.log(!arr.includes(123)); //false
