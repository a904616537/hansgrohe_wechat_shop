<!-- 购物车 -->
<template>
	<div class="cart">
		<v-nav></v-nav>
		<div class="cart-content">
			<div class="title-style">
				<i class="iconfont cart-icon cart-title" @click="checkAll" :class="{ 'check-icon' : check}">&#xe663</i>{{ $t('cart.all') }}
			</div>
			<div class="cart-list">
				<swipeout>
					<v-cartItem
					v-for="(val, index) in cart_item"
					:key="index"
					:data="val"
					:index="index"
					:check="select_item.includes(val._id)"
					:onBack="onBack"
					:onRemove="onRemove"
					:onSelect="onSelect" />
				</swipeout>
			</div>
			<div class="total clearfloat">
				<div class="float-left">{{ $t('cart.total') }}</div>
				<div class="float-right count">¥ {{total}}</div>
			</div>
		</div>
		<div class="cart-bottom" :class="select_item.length == 0?'cart-btn-def':null" @click="checkout">{{ $t('cart.checkout') }}</div> 
	</div>
</template>
<script>
	import Vue   from 'vue'
	import axios from 'axios'
	import { Swipeout} from 'vux';
	import {mapState, mapActions} from 'vuex'
	import cartItem from '../views/cartItem'

	export default{
		name : 'cart',
		data() {
			return {
				cart_item   : [],
				select_item : []
			}
		},
		computed : mapState({
			token : state => state.User.token,
			total() {
				let total = 0;
				this.select_item.map(val => {
					const item = this.cart_item.find(v => v._id == val);
					const product = item.product.item.find(v => item.selected == v._id);
					if(product) total += product.price * item.number;
					return val;
				})
				return total.toFixed(1);
			},
			check() {
				return this.cart_item.length == this.select_item.length;
			}
		}),
		components : {
			'v-cartItem' : cartItem,
			Swipeout
		},
		methods : {
			checkout() {
				if(this.select_item.length > 0) {
					localStorage.setItem("checkoutList", JSON.stringify(this.select_item));
					this.$router.push({path : '/payment'})
				}
			},
			checkAll() {
				// 点击全部选中
				this.cart_item.map((val, index) => {
					if(!this.select_item.includes(val._id)) {
						this.select_item.push(val._id)
					}
					return;
				});
			},
			getCart(next) {
				// 获取购物车
				axios.get(Vue.config.network + '/cart', {
					headers : { token : this.token }
				})
				.then((response) => {
					this.cart_item = response.data.cart_item;
					next();
				})
				.catch((error) => {});
			},
			onBack(index, count) {
				let item = this.cart_item[index];
				item.number = count;
				this.cart_item = this.cart_item.map(val => val)
			},
			onSelect(index) {
				let item = this.cart_item[index];
				const selected = this.select_item.includes(item._id);
				if(selected) {
					const forindex = this.select_item.findIndex(val => val == item._id);
					this.select_item.splice(forindex, 1);
				}
				else this.select_item.push(item._id);
			},
			onRemove(index) {
				const item = this.cart_item[index];
				// 移除购物车项
				axios.delete(Vue.config.network + '/cart?_id=' + item._id, {
					headers : { token : this.token}
				})
				.then((response) => {
					const selected_index = this.select_item.findIndex(val => val == item._id);
					if(selected_index > -1) this.select_item.splice(selected_index, 1);
					this.cart_item.splice(index, 1);
				})
				.catch((error) => {});
			}
		},
		created() {
			this.getCart(() => this.checkAll());
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
	.cart .cart-btn-def {
		background-color : #B9B9B9;
	}
</style>