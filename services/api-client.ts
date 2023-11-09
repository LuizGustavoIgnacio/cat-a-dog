import axios, { CanceledError } from 'axios';

export default axios.create({
  baseURL: '/api',
});

export { CanceledError };
