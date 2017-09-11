import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './types'
Vue.use(Vuex)
export const store=new Vuex.Store({
	state:{
		userInfo:{
			nick:null
		},
		token:null
	},
	mutations:{
		[types.LOGIN]:(state,data)=>{
			localStorage.token=data 
			state.token=data
		},
		[types.LOGOUT]:(state)=>{
			localStorage.removeItem('token')
			state.token=null
		}
		
	},
	actions:{}
})