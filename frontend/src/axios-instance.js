import axios from 'axios';

const instance = axios.create({
  baseURL: (process.env.NODE_ENV == "production" && 'https://api.local.lowympact.fr/')  || 'http://127.0.0.1:3001/',
  timeout: 3000
});

export default instance;