
function printSquares() {
  for (let i = 1; i <= 10; i++) {
    console.log(i * i)
  }
}

// Stateless
// Maximum call stack size
function printSquaresStateless(n) {
  if (n > 0) {
    printSquaresStateless(n - 1)
    console.log(n * n)
  }
}
