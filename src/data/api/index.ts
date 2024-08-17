import axios from 'axios';

export const HOST_URL = 'https://ws.audioscrobbler.com/2.0/';

export const API_KEY = '985a25fd2c21189b3d31a77cf0e172b7';

const COMMON_HEADERS = {
  'Content-Type': 'application/json',
};

const api = axios.create({
  baseURL: HOST_URL,
  headers: COMMON_HEADERS,
});

export default api;
