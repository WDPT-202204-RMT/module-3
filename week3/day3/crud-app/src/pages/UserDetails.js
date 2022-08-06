import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUser, deleteUser } from '../utils/api';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function UserDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState();

  const handleDelete = () => {
    toast
      .promise(deleteUser(id), {
        pending: 'Removing the user 🧙‍♂️',
        error: 'It did not get removed',
        success: 'Boom, he died 😵',
      })
      .then((res) => {
        navigate('/users');
      });
  };

  useEffect(() => {
    getUser(id).then((res) => {
      console.log(res.data);
      setUser(res.data);
    });
  }, [id]);

  if (!user) return <div>Loading...</div>;

  return (
    <section style={{ backgroundColor: '#eee' }}>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-4">
            <div className="card mb-4">
              <div className="card-body text-center">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-circle img-fluid"
                  style={{ width: '150px' }}
                />
                <h5 className="my-3">{user.name}</h5>
                <p className="text-muted mb-1">{user.company.bs}</p>
                <p className="text-muted mb-4">
                  {user.address.street}, {user.address.suite},{' '}
                  {user.address.city}
                </p>
                <div className="d-flex justify-content-center mb-2">
                  <button type="button" className="btn btn-primary">
                    Edit
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-danger ms-1"
                    onClick={handleDelete}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="card mb-4">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Full Name</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{user.name}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Email</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{user.email}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">website</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{user.website}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Mobile</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{user.phone}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">address</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">
                      {user.address.street}, {user.address.suite},{' '}
                      {user.address.city}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UserDetails;
