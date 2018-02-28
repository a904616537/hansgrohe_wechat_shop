<template>
	<div class="shoppingList">
		<!-- 商品数据 -->
		<div v-for="(val, index) in products" class="home-card clearfloat">
			<router-link :to="{path : '/product', query : { _id : val._id }}">
				<div class="card-left">
					<img :src="(val.item.length > 0 && val.item[0].img) ? val.item[0].img : ''" alt="" class="card-img"/>
				</div>
			</router-link>
			<div class="card-right">
				<div class="card-title">{{val.item.length > 0 ? val.item[0].name : ""}}</div>
				<div class="card-info">{{val.item.length > 0 ? val.item[0].desc : ""}}</div>
				<div class="card-bottom clearfloat">
					<div class="card-price">$ {{val.item.length > 0 ? val.item[0].price : ""}}</div>
					<div class="card-shop" :class="{'active-shop' : active}" @click="addToCard(val._id, val.item[0]._id)"><i class="iconfont ">&#xe726</i></div>
				</div>
			</div>
		</div>
		<!-- END 商品数据 -->
	</div>
</template>
<script>
	import Vue   from 'vue'
	import axios from 'axios'

	export default{
		name : "shoppingList",
		data() {
			return {
				active : false,
				products : []
			}
		},
		methods : {
			addToCard(product_id, item_id) {
				this.active = !this.active
			},
			getProduct() {
				// 获取商品列表
				axios.get(Vue.config.network + '/product')
				.then((response) => {
					console.log('response', response)
					this.products = response.data;
				})
				.catch((error) => {});
			},
		},
		created() {
			this.getProduct();
		}
	}
</script>
