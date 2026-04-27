let text = "Apple,Banana,Mango";

let fruitsFromSplit = text.split(",");
console.log("split() Output:");
console.log(fruitsFromSplit);


let fruitsSplice = ["Apple", "Banana", "Mango"];

fruitsSplice.splice(1, 1, "Orange");

console.log("\nsplice() Output:");
console.log(fruitsSplice);


let fruitsSlice = ["Apple", "Banana", "Mango", "Orange"];

let resultSlice = fruitsSlice.slice(1, 3);

console.log("\nslice() Output:");
console.log(resultSlice);


let fruitsToSpliced = ["Apple", "Banana", "Mango"];

let resultToSpliced = fruitsToSpliced.toSpliced(1, 1, "Orange");

console.log("\ntoSpliced() Output:");
console.log("Original Array:", fruitsToSpliced);
console.log("New Array:", resultToSpliced);