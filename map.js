const studants = [
  { name: 'Anna', grade:6 },
  { name: 'John', grade:4 },
  { name: 'Maria', grade:9 }
]

const byName = object => object.name
const studentsByName = students.map(byName)
// const studentsByName = map(students, byName) // lodash
