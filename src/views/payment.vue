<!-- 下单 -->
<template>
	<div class="payment infomation">
		<div class="user-head">
			<img src="static/imgs/user-img.png" alt="" class="user-img">
		</div>
		<div class="payment-content">
			<!-- 商品循环 -->
			<div class="info-head info-padding clearfloat">
				<div class="cart-img float-left">
					<img src="static/imgs/water-purifier.jpg" alt="" class="img-style">
				</div>
				<div class="inner float-left">
					<div class="card-title">Talis Select S</div>
					<div class="card-info">Single handle kitchen faucet 300 belt rotating water mouth</div>
					<div class="card-price">$ 999.00</div>
					<div class="float-right info-count">x 2</div>
				</div>
			</div>
			<div class="info-head info-padding clearfloat">
				<div class="cart-img float-left">
					<img src="static/imgs/filter.png" alt="" class="img-style">
				</div>
				<div class="inner float-left">
					<div class="card-title">Talis Select S</div>
					<div class="card-info">Single handle kitchen faucet 300 belt rotating water mouth</div>
					<div class="card-price">$ 999.00</div>
					<div class="float-right info-count">x 1</div>
				</div>
			</div>
		</div>
		<div class="info-padding border-bottom">
			安装
			<div class="pick-input">
				<div class="checked-input">
					<input type="radio" id="yes" value="yes" v-model="picked">
					<label for="one"></label>
					<span>Yes</span>
				</div>
				<div class="checked-input">
					<input type="radio" id="no" value="no" v-model="picked">
					<label for="two"></label>
					<span>No</span>
				</div>
			</div>
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
			<div class="btn-left float-left">{{ $t('payment.total') }} <span>$ 2997.00</span></div>
			<div class="btn-right float-right" @click="order">{{ $t('payment.payment') }}</div>
		</div>
	</div>
</template>
<script>
	export default{
		name : 'payment',
		data() {
			return {
				picked  : ''
			}
		},
		methods : {
			toAddress() {
				this.$router.push({ path : '/address' })
			},
			order() {
				this.$router.push({path : '/info'})
			}
		}
	}
</script>
<style>

</style>