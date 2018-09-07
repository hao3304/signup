import axios, { AxiosResponse } from 'axios'
import config from '@/config'
import { Message } from 'element-ui'


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
        Message.error(res.data.message)
        return Promise.reject(res.data)
    }
}, error => {
    Message.error(error.response.data)
})

export default service
