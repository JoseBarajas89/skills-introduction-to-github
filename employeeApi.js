import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api/employees',
});

export const getEmployees = async () => {
  const { data } = await api.get('/');
  return data;
};

export const createEmployee = async (employee) => {
  const { data } = await api.post('/', employee);
  return data;
};

export const deleteEmployee = async (id) => {
  await api.delete(`/${id}`);
};
