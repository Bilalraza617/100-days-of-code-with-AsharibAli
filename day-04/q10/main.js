"use strict";
// CLI calculater
// This is my first code
// 29-05-2024
Object.defineProperty(exports, "__esModule", { value: true });
// import inquirer
var inquirer_1 = require("inquirer");
// get Numbers and operators
var answer = await inquirer_1.default.prompt([
    {
        name: "firstNumber",
        type: "number",
        message: "PLease Enter First Number : ",
    },
    {
        name: "secondNumber",
        type: "number",
        message: "Please enter Second Number : ",
    },
    {
        name: "operater",
        type: "list",
        message: "Please enter Operater : ",
        choices: ["+", "-", "*", "/", "%"],
    },
]);
// create var for store operation answer
var OperaionsAns;
// Operaions
switch (answer.operater) {
    case "+":
        OperaionsAns = answer.firstNumber + answer.secondNumber;
        break;
    case "-":
        OperaionsAns = answer.firstNumber - answer.secondNumber;
        break;
    case "*":
        OperaionsAns = answer.firstNumber * answer.secondNumber;
        break;
    case "/":
        OperaionsAns = answer.firstNumber / answer.secondNumber;
        break;
    case "%":
        OperaionsAns = answer.firstNumber % answer.secondNumber;
        break;
}
// Show Operation Ans
console.log(Math.floor(OperaionsAns));
