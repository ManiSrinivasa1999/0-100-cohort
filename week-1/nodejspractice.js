const fs = require('fs')

// async functions -> setTimeout, fs.readFile
fs.readFile('p.txt', 'utf-8', function (err, data) {
  if (data) {
    console.log(data)
  } else {
    console.error(err)
  }
})

console.log('I am a pro one')
let a = 0
for (let i = 0; i < 100000000; i++) {
  a++
}

console.log('I am a pro two')
