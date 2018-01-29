<!-- 订单详情 -->
<template>
	<div class="infomation">
		<div class="product-list">
			<!-- 商品列表循环 -->
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

		</div>
		<div class="total clearfloat">
			<div class="float-left">{{ $t('info.total') }}</div>
			<div class="float-left info-count">$ 1,998.00</div>
		</div>
		<div class="delivery info-padding">
			{{ $t('info.address') }}
			<p class="info-style">Shanghai jing 'an district kangding road 1018 from pavilion building the second floor</p>
		</div>
		<div class="info-user border-bottom info-padding">
			<span>Amy Wang</span>
			<span>155 0027 9072</span>
		</div>
		<div class="info-padding border-bottom">
			{{ $t('info.msg') }}
			<p class="info-style">Thank you!</p>
		</div>
		<div class="info-bottom info-padding">
			<div class="float-left">
				<div>{{ $t('info.no') }}</div>
				<div>{{ $t('info.time') }}</div>
			</div>
			<div class="float-right">
				<div>12345678901233</div>
				<div>2017-12-04 <span>18:00:27</span></div>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		name : 'infomation',
		data() {
			return {
				
			}
		}
	}
</script>