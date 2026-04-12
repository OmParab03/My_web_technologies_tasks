//types of object = key value pair


// 1 object literal
// 2 object singleton


let user={
    name : "Omkar",
    agr : 20,
    email : "omkarparab2110@gmail.com",
    city : "ichalkaranji",
    islogin : true,
    lastLogin : ["monday" ,"tuesday"],
    "full name":"omkar parab"
    
}
console.log(user)
console.log(user.lastLogin)
console.log(user["full name"]);

user.email="omkarparab2005@gmail.com"
console.log(user.email);
// Object.freeze(user) // it  will freeze the object and no one can change the object
user.email="abc@gmail.com"
console.log(user.email);



 //symbol 
 const mysymbol=Symbol("my symbol");
 let myObj={
    [mysymbol]:"js"
 }
 console.log(myObj);
console.log(myObj[mysymbol]);

//create one symbol and add it to object and try to print it
user.greetings=function(){
    console.log("hello js");
    
}

user.greetings()

user.greetings1= function(){
    console.log(`${this.email}`);  
}

 
 