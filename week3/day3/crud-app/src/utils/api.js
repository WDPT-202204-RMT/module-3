import axios from 'axios';

const API_URL = 'http://localhost:3000/users';

export const getUsers = () => {
  return axios.get(API_URL);
};

export const getUser = (id) => {
  return axios.get(`${API_URL}/${id}`);
};

export const addUser = (newUser) => {
  return axios.post(API_URL, newUser);
};

export const deleteUser = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};

//export { getUsers, getUser, addUser };
