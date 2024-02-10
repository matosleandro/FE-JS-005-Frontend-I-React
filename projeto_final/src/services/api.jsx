// services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.bestbrowsergames.com', // Substitua pelo seu endpoint real
});

export default api;