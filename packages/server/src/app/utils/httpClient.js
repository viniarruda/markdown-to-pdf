import axios from 'axios';
import api from './services';

export default function() {
  // Create a basic Axios instance to all requests (this object can be customized before making the call)
  const instance = axios.create({
    baseURL: api.github_api, // TODO
    headers: {
      Accept: 'application/vnd.github.v3+json',
    },
  });

  // Insert token on all requests when there is a token in the device storage
  instance.interceptors.request.use(config => {
    const token = process.env.GITHUB_PERSONAL_KEY;

    if (token) {
      config.headers.common.Authorization = `Bearer ${token}`;
    }

    return config;
  });

  instance.interceptors.response.use(
    response => response,
    error => {
      if (!error.response) {
        error.response = { data: { genericError: error } };
      }

      return Promise.reject(error);
    }
  );

  return instance;
}
