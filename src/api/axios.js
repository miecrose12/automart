import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://auto-mart-apis-nodejs-mongodb.onrender.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
