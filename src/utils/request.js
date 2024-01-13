import axios from 'axios'
import router from '@/router'
const request = axios.create({
    baseURL: 'http://localhost:7070/api',//前缀
    timeout: 30000
})

//拦截器
request.interceptors.request.use(
    config => { return config },
    err => { return Promise.reject(err) }
)

request.interceptors.response.use(
    response => {
        const { data } = response;
        if (data.code === 500) {
            return Promise.reject(data.message)
        }
        return response.data
    },
    err => {
        if (err.response.status == 401) {
            router.push('/login')
            return Promise.reject("请完成登录")
        }
        return Promise.reject(err)
    }
)

export default request