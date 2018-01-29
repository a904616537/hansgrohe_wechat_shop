<template>
	<div class="shoppingList">
		<div class="home-card clearfloat">
			<router-link to="/product">
				<div class="card-left">
					<img src="static/imgs/water-purifier.jpg" alt="" class="card-img"/>
				</div>
			</router-link>
			<div class="card-right">
				<div class="card-title">Talis Select S</div>
				<div class="card-info">Single handle kitchen faucet 300 belt rotating water mouth</div>
				<div class="card-bottom clearfloat">
					<div class="card-price">$ 999.00</div>
					<div class="card-shop" :class="{'active-shop' : active}" @click="addToCard"><i class="iconfont ">&#xe726</i></div>
				</div>
			</div>
		</div>
		<div class="home-card clearfloat">
			<router-link to="/product">
				<div class="card-left">
					<img src="static/imgs/filter.png" alt="" class="card-img"/>
				</div>
			</router-link>
			<div class="card-right">
				<div class="card-title">Talis Select S</div>
				<div class="card-info">Single handle kitchen faucet 300 belt rotating water mouth</div>
				<div class="card-bottom clearfloat">
					<div class="card-price">$ 999.00</div>
					<div class="card-shop" :class="{'active-shop' : active}" @click="addToCard"><i class="iconfont ">&#xe726</i></div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		name : "shoppingList",
		data() {
			return {
				active : false
			} 
		},
		methods : {
			addToCard() {
				this.active = !this.active
			}
		}
	}
</script>
