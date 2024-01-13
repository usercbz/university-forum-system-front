import request from "@/utils/request";

export default function getFollows(){
    return request({
        url:'/user/follow',
        method:'get',
    })
}