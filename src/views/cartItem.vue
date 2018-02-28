<!--  购物车（单个商品）  -->
<template>
	<swipeout-item transition-mode="follow">
		<div slot="right-menu">
			<swipeout-button @click.native="remove(index)" type="warn" style="margin-top: -1px;">{{$t('remove')}}</swipeout-button>
        </div>
		<div slot="content" class="cart-inner clearfloat" :class="{ 'checked' : check}">
			<div class="cart-check float-left" @click="onSelect(index)"><i class="iconfont cart-icon" :class="{ 'check-icon' : check}">&#xe663</i></div>
			<img :src="product.img" alt="" class="cart-img float-left">
			<div class="inner-info float-left">
				<div class="card-title">{{product.name}}</div>
				<div class="card-info">{{product.desc}}</div>
				<div class="card-price">$ {{subtotal}}</div>
			</div>
			<div class="num float-right" :class="{ 'check-num' : check }">
				<div @click="increment">+</div>
				<div class="count">{{ count }}</div>
				<div @click="decrement">—</div>
			</div>
		</div>
	</swipeout-item>
	
</template>	
<script>
	import Vue   from 'vue'
	import axios from 'axios'
	import {mapState, mapActions} from 'vuex'
	import { SwipeoutItem, SwipeoutButton } from 'vux'

	export default{
		name : 'cartItem',
		data() {
			return {
				count : this.data.number || 1
			}
		},
		components : {
			SwipeoutItem,
			SwipeoutButton,
		},
		props : {
			data : {
				type    : Object,
				default : () => {return {}}
			},
			index : {
				type    : Number,
				default : 0
			},
			check : {
				type    : Boolean,
				default : false
			},
			onBack : {
				type    : Function,
				default : (index, count) => {}
			},
			onRemove : {
				type    : Function,
				default : (index) => {}
			},
			onSelect : {
				type    : Function,
				default : (index) => {}
			}
		},
		computed : mapState({
			token : state => state.User.token,
			product() {
				return this.data.product.item.find(val => this.data.selected == val._id)
			},
			subtotal() {
				return (this.count * this.product.price).toFixed(1);
			}
		}),
		methods : {
			increment() {
				const model = {
					_id       : this.data._id,
					operation : 'add',
				}
				// 提交服务器
				axios.put(Vue.config.network + '/cart', model, {
					headers : { token : this.token }
				})
				.then((response) => {
					this.count += 1;
					this.onBack(this.index, this.count);
				})
				.catch((error) => {});

            	
            },
            decrement() {
            	const model = {
					_id       : this.data._id,
					operation : 'reduce',
				}
				// 提交服务器
				axios.put(Vue.config.network + '/cart', model, {
					headers : { token : this.token }
				})
				.then((response) => {
					if (this.count == 1 ) return;
            		else {
            			this.count -= 1
            			this.onBack(this.index, this.count);
            		}
				})
				.catch((error) => {});
            },
			remove(index) {
				this.onRemove(index);
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