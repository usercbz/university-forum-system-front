import request from "@/utils/request"

export default function sendCode(data){
    return request({
        url:'/user/code',
        method:'post',
        data:data
    })
}