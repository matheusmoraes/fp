const studants = [
  { name: 'Anna', grade:6 },
  { name: 'John', grade:4 },
  { name: 'Maria', grade:9 }
]

const isApproved = student => student.grade >= 9
const approvedStudents = students.filter(isApproved)
