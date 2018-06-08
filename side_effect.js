let counter = 0
function increment() {
  counter = counter + 1
  return counter
}

console.log(increment()) // 1
console.log(increment()) // 2
console.log(increment()) // 3

counter = 0
function incrementPure(counter) {
  return counter + 1
}
console.log(incrementPure(counter)) // 1
console.log(incrementPure(counter)) // 1
console.log(incrementPure(counter)) // 1
