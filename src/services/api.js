import axios from 'axios';

const api = axios.create({
  // baseURL: 'https://api-twobrothers.herokuapp.com',
  // baseURL: 'http://localhost:3333',
  baseURL: 'https://apitwobrothers.site',
});

export default api;
