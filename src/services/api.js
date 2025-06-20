// src/services/api.js

import axios from 'axios';

// 1. Instance cho các API công khai (public)
const apiClient = axios.create({
  baseURL: 'http://localhost:8080/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// 2. Instance cho các API cần xác thực (authenticated)
const authApiClient = axios.create({
  baseURL: 'http://localhost:8080/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Chỉ thêm interceptor vào instance cần xác thực
authApiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('user-token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Export cả hai instance
export { apiClient, authApiClient };