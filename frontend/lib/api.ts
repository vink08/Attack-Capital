
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to add the auth token to requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Auth API
export const signup = async (email: string, password: string) => {
  const response = await api.post('/signup', { email, password });
  return response.data;
};

export const login = async (email: string, password: string) => {
  const response = await api.post('/login', { email, password });
  return response.data;
};

export const getMe = async () => {
  const response = await api.get('/me');
  return response.data;
};

// Posts API
export const getPosts = async (author?: string) => {
  const url = author ? `/posts?author=${author}` : '/posts';
  const response = await api.get(url);
  return response.data;
};

export const getPost = async (id: string) => {
  const response = await api.get(`/posts/${id}`);
  return response.data;
};

export const createPost = async (title: string, content: string) => {
  const response = await api.post('/post', { title, content });
  return response.data;
};

export default api;