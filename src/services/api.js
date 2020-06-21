import axios from 'axios';

const api = axios.create({
  // baseURL: 'https://api-twobrothers.herokuapp.com',
  // baseURL: 'http://localhost:3333',
  baseURL: 'https://157.245.80.142',
});

export default api;
