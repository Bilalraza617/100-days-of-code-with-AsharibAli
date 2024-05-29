let names: string[] = ["GulamM", "Yasir", "Saad"];

console.log(names[0] + " Salam Bahi kesa he, kia karra he aj kal?");
console.log(names[1] + " Salam Bahi kesa he, kia karra he aj kal?");
console.log(names[2] + " Salam Bahi kesa he, kia karra he aj kal?");

// with for of loop

for (let name of names) {
  console.log(`${name} Salam Bahi kesa he, kia karra he aj kal?`);
}
