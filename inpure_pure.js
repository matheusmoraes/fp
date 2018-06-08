// Inpure
function daysThisMonth () {
  const date = new Date()
  const year = date.getFullYear()
  const month = date.getMonth()
  const start = new Date(year, month, 1)
  const end = new Date(year, month + 1, 1)
  return Math.round((end - start) / (1000 * 60 * 60 * 24))
}

// Pure
function daysInMonth(year, month) {
  const start = new Date(year, month, 1)
  const end = new Date(year, month + 1, 1)
  return Math.round((end - start) / (1000 * 60 * 60 * 24))
}
