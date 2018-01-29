<!-- 购物车 -->
<template>
	<div class="cart">
		<v-nav></v-nav>
		<div class="cart-content">
			<div class="title-style"><i class="iconfont cart-icon cart-title" @click="checkAll">&#xe663</i>{{ $t('cart.all') }}</div>
			<div class="cart-list">
				<v-cartItem></v-cartItem>	
				<v-cartItem></v-cartItem>	
				<v-cartItem></v-cartItem>	
			</div>
			<div class="total clearfloat">
				<div class="float-left">{{ $t('cart.total') }}</div>
				<div class="float-right count">$ 2,997.00</div>
			</div>
		</div>
		<div class="cart-bottom" @click="checkout">{{ $t('cart.checkout') }}</div> 
	</div>
</template>
<script>
	import cartItem from '../views/cartItem'

	export default{
		name : 'cart',
		data() {
			return {
				check : false
			}
		},
		components : {
			'v-cartItem' : cartItem
		},
		methods : {
			checkout() {
				this.$router.push({path : '/payment'})
			},
			checkAll() {
				// 点击全部选中
			}
		}
	}
</script>
<style>
	.cart .checked{
		background-color : #EFEFF4;
	}
	.cart .check-icon{
		color : #DE5E0F;
	}
	.cart .check-num{
		border-left : 1px solid #fff;
	}
</style>