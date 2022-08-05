import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API = 'https://ironbnb-m3.herokuapp.com/apartments';

function IronbnbList() {
  const [apartments, setApartments] = useState([]);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    axios.get(API).then((response) => {
      setApartments(response.data);
      setFetching(false);
    });
  }, []);

  return (
    <div>
      <h3>List of apartments</h3>

      {fetching && <div>Loading....</div>}

      {apartments.map((elem) => (
        <div key={elem._id} className="card">
          <img
            src={
              elem.img
                ? elem.img
                : 'https://dchba.org/wp-content/uploads/2020/06/house-placeholder.png'
            }
            alt="apartment"
          />
          <h3>{elem.title}</h3>
          <p>Price: {elem.pricePerDay}</p>
        </div>
      ))}
    </div>
  );
}

export default IronbnbList;
