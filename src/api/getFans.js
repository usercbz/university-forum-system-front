import request from "@/utils/request";

export default function getFans(){
    return request({
        url:'/user/fans',
        method:'get'
    })
}