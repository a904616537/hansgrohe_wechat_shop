<!-- 历史订单 -->
<template>
	<div class="order">
		<div class="order-content infomation" v-loading="loading">
			<!-- 订单循环 -->
			<div class="order-list" v-for="(order, index) in selectedOrder" :key="index"  @click="info(order._id)">
				<div class="info-head info-padding clearfloat" v-for="(item, i) in order.order_item" :key="i">
					<div class="cart-img float-left imgbg" :style="{ 'background-image': 'url(' + item.img + ')' }"></div>
					<div class="inner float-left">
						<div class="card-title">{{item.name}}</div>
						<div class="card-info">{{item.desc}}</div>
						<div class="card-price">$ {{item.price}}</div>
						<div class="float-right info-count">x {{item.number}}</div>
					</div>
				</div>
				<div class="total clearfloat">
					<div class="float-left">{{ $t('order.total') }}</div>
					<div class="float-left info-count">$ {{order.total}}</div>
					<div class="float-right">{{onStatus(order.status)}}</div>
				</div>
			</div>

		</div>
		<div class="order-bottom">
			<div class="product-btn btn-left" @click="onProgress">{{ $t('order.progress') }}</div>
			<div class="product-btn btn-right" @click="onAllOrder">{{ $t('order.all') }}</div>
		</div>
	</div>
</template>
<script>

	import Vue                    from 'vue'
	import {mapState, mapActions} from 'vuex'
	import axios                  from 'axios'

	export default{
		name : 'order',
		data() {
			return {
				loading : false,
				orders : [],
				filter : false
			}
		},
		computed : mapState({
			token : state => state.User.token,
			user  : state => state.User.user,
			selectedOrder() {
				if(this.filter) {
					return this.orders.filter(val => val.status < 3)
				} else return this.orders;
			}
		}),
		methods : {
			info(_id) {
				this.$router.push({path : '/info', query : { order_id : _id }})
			},
			onProgress() {
				this.loading = true;
				setTimeout(() => {
					this.loading = false;
					this.filter = true;
				}, 500);
			},
			onAllOrder() {
				this.loading = true;
				setTimeout(() => {
					this.loading = false;
					this.filter = false;
				}, 500);
				
			},
			getOrder() {
				axios.get(Vue.config.network + '/order/me', {
					headers : { token : this.token }
				})
				.then((response) => {
					console.log('response', response)
					this.orders = response.data;
				})
				.catch((error) => {});
			},
			onStatus(status) {
				switch(status) {
					case 0:
					return 'Not paying';
					case 1:
					return 'Payment';
					case 2:
					return 'Processing';
					case 3:
					return 'Complete';
				}
			}
		},
		created() {
			this.getOrder();
		}
	}
</script>