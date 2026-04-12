//simple function 
function greet( name){
    console.log("hello " + name);
    
}

//arrow function
//1
const greet1=(name)=>console.log("hello "+name);

//2
const sum=(a,b)=> a+b;

greet("omkar");
greet1("omkar");
console.log(sum(2,3));

//switch case

let day="monday";
switch(day){
    case "monday":
        console.log("Today is Monday");
        break;
    case "tuesday":
        console.log("Today is Tuesday");
        break;
    case "wednesday":
        console.log("Today is Wednesday");
        break;
    default:
        console.log("Invalid day");
}


//truthy and falsy values
//truthy means non-zero numbers, non-empty strings, objects, arrays
let str1="hello";
let obj={};
if(str1){
    console.log("str1 is truthy");
}
if(obj){
    console.log("obj is truthy");
}

//falsey
let str2="";
let num=0;
if(!str2){
    console.log("str2 is falsy");
}
if(!num){
    console.log("num is falsy");
}


//ternary operators ( ? , :)
//condition ? expressionIfTrue : expressionIfFalse;
let age=20
let vote = (age>=18)?"eligible for voting" :"Not Eligible for voting";
console.log(vote);

//loops 

let a=[1,2,3,4,5,6,7,8,9];
//for loop
for(let i=0;i<a.length;i++){
    console.log(a[i]);  
}
//while
while(){
    console.log("hello");  
}
//do while
do{
  console.log("hello");
}while()

