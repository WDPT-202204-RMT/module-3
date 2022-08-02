export default function IdCard(props) {
  const { lastName, firstName, gender, height, birth, picture } = props;

  return (
    <div style={{ width: '100%', border: '1px solid black', display: 'flex' }}>
      <img src={picture} alt={`${firstName} ${lastName}`} />
      <div>
        <p style={{ textAlign: 'left' }}>
          <span style={{ fontWeight: 'bold' }}>First Name</span>: {firstName}
          <br />
          <span style={{ fontWeight: 'bold' }}>Last Name</span>: {lastName}
          <br />
          <span style={{ fontWeight: 'bold' }}>Gender</span>: {gender}
          <br />
          <span style={{ fontWeight: 'bold' }}>Height</span>: {height / 100}m
          <br />
          <span style={{ fontWeight: 'bold' }}>Birth</span>:{' '}
          {birth.toUTCString()}
        </p>
      </div>
    </div>
  );
}
