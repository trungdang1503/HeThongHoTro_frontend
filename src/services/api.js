import axios from 'axios';

// Tạo một instance của Axios với cấu hình cơ bản
const apiClient = axios.create({
  baseURL: 'http://localhost:8080/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

// Thêm một interceptor để tự động gắn token vào mỗi request
apiClient.interceptors.request.use(
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

export default apiClient;