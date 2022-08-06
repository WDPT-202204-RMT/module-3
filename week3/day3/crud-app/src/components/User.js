import React from 'react';
import { Link } from 'react-router-dom';

function User({ user, handleDelete }) {
  return (
    <div className="col">
      <div className="card" style={{ minWidth: '18rem' }}>
        <div className="card-body">
          <h5 className="card-title">{user.name}</h5>
          <p className="card-text">email : {user.email}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">city: {user.address.city}</li>
          <li className="list-group-item">Phone: {user.phone}</li>
          <li className="list-group-item">Company name: {user.company.name}</li>
        </ul>
        <div className="card-body">
          <Link to={`/user/${user.id}`} className="card-link btn btn-primary">
            Details
          </Link>
          <button
            className="card-link btn btn-danger"
            onClick={() => handleDelete(user.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default User;
