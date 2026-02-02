// reverse number
let n = 12345
let rev = 0
let temp = n
while (temp > 0) {
  rev = rev * 10 + (temp % 10)
  temp = Math.floor(temp / 10)
}
console.log(rev)


// check palindrome number
let num = 121
let original = num
let r = 0
while (num > 0) {
  r = r * 10 + (num % 10)
  num = Math.floor(num / 10)
}
if (r === original) {
  console.log("Palindrome")
} else {
  console.log("Not Palindrome")
}


// fibonacci series
let a = 0
let b = 1
let count = 10
for (let i = 0; i < count; i++) {
  console.log(a)
  let c = a + b
  a = b
  b = c
}


// count vowels in string
let str = "hello world"
let vowels = 0
for (let i = 0; i < str.length; i++) {
  let ch = str[i].toLowerCase()
  if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") {
    vowels++
  }
}
console.log(vowels)


// array 
// find largest number in array
let arr1 = [10, 45, 2, 89, 23]
let max = arr1[0]
for (let i = 1; i < arr1.length; i++) {
  if (arr1[i] > max) {
    max = arr1[i]
  }
}
console.log(max)


// remove duplicate numbers in array
let arr2 = [1, 2, 3, 2, 4, 1, 5]
let unique = []
for (let i = 0; i < arr2.length; i++) {
  let found = false
  for (let j = 0; j < unique.length; j++) {
    if (arr2[i] === unique[j]) {
      found = true
      break
    }
  }
  if (!found) {
    unique.push(arr2[i])
  }
}
console.log(unique)


// find missing number in array
let arr3 = [1, 2, 4, 5]
let number = 5
let total = (number * (number + 1)) / 2
let sum = 0
for (let i = 0; i < arr3.length; i++) {
  sum += arr3[i]
}
let missing = total - sum
console.log(missing)




//function 
function evenOrOdd(num) {
  if (num % 2 === 0) {
    return "Even"
  } else {
    return "Odd"
  }
}

console.log(evenOrOdd(10))
console.log(evenOrOdd(7))


function sumOfArray(arr) {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return sum
}

console.log(sumOfArray([1, 2, 3, 4, 5]))