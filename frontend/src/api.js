import axios from 'axios';

// Base API instance
const API = axios.create({ baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api' });

// Add token to requests if available
API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

// Auth APIs
export const login = (formData) => API.post('/auth/login', formData);

// Admin APIs
export const fetchResellers = () => API.get('/admin/resellers');
export const createReseller = (resellerData) => API.post('/admin/resellers', resellerData);

// Reseller APIs
export const fetchKeys = () => API.get('/keys');
export const createKey = (keyData) => API.post('/keys', keyData);

// Agency APIs
export const fetchAgencies = () => API.get('/agencies');
export const createAgency = (agencyData) => API.post('/agencies', agencyData);

export default API;
