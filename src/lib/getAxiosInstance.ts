import axios from 'axios';
import env from './envValidator';

const GITHUB_API_TOKEN = env.VITE_GITHUB_TOKEN;
const GITHUB_API_URL = env.VITE_GITHUB_API_URL;

const instance = axios.create({
  baseURL: GITHUB_API_URL,
  headers: {
    Accept: 'application/vnd.github+json',
  }
});

axios.defaults.headers.common['Authorization'] = GITHUB_API_TOKEN;

export default instance;
