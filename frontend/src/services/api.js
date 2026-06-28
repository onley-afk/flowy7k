import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.REACT_APP_API_URL || 'http://localhost:5000'
});

// Agregar token JWT a cada request
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Productos
export const productAPI = {
  getAll: () => API.get('/api/products'),
  getById: (id) => API.get(`/api/products/${id}`),
  create: (data) => API.post('/api/products', data),
  update: (id, data) => API.put(`/api/products/${id}`, data),
  delete: (id) => API.delete(`/api/products/${id}`)
};

// Órdenes
export const orderAPI = {
  getAll: () => API.get('/api/orders'),
  getById: (id) => API.get(`/api/orders/${id}`),
  create: (data) => API.post('/api/orders', data),
  updateStatus: (id, status) => API.put(`/api/orders/${id}/status`, { status })
};

// Usuarios
export const userAPI = {
  register: (data) => API.post('/api/users/register', data),
  login: (data) => API.post('/api/users/login', data),
  getProfile: () => API.get('/api/users/profile'),
  updateProfile: (data) => API.put('/api/users/profile', data)
};

// Pagos
export const paymentAPI = {
  createPreference: (data) => API.post('/api/payment/preference', data),
  verifyPayment: (paymentId) => API.get(`/api/payment/verify/${paymentId}`)
};

export default API;
