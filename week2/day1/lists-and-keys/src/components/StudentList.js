const students = ["Marc", "Lucy", "Anna"];
function StudentList() {
  return (
    <ul>
      {students.map((element, index) => (
        <li key={index}>{element}</li>
      ))}
    </ul>
  );
}

export default StudentList;
