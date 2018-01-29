<!--  购物车（单个商品）  -->
<template>
	<div class="cart-inner clearfloat" :class="{ 'checked' : check}">
		<div class="cart-check float-left" @click="checked"><i class="iconfont cart-icon" :class="{ 'check-icon' : check}">&#xe663</i></div>
		<img src="static/imgs/water-purifier.jpg" alt="" class="cart-img float-left">
		<div class="inner-info float-left">
			<div class="card-title">Talis Select S</div>
			<div class="card-info">Single handle kitchen faucet 300 belt rotating water mouth</div>
			<div class="card-price">$ 999.00</div>
		</div>
		<div class="num float-right" :class="{ 'check-num' : check }">
			<div @click="increment">+</div>
			<div class="count">{{ count }}</div>
			<div @click="decrement">—</div>
		</div>
	</div>
</template>	
<script>
	export default{
		name : 'cartItem',
		data() {
			return {
				count  : 1,
				check  : false
			}
		},
		methods : {
			checked() {
				this.check = !this.check
			},
			increment() {
            	this.count += 1;
            },
            decrement() {
            	if (this.count == 1 ) return;
            	else this.count -= 1
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