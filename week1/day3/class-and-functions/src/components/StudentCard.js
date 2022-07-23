function StudentCard(props) {
  return (
    <div>
      <p>
        <b>name:</b> {props.student.name}
      </p>
      <p>
        <b>country:</b> {props.student.info.country}
      </p>
    </div>
  );
}

export default StudentCard;
