//singleton object
const user=new Object(); // singlton object
console.log(user);

const user2={} //non singlton object
user2.id=123
user2.name="omkar";
user2.city="ichalkaranji";
user2.email="omarparab2110@gmail.com";
user2.agg=20;
console.log(user2);

//nested object 
const regularUser={
    email:"omkar@gmail.com",
    user:{
        fullname:{
            firstname:"omkar",
            lastname:"parab"
        }
    }
}
console.log(regularUser);
console.log(regularUser.user.fullname.firstname);

