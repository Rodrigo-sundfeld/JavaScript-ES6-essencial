const students = [
    {
        name: 'Lucas',
        grade: 10
    },
    {
        name: 'Lara',
        grade: 5
    },
    {
        name: 'Matheus',
        grade: 9
    }
];

function getApprovedStudents(studentsList) {
    return studentsList.filter(student => student.grade >= 7);
};

console.log('Alunos aprovados: ');
console.log(getApprovedStudents(students));

console.log('\nLista de alunos: ')
console.log(students);