<template>
<div class="container">
	<input type="text" v-model="model.name" placeholder="输入手机号/邮箱" />
	<input type="password" v-model="model.password" placeholder="输入密码" />
	<button @click="userNameLogin">登陆</button>
</div>
</template>
<script >
	import * as types from '@/store/types'
	import {loginApi} from '@/views/login/api.js'
	export default{
		data(){
			return{
				model:{
					name:'',
					password:''
				},
				isLogin:false,
			}
		},
		mounted(){},
		methods:{
			login(){
				let loginParam={
					name:this.model.name,
					password:this.model.password
				}
				//调用登陆接口
				loginApi(loginParam).then(function({data}){
					console.log(data)
					if(data.errcode==0){
						sessionStorage.setItem('session',data.msgbody.data.sessionId)
						this.$store.commit(types.LOGIN,data.msgbody.data.sessionId)
						this.isLogin=true
						this.$router.push('/success')
					}
				}.bind(this))
			},
			userNameLogin(){
				if(this.model.name!=''&&this.model.password!=''){
					this.login()
				}else{
					alert('用户名/密码必填')
				}
			}
		}
	}
</script>
<style type="text/css">
	.container{
		width: 300px;
		margin:0 auto;
	}
	input{
		display: block;
		width:300px;
		height:50px;
		margin-bottom: 10px
	}
	button{
		width:300px;
		height:50px;
		line-height: 50px;
	}
</style>