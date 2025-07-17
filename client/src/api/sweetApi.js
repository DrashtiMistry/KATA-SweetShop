import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api/sweets',
  withCredentials: true,
});

// Existing APIs
export const getAllSweets = () => API.get('/');
export const getSweetById = (id) => API.get(`/${id}`);
export const addSweet = (sweetData) => API.post('/', sweetData);
export const updateSweet = (id, sweetData) => API.put(`/${id}`, sweetData);
export const deleteSweet = (id) => API.delete(`/${id}`);

// ✅ New API to decrease quantity when added to cart
export const reduceQuantity = (id) => API.patch(`/${id}/decrease`);
