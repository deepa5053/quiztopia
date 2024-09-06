import axios from 'axios';

const api = axios.create({
  baseURL: 'https://fk7zu3f4gj.execute-api.eu-north-1.amazonaws.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const login = (email, password) =>
  api.post('/login', { email, password });

export const register = (email, password) =>
  api.post('/register', { email, password });

export const getQuizzes = () => api.get('/quizzes');

export const createQuiz = (quizData) => api.post('/quizzes', quizData);

export const addQuestion = (quizId, questionData) =>
  api.post(`/quizzes/${quizId}/questions`, questionData);

export const getQuizDetails = (quizId) =>
  api.get(`/quizzes/${quizId}`);

export const getUserLocation = () =>
  new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => reject(error)
    );
  });
