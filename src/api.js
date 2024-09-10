import axios from 'axios';

const API_URL = 'http://localhost:8080/api/users';

const registerUser = userData => axios.post(`${API_URL}/register`, userData);
const getUserById = id => axios.get(`${API_URL}/${id}`);
const getAllUsers = () => axios.get(`${API_URL}/`);
const updateUser = (id, userData) => axios.put(`${API_URL}/${id}`, userData);
const deleteUser = id => axios.delete(`${API_URL}/${id}`);

export { registerUser, getUserById, getAllUsers, updateUser, deleteUser };
