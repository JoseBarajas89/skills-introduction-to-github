import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api/auth',
});

export const login = async (data) => {
  return api.post('/login', data);
};

export const register = async (data) => {
  return api.post('/register', data);
};

export default api;
