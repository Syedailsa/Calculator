#! /usr/bin/env node
import inqiurer from "inquirer";
const answer = await inqiurer.prompt([
    {
        message: "Enter first number",
        type: "number",
        name: "firstdigit",
    },
    {
        message: "Enter second number",
        type: "number",
        name: "seconddigit",
    },
    {
        message: "select one operator to perform the operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"]
    }
]);
if (answer.operator === "Addition") {
    console.log(`${answer.firstdigit + answer.seconddigit} is your answer`);
}
else if (answer.operator === "Subtraction") {
    console.log(`${answer.firstdigit - answer.seconddigit} is your answer`);
}
else if (answer.operator === "Multiplication") {
    console.log(`${answer.firstdigit * answer.seconddigit} is your answer`);
}
else if (answer.operator === "Division") {
    console.log(`${answer.firstdigit / answer.seconddigit} is your answer`);
}
else {
    console.log("please select a valid operator");
}
;
