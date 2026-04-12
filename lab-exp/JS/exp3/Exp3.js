// 1. Difference between array function and simple function and how use this keyword in both functions
// 2.write a code with array function with 2 examples and simple function with 2 examples 
// 3.write a code for switch case
// 4.how to use truthy and falsy values in js
// 5.how to use ternary operator in js
// 6.write a code for how to use loops in array 
// 7.differece between for off and for in loop
// 8.how to use map and filter function in js 
// 9.how to use reduce function in js


//Arro fxn
document.write("Arrow Function:<br>");
const add=(a,b)=>{
    document.write("Sum: " + (a+b)+"<br>");
}
add(5,10);




// 1. Loops in array
document.write("---Activity 3---<br>");
document.write("Using for loop:"+"<br>");
let fruits=["Apple","Banana","Mango","Orange"];
for(let i=0;i<fruits.length;i++) 
{
    document.write(fruits[i]+"<br>");
}

document.write("Using while loop:"+"<br>");
let j=0;
while(j<fruits.length) 
{
    document.write(fruits[j]+"<br>");
    j++;
}

document.write("Using do-while loop:"+"<br>");
let k=0;
do
{
    document.write(fruits[k]+"<br>");
    k++;
}while(k<fruits.length);

document.write("Using foreach loop:"+"<br>");
fruits.forEach((fruit) => {
    document.write(fruit+"<br>");
});

document.write("Using for-of loop:"+"<br>");
for(let fruit of fruits)
{
    document.write(fruit+"<br>");
}

document.write("Using for-in loop:"+"<br>");
for(let index in fruits)
{
    document.write(fruits[index]+"<br>");
}

//Array methods
document.write("Array Methods:<br>");
let numbers=[1,2,3,4,5];
//map
let squaredNumbers=numbers.map(num=>num*num);
document.write("Squared Numbers:" + squaredNumbers+"<br>");

//filter
let evenNumbers=numbers.filter(num=>num%2===0);
document.write("Even Numbers:" + evenNumbers+"<br>");

//reduce
let sum=numbers.reduce((acc,num)=>acc+num,0);
document.write("Sum:" + sum+"<br>");    