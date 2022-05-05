import axios from 'axios'

const BASE_URL = 'https://api.github.com/'

const api_GitHub = axios.create({
    baseURL: BASE_URL
})

export default api_GitHub;