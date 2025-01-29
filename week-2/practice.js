console.log('Hi Mani')

setTimeout(() => {
  console.log('Set time out')
}, 5000)

let a = 0
for (let i = 0; i < 1000; i++) {
  a += i
  console.log(a, i)
  setTimeout(() => {
    a += i
    console.log('Set time out', a)
  }, 2000)
}

console.log('Finally')
