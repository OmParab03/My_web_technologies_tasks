let mydate=new Date();
console.log(mydate.toString());
console.log(mydate.toISOString());
console.log(mydate.toLocaleString());
console.log(mydate.toLocaleDateString());
console.log(typeof(mydate));//object 
console.log(mydate.getDate().toString());
console.log(mydate.getDay());
console.log(mydate.getMonth()+1);


// console.log(mydate);

//when we use application 
let mytimestamp=Date.now();
console.log(mytimestamp);
console.log(Date.now());//gives current timestamp in milliseconds
console.log(Date.now()/1000);

//activity 2 = how to calculate correct date and time using date object

const now = new Date();

const date =
  now.getDate() + "/" +
  (now.getMonth() + 1) + "/" +
  now.getFullYear();

const time =
  now.getHours() + ":" +
  now.getMinutes() + ":" +
  now.getSeconds();

console.log(date, time);



