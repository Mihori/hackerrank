function gradingStudents(grades) {
  return grades.map((grade) => {
    return grade % 5 > 2 && grade > 37 ? grade + (5 - grade % 5) : grade;
  });
}