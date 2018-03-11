<!-- 登录页面 -->
<template>
	<div class="login">
	    <div class="pub-img">
	        <img src="static/imgs/login.jpg" class="img" />
	    </div>
	    <div class="index-content">
	    	<input type="text" :placeholder="$t('login.mobile')" class="pub-input" v-model="phone">
	    	<input type="text" :placeholder="$t('login.code')" class="pub-input" v-model="code">
	    	<div class="sms pub-xs-input" @click="getCode" v-show="show">{{ $t('login.sms') }}</div>
			<div class="sms pub-xs-input sms-time" v-show="!show">{{ count}} s</div>
			<div class="login" @click="toLogin">{{ $t('login.login') }}</div>
			<div class="regist under-line" @click="toRegist">{{ $t('login.regist') }}</div>
	    </div>
	    <div class="language">
			<p class="pub-language">{{ $t("login.language") }}<span class="under-line" @click="langeChange">{{lang}}</span></p>
		</div>
	</div>
</template>

<script>
	import Vue                    from 'vue'
	import axios                  from 'axios'
	import {mapState, mapActions} from 'vuex'
	import Cookie                 from 'vue-cookie'

	export default{
		name : 'login',
		data() {
			return {
				show  : true,
				count : '',
				phone : '',
				code  : '',
				getcode : '',
				timer : null,
				lang  : 'en' ? '中文' : 'English'
			}
		},
		watch : {
			phone(newValue, oldValue) {
				this.phone = newValue.length > oldValue.length ? newValue.replace(/\s/g, '').replace(/(\d{3})(\d{0,4})(\d{0,4})/, '$1 $2 $3') : this.phone.trim()
			}
		},
		methods: {
			...mapActions([
	            'SetLanguage',
	            'onLogin'
	        ]),
			langeChange() {
				if(this.lang == 'English') {
	        		this.lang = '中文';
	        		this.$i18n.set('en');
	        		this.SetLanguage('en')
				}else {
					this.$i18n.set('zh');
					this.lang = 'English';
					this.SetLanguage('zh')
				}
			},
			getCode() {
				// 获取sms
				axios.get(Vue.config.network + '/user/sms?phone=' + this.phone)
				.then((response) => {
					console.log('response', response)
					this.getcode = response.data.code;
				})
				.catch((error) => {});
				const time = 60;
				if(!this.timer){
					this.count = time;
					this.show  = false;
					this.timer = setInterval(() => {
						if(this.count > 0 && this.count <= time){
							this.count --;
						}else{
							this.show  = true;
							clearInterval(this.timer);
							this.timer = null;
						}
					},1000)
				}
			},
			toLogin() {
				// 点击登录
				if(this.phone.trim() != '' || this.code.trim() != '') {
					if(this.code.trim() == this.getcode) {
						const model = {phone : this.phone};
						axios.post(Vue.config.network + '/member', model)
						.then((response) => {
							console.log('login response', response)
							this.$store.dispatch('onLogin', {user: response.data.user, token: response.data.token});
							Cookie.set('user-token', response.data.token)
							Cookie.set('user', JSON.stringify(response.data.user))
							this.$router.push({path: '/home'})
						})
						.catch((error) => {
							console.log('error', error)
							alert('登陆失败！')
						});
					}
				}
			},
			toRegist() {
				// 点击注册
				// this.$router.push({path : '/registe'})
			},
		}
	}
</script>