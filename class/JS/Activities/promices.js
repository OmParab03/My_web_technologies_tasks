

// Reasons:
// 1. Avoid callback hell
// 2. Cleaner and readable code
// 3. Better error handling using .catch()
// 4. Easier chaining using .then()

console.log("Promises are better than callbacks because:");
console.log("1. Avoid callback hell");
console.log("2. Cleaner code");
console.log("3. Better error handling");
console.log("4. Easy chaining");


///1///

let promise1 = new Promise((resolve, reject) => {
    resolve("Promise 1 Success");
});

promise1.then(result => {
    console.log(result);
});


////2/////
let marks = 80;

let promise2 = new Promise((resolve, reject) => {
    if (marks >= 40) {
        resolve("Pass");
    } else {
        reject("Fail");
    }
});

promise2
    .then(result => console.log("Result:", result))
    .catch(error => console.log("Error:", error));


//3//////

let promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Data loaded after 2 seconds");
    }, 2000);
});

promise3.then(result => {
    console.log(result);
});


///4/////

function fetchData() {
    return new Promise((resolve, reject) => {
        let success = true;

        if (success) {
            resolve("API Data Fetched Successfully");
        } else {
            reject("API Fetch Failed");
        }
    });
}

fetchData()
    .then(data => console.log(data))
    .catch(error => console.log(error));