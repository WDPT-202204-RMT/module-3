function StudentList(props) {
  console.log(props.children);
  return (
    <div style={{ backgroundColor: "red" }}>
      <h2>Student List</h2>
      {props.children}
    </div>
  );
}

export default StudentList;
