<!-- 地址列表 -->
<template>
	<div class="hans-address infomation">
		<div class="address-head">
			<div class="mask">
				<img src="static/imgs/bg1.jpg" class="bg1" alt="">
				<img src="static/imgs/bg1.jpg" class="bg1 blur" alt="">		
			</div>
			<div class="user-img">
				<div class="img-inner">
					<img src="static/imgs/user-img.png" alt="">
				</div>
			</div>
		</div>
		<div class="address-content">
			<div class="infomation">
				<!-- 地址列表循环 -->
				<v-address v-for="(address, index) in address_book" :data="address" :key="index" :index="index" :onSelect="onSelect"></v-address>

			</div>
		</div>
		<div class="address-bottom" @click="addAddress">
			<span class="iconfont">+</span>
		</div>

	</div>
</template>
<script>
	import Vue   from 'vue'
	import axios from 'axios'
	import {mapState, mapActions} from 'vuex'
	import addresslist from '@/components/addressList'

	export default{
		name : 'hans-address',
		data() {
			return {
				address_book : []
			}
		},
		computed : mapState({
			token : state => state.User.token
		}),
		components : {
			'v-address' : addresslist
		},
		methods : {
			addAddress() {
				// 添加地址
				console.log('add-address')
				this.$router.push({path : '/addAddress'})
			},
			getAddress() {
				axios.get(Vue.config.network + '/member/address', {
					headers : { token : this.token }
				})
				.then((response) => this.address_book = response.data)
				.catch((error) => {});
			},
			onSelect(index) {
				axios.put(Vue.config.network + '/member/address', {index}, {
					headers : { token : this.token }
				})
				.then((response) => this.$router.go(-1))
				.catch((error) => {});

				
			}
		},
		created() {
			this.getAddress();
		}
	}
</script>