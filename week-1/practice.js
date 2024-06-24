const firstName = 'Manisrinivasa'
const lastName = 'Badam'
console.log(`Greetings Mr.${firstName} ${lastName}!`)

const gender = 'Male'

if (gender === 'Male') {
  console.log('He is Male')
} else {
  console.log('She is Female')
}

let sum = 0

for (let index = 0; index < 1001; index += 1) {
  sum += index
}

console.log(sum)

// even numbers
console.log('Even numbers')
const arr = [1, 2, 3, 4, 5, 6, 5, 6, 56, 45, 34, 23]
for (let i = 0; i < arr.length; i += 1) {
  if (arr[i] % 2 == 0) {
    console.log(arr[i])
  }
}

// Biggest num
console.log('Biggest number')

let biggestNum = arr[0]
for (let i = 1; i < arr.length; i += 1) {
  if (arr[i] > biggestNum) biggestNum = arr[i]
}
console.log(biggestNum)

// Objects
const persons = [
  {
    firstName: 'Manisrinivas',
    gender: 'Male',
  },
  {
    firstName: 'Shiva',
    gender: 'Male',
  },
  {
    firstName: 'Sindhuja',
    gender: 'Female',
  },
]

for (let index = 0; index < persons.length; index++) {
  if (persons[index][gender] == 'Male') {
    console.log(persons[index][firstName])
  }
}

// reverse elements an array
function sumOfTwoNumbers(a, b) {
  return a + b
}

const t = sumOfTwoNumbers(2, 3)

console.log(t)
function pretty(res) {
  return `The sum of two numbers is ${res}`
}

console.log(pretty(sumOfTwoNumbers(2, 3)))

// let s = 0
// for (let index = 0; index < 10000000000000000000; index++) {
//   s += index
// }
// console.log(s)

function sumF(num1, num2, fnToCall) {
  let result = num1 + num2
  fnToCall(result)
}

function displayResult(data) {
  console.log('Result of the sum is : ' + data)
}

function displayResultPassive(data) {
  console.log("Sum's result is : " + data)
}

// You are only allowed to call one function after this
// How will you displayResult of a sum
const lRes = sumF(1, 2, displayResult)
const lResPas = sumF(1, 2, displayResultPassive)
// callbacks
lRes
lResPas

function calculateArithmetic(a, b, arithmeticFinalFunction) {
  const ans = arithmeticFinalFunction(a, b)
  return ans
}

function sumAB(a, b) {
  return a + b
}

function minusAB(a, b) {
  return a - b
}

const value = calculateArithmetic(1, 3, sumAB)
console.log(value)

function greet() {
  console.log('Hello Mani!')
}

setTimeout(greet, 3 * 1000)

setInterval(greet, 1 * 1000)
