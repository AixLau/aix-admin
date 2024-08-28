import axios from "axios";

let request = axios.create({
    baseURL: import.meta.env.VITE_BASE_API,
    timeout: 10000,
})

request.interceptors.request.use((config) => {
    return config
})

request.interceptors.response.use((response) => {
    return response.data
}, (error) => {
    return Promise.reject(error)
})

export default {request}