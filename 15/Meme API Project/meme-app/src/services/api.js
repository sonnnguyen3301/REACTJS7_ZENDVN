import axios from 'axios'
import { ACCESS_TOKEN, BASE_URL, PROXY_URL } from '../constants';



export const api = {
    call() {
      return axios.create({
        baseURL: BASE_URL,
        headers: {
          accept: `application/json, text/plain, */*, multipart/form-data`
        }
      });
    },
    callApiToken() {
      return axios.create({
        baseURL: BASE_URL,
        headers: {
          'Content-Type' : `application/json`
        },
      });
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