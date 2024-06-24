/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let r = str.replace(/[ \p{P}]/gu, '').toLowerCase()
  let i = 0
  while (i < r.length / 2) {
    if (r[i] != r[r.length - 1 - i]) return false
    i += 1
  }
  return true
}

module.exports = isPalindrome
