<!-- 我的 -->
<template>
	<div class="profile hans-address">
		<v-nav></v-nav>
		<div class="address-head">
			<div class="mask">
				<img src="static/imgs/bg1.jpg" class="bg1" alt="">
				<img src="static/imgs/bg1.jpg" class="bg1 blur" alt="">		
			</div>
		</div>
		<div class="profile-card">
			<div class="profile-img">
				<img src="static/imgs/user-img.png" alt="">
				<div>188 0024 2709</div>
			</div>
			<div class="card-inner">
				<ul>
					<li><router-link to="/order">{{ $t('profile.history') }}<span class="float-right">2</span></router-link></li>
					<li><router-link to="/address">{{ $t('profile.address') }}<span class="float-right">2</span></router-link></li>
					<li>{{ $t('profile.service') }}</li>
					<li>{{ $t("login.language") }}<span class="under-line" @click="langeChange">{{lang}}</span></li>
				</ul>
			</div>
		</div>
		<div class="profile-bottom">
			<i class="iconfont">&#xe61e</i>{{ $t('profile.logout') }}
		</div>		
	</div>
</template>
<script>
	import Vue                    from 'vue'
	import {mapState, mapActions} from 'vuex'

	export default{
		name: 'profile',
		data() {
			return {
				lang  : 'en' ? '中文' : 'English'
			}
		},
		methods : {
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
		}
	}
</script>