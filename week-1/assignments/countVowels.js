/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let r = str.toLowerCase()
  let res = 0
  for (let index = 0; index < r.length; index += 1) {
    if (['a', 'e', 'i', 'o', 'u'].includes(r[index])) res += 1
  }
  return res
}

module.exports = countVowels
