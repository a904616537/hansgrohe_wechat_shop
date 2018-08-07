<template>
	<div class="shoppingList">
		<!-- 商品数据 -->
		<v-item v-for="(val, index) in products" :key="index" :selected="onSelect(val)" :data="val" />
		<!-- <div v-for="(val, index) in products" class="home-card clearfloat">
			<router-link :to="{path : '/product', query : { _id : val._id }}">
				<div class="card-left">
					<img :src="val.item[0].img" alt="" class="card-img">
				</div>
			</router-link>
			<div class="card-right">
				<div class="card-title">{{val.item && val.item.length > 0 ? val.item[0].name : ""}}</div>
				<div class="card-info">{{val.item && val.item.length > 0 ? val.item[0].desc : ""}}</div>
				<div class="card-bottom clearfloat">
					<div class="card-price">¥ {{val.item && val.item.length > 0 ? val.item[0].price : ""}}</div>
					<div class="card-shop" :class="{'active-shop' : active}" @click="addToCard(val._id, val.item[0]._id)"><i class="iconfont ">&#xe726</i></div>
				</div>
			</div>
		</div> -->
		<!-- END 商品数据 -->
	</div>
</template>
<script>
	import Vue   from 'vue'
	import axios from 'axios'
	import {mapState, mapActions} from 'vuex'
	import Item from './shoppingItem'

	export default{
		name : "shoppingList",
		data() {
			return {
				cart_item : [],
				products  : []
			}
		},
		components : {
			'v-item' : Item,
		},
		computed : mapState({
			token : state => state.User.token,
		}),
		methods : {
			getCart(next) {
				// 获取购物车
				axios.get(Vue.config.network + '/cart', {
					headers : { token : this.token }
				})
				.then((response) => {
					console.log('cart_item', response.data.cart_item)
					this.cart_item = response.data.cart_item;

				})
				.catch((error) => {});
			},
			getProduct() {
				// 获取商品列表
				axios.get(Vue.config.network + '/product')
				.then((response) => {
					this.products = response.data.data;
				})
				.catch((error) => {});
			},
			onSelect(item) {
				return (this.cart_item.find(val=>val.product._id == item._id)) != null ;
			}
		},
		created() {
			this.getProduct();
			this.getCart();
		}
	}
</script>

