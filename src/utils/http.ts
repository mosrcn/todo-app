import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

instance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    const originalConfig = error.config as typeof error.config & { _retry: boolean };
    if (error.response) {
      if (error.response.status === 400) {
      }

      if (error.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;
      }

      if (error.response.status === 403) {
      }

      if (error.response.status === 404) {
      }

      if (error.response.status === 500) {
      }

      if (error.response.status === 502) {
      }

      if (error.response.status === 503) {
      }
    } else if (error.request) {
      // The request was made but no response was received
    } else {
      // Something happened in setting up the request that triggered an Error
    }

    return Promise.reject(error);
  }
);

export default instance;
