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
	import {mapState, mapActions} from 'vuex'

	export default{
		name : 'login',
		data() {
			return {
				show  : true,
				count : '',
				phone : '',
				code  : '',
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
	            'SetLanguage'
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
				if(this.phone != '' || this.code != '')
				this.$router.push({path: '/home'})
			},
			toRegist() {
				// 点击注册
			},
		}
	}
</script>