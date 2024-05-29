// CLI calculater
// This is my first code
// 29-05-2024

// import inquirer

import inquirer from "inquirer";

// get Numbers and operators

const answer = await inquirer.prompt([
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

let OperaionsAns;

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
