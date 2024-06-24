/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let s1 = str1.toLowerCase()
  let s2 = str2.toLowerCase()
  if (str1.length != str2.length) return false
  const char1 = {}
  const char2 = {}
  for (const cha of s1) {
    char1[cha] = (char1[cha] || 0) + 1
  }
  for (const cha of s2) {
    char2[cha] = (char2[cha] || 0) + 1
  }
  for (const ch in char1) {
    if (char1[ch] != char2[ch]) {
      return false
    }
  }
  return true
}

module.exports = isAnagram
