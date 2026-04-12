const balance=new Number(100);
console.log(balance);
console.log(balance.toString());
console.log(balance.toFixed(2));//when you built a e-commerce website and precision value when it's too long then used tofixed() mathod
console.log(balance.toString().length);


const h=1000000;
console.log(h.toLocaleString('en-US'));//used for currency format by default it is used INDIAN format
console.log(Math);
console.log(Math.abs(-4));//absolute value convert negative to positive
console.log(Math.round(4.6));
console.log(Math.ceil(4.6));//choose top value
console.log(Math.floor(4.6));//choose bottom value
console.log(Math.min(1,3,24,));
console.log(Math.max(1,2,3,4,5));


//activity 1
//how to use math.random two examples

let a=Math.random();//return a float random number between 0 and 1
let b=Math.random()*10;

console.log(a);
console.log(b);








