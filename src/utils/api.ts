import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000', // 👈 use your NestJS URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
