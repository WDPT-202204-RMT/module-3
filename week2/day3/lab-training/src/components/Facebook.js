import { useState } from 'react';
import profiles from '../data/berlin.json';
export default function Facebook() {
  const [data, setData] = useState(profiles);
  const [selectedCountry, setSelectedCountry] = useState('');

  const generateCountries = () => {
    const res = [];
    const knownCountries = [];

    data.forEach((e) => {
      if (knownCountries.indexOf(e.country) === -1) {
        res.push(
          <button onClick={() => setSelectedCountry(e.country)}>
            {e.country}
          </button>
        );
        knownCountries.push(e.country);
      }
    });
    return res;
  };

  return (
    <div>
      <div style={{ display: 'flex' }}>{generateCountries()}</div>
      {data.map((e) => (
        <div
          key={e.img}
          style={{
            width: '100%',
            border: '1px solid black',
            display: 'flex',
            backgroundColor:
              e.country === selectedCountry ? '#A3D2E2' : 'white',
          }}
        >
          <img src={e.img} alt={`${e.firstName} ${e.lastName}`} />
          <div>
            <p style={{ textAlign: 'left' }}>
              <span style={{ fontWeight: 'bold' }}>First Name</span>:{' '}
              {e.firstName}
              <br />
              <span style={{ fontWeight: 'bold' }}>Last Name</span>:{' '}
              {e.lastName}
              <br />
              <span style={{ fontWeight: 'bold' }}>Country</span>: {e.country}
              <br />
              <span style={{ fontWeight: 'bold' }}>Type</span>: {e.type}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
