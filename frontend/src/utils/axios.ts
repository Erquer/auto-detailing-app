import Axios from 'axios';

const axios = Axios.create({
  baseURL: 'http://localhost:3010/api',
  headers: {},
});

export default axios;
