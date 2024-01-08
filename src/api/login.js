import request from "@/utils/request"

export default function login(data) {
    return request({
        url: '/user/login',
        method: 'post',
        data: data
    })
}