import axios from 'axios';

const BASEURL = 'http://192.168.0.112:8080/api';

const API = axios.create({
  baseURL: BASEURL,
  headers: {
    'Content-Type': 'application/json',
  },
});
const RefreshAPI = axios.create({
  baseURL: BASEURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

API.interceptors.request.use(
  (config) => {
    const tokens = localStorage.getItem('authTokens');
    if (tokens) {
      const accessToken = JSON.parse(tokens).access_token;
      config.headers['Authorization'] = 'Bearer ' + accessToken;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

API.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && originalRequest.url === '/login') {
      return Promise.reject(error);
    }
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const tokens = localStorage.getItem('authTokens');
      const refreshToken = JSON.parse(tokens).refresh_token;
      const header = 'Bearer ' + refreshToken;
      RefreshAPI.get('/token/refresh', {
        headers: {
          Authorization: header,
        },
      }).then((response) => {
        localStorage.setItem('authTokens', JSON.stringify(response.data));
      });
    }
    return Promise.reject(error);
  }
);

export default API;

//https://medium.com/swlh/handling-access-and-refresh-tokens-using-axios-interceptors-3970b601a5da
