import Rating from './Rating';

export default function DriverCard(props) {
  const { name, rating, img, car } = props;

  return (
    <div
      style={{
        margin: '1rem',
        backgroundColor: '#455EB5',
        borderRadius: '2rem',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <img
        src={img}
        alt={name}
        style={{ borderRadius: '100%', width: '200px', height: '200px' }}
      />
      <div>
        <p style={{ fontWeight: 'bold' }}>{name}</p>
        <Rating>{rating}</Rating>
        <p>
          {car.model} - {car.licensePlate}
        </p>
      </div>
    </div>
  );
}
