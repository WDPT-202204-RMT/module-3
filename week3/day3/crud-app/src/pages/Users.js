import React, { useState, useEffect } from 'react';
import { getUsers } from '../utils/api';
import User from '../components/User';
import { deleteUser } from '../utils/api';
import { toast } from 'react-toastify';

function Users() {
  const [users, setUsers] = useState([]);

  const handleDelete = (id) => {
    if (window.confirm('ARE YOU SURE !!!'))
      toast
        .promise(deleteUser(id), {
          pending: 'Removing the user 🧙‍♂️',
          error: 'It did not get removed',
          success: 'Boom, he died 😵',
        })
        .then(() => {
          getUsers().then((res) => {
            setUsers(res.data);
          });
        });
  };

  useEffect(() => {
    getUsers().then((res) => {
      setUsers(res.data);
    });
  }, []);

  return (
    <div className="row gap-2">
      {users.map((user) => (
        <User user={user} key={user.id} handleDelete={handleDelete} />
      ))}
    </div>
  );
}

export default Users;
