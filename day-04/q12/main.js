var names = ["GulamM", "Yasir", "Saad"];
console.log(names[0] + " Salam Bahi kesa he, kia karra he aj kal?");
console.log(names[1] + " Salam Bahi kesa he, kia karra he aj kal?");
console.log(names[2] + " Salam Bahi kesa he, kia karra he aj kal?");
// with for of loop
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var name_1 = names_1[_i];
    console.log("".concat(name_1, " Salam Bahi kesa he, kia karra he aj kal?"));
}
