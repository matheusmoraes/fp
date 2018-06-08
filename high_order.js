// First class
const add = (x, y) => x + y
const mult = (x, y) => x * y

//  High order
const calculate = (fn, x, y) => fn(x, y)

calculate(add, 1, 2) // 3
calculate(mult, 1, 2) // 2
