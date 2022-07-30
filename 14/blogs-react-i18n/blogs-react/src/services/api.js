import axios from 'axios'
import { ACCESS_TOKEN, BASE_URL } from "../constants";
import { getLocale } from '../i18n';


export const api = {
  call() {
    const axiosInstance = axios.create({
      baseURL: BASE_URL,
    });
    
    axiosInstance.interceptors.request.use(function (config) {
      if (config.params) {
        config.params.lang = getLocale()
        config.params.hello = 'world';
      }
      return config;
    }, function (error) {
      return Promise.reject(error);
    });

    return axiosInstance
  },
  callWithToken() {
    return axios.create({
      baseURL: BASE_URL,
      headers: {
        Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`
      }
    });
  }
}
