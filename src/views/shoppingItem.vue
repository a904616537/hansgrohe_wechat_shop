<template>
<div class="home-card clearfloat">
	<router-link :to="{path : '/product', query : { _id : data._id }}">
		<div class="card-left">
			<img :src="data.item[0].img" alt="" class="card-img">
		</div>
	</router-link>
	<div class="card-right">
		<div class="card-title">{{data.item && data.item.length > 0 ? data.item[0].name : ""}}</div>
		<div class="card-info">{{data.item && data.item.length > 0 ? data.item[0].desc : ""}}</div>
		<div class="card-bottom clearfloat">
			<div class="card-price">¥ {{data.item && data.item.length > 0 ? data.item[0].price : ""}}</div>
			<div class="card-shop" :class="{'active-shop' : active}" @click="addToCard(data._id, data.item[0]._id)"><i class="iconfont ">&#xe726</i></div>
		</div>
	</div>
</div>
</template>
<script>
	import Vue   from 'vue'
	import axios from 'axios'

	export default{
		name : "shoppingList",
		data() {
			return {
				active   : this.selected,
				products : []
			}
		},
		props : {
			data : {
				type    : Object,
				default : () => ({})
			},
			selected : {
				type    : Boolean,
				default : false
			}
		},
		methods : {
			addToCard(product_id, item_id) {
				this.active = true;
				this.$router.push({path : '/product', query : { _id : this.data._id }})
			}
		}
	}
</script>

