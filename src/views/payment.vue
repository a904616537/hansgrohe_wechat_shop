<!-- 下单 -->
<template>
	<div class="payment infomation">
		<div class="user-head">
			<img src="static/imgs/user-img.png" alt="" class="user-img">
		</div>
		<div class="payment-content">
			<!-- 商品循环 -->
			<div v-for="(item, index) in items" :key="index" class="info-head info-padding clearfloat">
				<div class="cart-img float-left">
					<img :src="item.img" alt="" class="img-style">
				</div>
				<div class="inner float-left">
					<div class="card-title">{{item.name}}</div>
					<div class="card-info">{{item.desc}}</div>
					<div class="card-price">$ {{item.price}}</div>
					<div class="float-right info-count">x {{item.number}}</div>
				</div>
			</div>
			<!-- END 商品循环 -->
		</div>
		<div class="info-padding border-bottom">
			{{ $t('payment.install') }}
			<p class="info-style">
				{{ $t('payment.tips') }}
			</p>
		</div>
		<div class="info-padding border-bottom clearfloat">
			{{ $t('payment.address') }}<i class="iconfont float-right" @click="toAddress">&#xe622</i>
			<p class="info-style">Shanghai jing 'an district kangding road 1018 from pavilion building the second floor</p>
			<span class="payment-user">Amy Wang</span>
			<span class="payment-user">155 0027 9072</span>
		</div>
		<div class="info-padding payment-msg">
			{{ $t('payment.msg') }}
			<textarea :placeholder="$t('payment.textarea')" class="payment-textarea" wrap="wrap"></textarea>
		</div>
		<div class="payment-bottom clearfloat">
			<div class="btn-left float-left">{{ $t('payment.total') }} <span>$ {{total}}</span></div>
			<div class="btn-right float-right" @click="order">{{ $t('payment.payment') }}</div>
		</div>
	</div>
</template>
<script>
	import Vue   from 'vue'
	import axios from 'axios'
	import {mapState, mapActions} from 'vuex'

	export default{
		name : 'payment',
		data() {
			return {
				picked : '',
				total  : 0,
				items  : []
			}
		},
		computed : mapState({
			token : state => state.User.token
		}),
		methods : {
			toAddress() {
				this.$router.push({ path : '/address' })
			},
			order() {
				this.$router.push({path : '/info'})
			},
			getCheckout(arr) {
				axios.post(Vue.config.network + '/cart/checkout', {arr}, {
					headers : { token : this.token }
				})
				.then((response) => {
					console.log('response', response)
					this.total = response.data.total;
					this.items = response.data.items;
				})
				.catch((error) => {});
			}
		},
		created() {
			const arr = localStorage.getItem("checkoutList");
			this.getCheckout(arr);
		}
	}
</script>
<style>

</style>