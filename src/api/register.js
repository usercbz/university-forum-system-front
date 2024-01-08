import request from "@/utils/request"

export default function register(data){
    return request({
        url:'/user/register',
        method:'post',
        data:data
    })
}