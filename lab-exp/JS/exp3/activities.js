// =======================================
// 1. Arrow Function with 2 Examples
// =======================================

// Example 1: Addition
const add = (a, b) => {
    return a + b;
};

console.log("Addition:", add(10, 20));

// Example 2: Even or Odd Check
const isEven = (num) => {
    return num % 2 === 0;
};

console.log("Is 8 Even?", isEven(8));
console.log("Is 7 Even?", isEven(7));


// =======================================
// 2. Switch Case Code
// =======================================

let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    default:
        console.log("Invalid Day");
}


// =======================================
// 3. Truthy and Falsy Values
// =======================================

// Falsy values: false, 0, "", null, undefined, NaN

let value = "";

if (value) {
    console.log("Truthy Value");
} else {
    console.log("Falsy Value");
}


// =======================================
// 4. Use Ternary Operator
// =======================================

let age = 20;

let result = (age >= 18) ? "Eligible to Vote" : "Not Eligible";

console.log(result);


// =======================================
// 5. Loops in JS
// =======================================

// for loop
console.log("For Loop:");

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// while loop
console.log("While Loop:");

let j = 1;
while (j <= 5) {
    console.log(j);
    j++;
}


// =======================================
// 6. Map and Filter Function in JS
// =======================================

let numbers = [1, 2, 3, 4, 5];

// map() → multiply each number by 2
let doubled = numbers.map(num => num * 2);

console.log("Map Output:", doubled);

// filter() → get even numbers only
let evenNumbers = numbers.filter(num => num % 2 === 0);

console.log("Filter Output:", evenNumbers);