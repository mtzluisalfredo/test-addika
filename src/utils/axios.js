/* eslint-disable no-param-reassign */
import axios from 'axios';
import api from './services';

export default function () {
  const instance = axios.create({
    baseURL: api.server,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  instance.interceptors.request.use(async config => {
    const token = localStorage.getItem('access_token');

    if (token) {
      config.headers.common.Authorization = `Bearer ${token}`;
    }

    return config;
  });

  instance.interceptors.response.use(
    response => (response),
    error => {
      if (error.response && error.response.status === 401) {
        localStorage.clear();
      }

      if (!error.response) {
        error.response = { data: { genericError: error } };
      }

      return Promise.reject(error);
    },
  );

  return instance;
}
