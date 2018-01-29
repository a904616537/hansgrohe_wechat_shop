<!-- 历史订单 -->
<template>
	<div class="order">
		<div class="order-content infomation">
			<!-- 订单循环 -->
			<div class="order-list" @click="info">
				<div class="info-head info-padding clearfloat">
					<img src="static/imgs/cart-img.jpg" alt="" class="cart-img float-left">
					<div class="inner float-left">
						<div class="card-title">Talis Select S</div>
						<div class="card-info">Single handle kitchen faucet 300 belt rotating water mouth</div>
						<div class="card-price">$ 999.00</div>
						<div class="float-right info-count">x 2</div>
					</div>
				</div>
				<div class="total clearfloat">
					<div class="float-left">{{ $t('order.total') }}</div>
					<div class="float-left info-count">$ 1,998.00</div>
				</div>
			</div>
			<div class="order-list">
				<div class="info-head info-padding clearfloat">
					<img src="static/imgs/cart-img.jpg" alt="" class="cart-img float-left">
					<div class="inner float-left">
						<div class="card-title">Talis Select S</div>
						<div class="card-info">Single handle kitchen faucet 300 belt rotating water mouth</div>
						<div class="card-price">$ 800.00</div>
						<div class="float-right info-count">x 2</div>
					</div>
				</div>
				<div class="total clearfloat">
					<div class="float-left">{{ $t('order.total') }}</div>
					<div class="float-left info-count">$ 1,600.00</div>
				</div>
			</div>

		</div>
		<div class="order-bottom">
			<div class="product-btn btn-left">{{ $t('order.progress') }}</div>
			<div class="product-btn btn-right">{{ $t('order.all') }}</div>
		</div>
	</div>
</template>
<script>
	export default{
		name : 'order',
		data() {
			return {
				
			}
		},
		methods : {
			info() {
				this.$router.push({path : '/info'})
			}
		}
	}
</script>