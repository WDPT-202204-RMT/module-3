import React, { useState } from 'react';
import { addUser } from '../utils/api';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function AddUser() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
  });

  const [address, setAddress] = useState({
    suite: '',
    city: '',
    street: '',
  });

  const [company, setCompany] = useState({
    bs: '',
  });

  const handleFormData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddress = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handleCompany = (e) => {
    setCompany({ ...company, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    console.log(address);
    console.log(company);
    // addUser({ ...formData, address, company }).then((res) => {
    //   console.log(res.data);
    // });

    toast
      .promise(addUser({ ...formData, address, company }), {
        pending: 'The user is being created 🧙‍♂️',
        error: 'Oops, it faild ❌',
        success: 'Congratulation, it worked 🥳',
      })
      .then((res) => {
        navigate('/users');
      });
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="exampleInputtext1" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputtext1"
          aria-describedby="textHelp"
          name="name"
          value={formData.name}
          onChange={handleFormData}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          name="email"
          value={formData.email}
          onChange={handleFormData}
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputtext1" className="form-label">
          street
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputtext1"
          aria-describedby="textHelp"
          value={address.street}
          name="street"
          onChange={handleAddress}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputtext1" className="form-label">
          suite
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputtext1"
          aria-describedby="textHelp"
          value={address.suite}
          name="suite"
          onChange={handleAddress}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputtext1" className="form-label">
          city
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputtext1"
          aria-describedby="textHelp"
          value={address.city}
          name="city"
          onChange={handleAddress}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputtext1" className="form-label">
          Phone
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputtext1"
          aria-describedby="textHelp"
          name="phone"
          value={formData.phone}
          onChange={handleFormData}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputtext1" className="form-label">
          Website
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputtext1"
          aria-describedby="textHelp"
          name="website"
          value={formData.website}
          onChange={handleFormData}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputtext1" className="form-label">
          Company bs
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputtext1"
          aria-describedby="textHelp"
          name="bs"
          value={company.bs}
          onChange={handleCompany}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default AddUser;
