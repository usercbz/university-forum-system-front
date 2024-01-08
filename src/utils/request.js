import axios from 'axios'

const request = axios.create({
    baseURL: 'http://localhost:7070/api',//前缀
    timeout: 20000
})

//拦截器
request.interceptors.request.use(
    config => { return config },
    err => { return Promise.reject(err) }
)

request.interceptors.response.use(
    response => { return response },
    err => { return Promise.reject(err) }
)

export default request