<!-- 我的 -->
<template>
	<div class="profile hans-address">
		<v-nav></v-nav>
		<div class="address-head">
			<div class="mask">
				<img src="shop/static/imgs/bg1.jpg" class="bg1" alt="">
				<img src="shop/static/imgs/bg1.jpg" class="bg1 blur" alt="">		
			</div>
		</div>
		<div class="profile-card">
			<div class="profile-img">
				<img src="static/imgs/user-img.png" alt="">
				<div>{{user.phone}}</div>
			</div>
			<div class="card-inner">
				<ul>
					<li><router-link to="/order">{{ $t('profile.history') }}<span class="float-right">{{order_count}}</span></router-link></li>
					<li><router-link to="/address">{{ $t('profile.address') }}<span class="float-right">{{address_count}}</span></router-link></li>
					<li>{{ $t('profile.service') }}</li>
					<li>{{ $t("login.language") }}<span class="under-line" @click="langeChange">{{lang}}</span></li>
				</ul>
			</div>
		</div>
		<div class="profile-bottom" @click="onLogout">
			<i class="iconfont">&#xe61e</i>{{ $t('profile.logout') }}
		</div>		
	</div>
</template>
<script>
	import Vue                    from 'vue'
	import {mapState, mapActions} from 'vuex'
	import axios                  from 'axios'

	export default{
		name: 'profile',
		data() {
			return {
				address_book : [],
				order_count   : 0,
				address_count : 0,
				lang          : 'en' ? '中文' : 'English'
			}
		},
		computed : mapState({
			token  : state => state.User.token,
			user   : state => state.User.user,
			wechat : state => state.User.wechat
		}),
		methods : {
			...mapActions([
	            'SetLanguage'
	        ]),
	        onLogout() {
	        	WeixinJSBridge.call('closeWindow');
	        },
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
			orderCount() {
				axios.get(Vue.config.network + '/order/count', {
					headers : { token : this.token }
				})
				.then((response) => {
					this.order_count = response.data.count;
				})
				.catch((error) => {});
			},
			addressCount() {
				axios.get(Vue.config.network + '/member/address', {
					headers : { token : this.token }
				})
				.then((response) => {
					this.address_book = response.data;
					this.address_count = response.data.length;
				})
				.catch((error) => {});
			}
		},
		created() {
			this.orderCount();
			this.addressCount();
		}
	}
</script>