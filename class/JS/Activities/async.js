///1
let randomNumber = Math.floor(Math.random() * 10) + 1;
let userGuess = prompt("Guess a number between 1 to 10:");

if (parseInt(userGuess) === randomNumber) {
    console.log("Correct! You guessed the number.");
} else {
    console.log("Wrong! The correct number was: " + randomNumber);
}


///////2

console.log("Blocking Example Start");

function blockingTask() {
    for (let i = 0; i < 1000000000; i++) {
        // heavy loop (blocks execution)
    }
    console.log("Blocking Task Finished");
}

blockingTask();

console.log("Blocking Example End");

///3

console.log("Non-Blocking Example Start");

setTimeout(() => {
    console.log("Non-Blocking Task Finished after 2 seconds");
}, 2000);

console.log("Non-Blocking Example End");


////4

console.log("Sync Example: ATM withdrawal - wait until completed");

// Async Example:
// Food delivery → order placed, continue other work

console.log("Async Example: Food delivery - continue work while waiting");


////5

fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {
        console.log("API Fetch Data:");
        console.log(data);
    })
    .catch(error => {
        console.log("Error:", error);
    });