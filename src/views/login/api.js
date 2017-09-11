import axios from 'axios'
import Mock from 'mockjs'
export const loginApi=(param)=>{
	return axios.post('/login',param,{timeout:1000})
}
var Random = Mock.Random
var randomNum = (function() {
    return Math.floor(Math.random() * 10)
})()
Mock.mock(new RegExp('/login'),({url,body})=>{
	var data={
		sessionId:randomNum
	}
	return {
        "msgbody": {data},
        "errcode": 0,
        "errmsg": ""
    }
})