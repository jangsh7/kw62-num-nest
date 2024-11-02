#!/usr/bin/env node

const lib = require("./lib");

let command = process.argv[2];

// let numbers = process.argv.slice(3, process.argv.length).map((n) => parseFloat(n));
let numbers = process.argv.slice(3).map((n) => parseFloat(n));

// 숫자가 아닌 값이 있거나 파라미터가 부족한 경우 처리
if (!command || numbers.length === 0 || numbers.some((n) => isNaN(n))) {
    console.log("Insufficient parameter!");
    process.exit(1);
}
/*
if (numbers.some((n) => isNaN(n))) {
    console.log("Some arguments are not numbers!");
    process.exit(1);
}
*/
let result;
switch (command) {
    case "avg":
        result = lib.avg(numbers);
        break;
    case "prime":
        result = lib.prime(numbers[0]);
        break;
    case "factorial":
        result = lib.factorial(numbers[0]);
        break;
    default:
        console.log("Wrong command!");
        process.exit(1);
}
console.log(result);