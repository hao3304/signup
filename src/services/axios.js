import axios, { AxiosResponse } from 'axios'
import config from '@/config'

const service = axios.create({
    baseURL: config.requestBase,
    timeout: 20000,
    headers: {
        'Content-Type': 'application/json; charset=utf-8'
    }
})

service.interceptors.response.use( res => {
    if (res.data.code === 0) {
        return res.data.data
    } else {
        alert(res.data.data)
        return Promise.reject(res.data)
    }
}, error => {
  alert(res.data.data)
    // Message.error(error.response.data)
})

export default service
