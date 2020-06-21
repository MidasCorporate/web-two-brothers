import axios from 'axios';

const api = axios.create({
  // baseURL: 'https://api-twobrothers.herokuapp.com',
  // baseURL: 'http://localhost:3333',
  baseURL: 'http://apitwobrothers.site',
});

export default api;
