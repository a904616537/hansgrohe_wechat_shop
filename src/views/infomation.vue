<!-- 订单详情 -->
<template>
	<div class="infomation">
		<div class="product-list">
			<!-- 商品列表循环 -->
			<div v-for="(item, index) in order.order_item" :key="index" class="info-head info-padding clearfloat">
				<div class="cart-img float-left">
					<div class="cart-img float-left imgbg" :style="{ 'background-image': 'url(' + item.img + ')' }"></div>
					
				</div>
				<div class="inner float-left">
					<div class="card-title">{{item.name}}</div>
					<div class="card-info">{{item.desc}}</div>
					<div class="card-price">¥ {{item.price}}</div>
					<div class="float-right info-count">x {{item.number}}</div>
				</div>
			</div>

		</div>
		<div class="total clearfloat">
			<div class="float-left">{{ $t('info.total') }}</div>
			<div class="float-left info-count">¥ {{order.total}}</div>
		</div>
		<div class="delivery info-padding">
			{{ $t('info.address') }}
			<p class="info-style">{{order.address.address}}</p>
		</div>
		<div class="info-user border-bottom info-padding">
			<span>{{order.address.recipients}}</span>
			<span>{{order.address.phone}}</span>
		</div>
		<div class="info-padding border-bottom">
			{{ $t('info.msg') }}
			<p class="info-style">{{order.message}}</p>
		</div>
		<div class="info-bottom info-padding">
			<div class="float-left">
				<div>{{ $t('info.no') }}</div>
				<div>{{ $t('info.time') }}</div>
			</div>
			<div class="float-right">
				<div>{{order._id}}</div>
				<div>{{moment()}}</div>
			</div>
		</div>
	</div>
</template>
<script>
	import Vue    from 'vue'
	import axios  from 'axios'
	import moment from 'moment'
	import {mapState, mapActions} from 'vuex'

	export default{
		name : 'infomation',
		data() {
			return {
				order : {
					order_item : [],
					address    : {}
				}
			}
		},
		computed : mapState({
			token : state => state.User.token
		}),
		methods : {
			moment(date) {
				return moment().format('YYYY-MM-DD  h:mm:ss a');
			},
			getOrder() {
				const _id = this.$route.query.order_id;
				axios.get(Vue.config.network + '/order?_id=' + _id, {
					headers : { token : this.token }
				})
				.then((response) => {
					console.log('response', response);
					this.order = response.data;
				})
				.catch((error) => {});
			},
		},
		created() {
			this.getOrder();
		}
	}
</script>