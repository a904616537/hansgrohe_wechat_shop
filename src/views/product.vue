<!-- 商品信息 -->
<template>
	<div class="product">
		<!-- <div class="swiper">swiper</div> -->
		<swiper-loop :data="product.item" :onChange="onChange"></swiper-loop>
		<div class="product-title clearfloat border-bottom">
			<div class="product-left">
				<span>{{ $t('product.no') }} {{product.product_no}}</span>
				<span>{{ $t('product.surface') }} {{product.surface}}</span>
			</div>
			<div class="product-right">
				<span><i class="iconfont">&#xe676;</i> {{ $t('product.area') }}</span>
			</div>
		</div>
		<div class="product-technology border-bottom">
			<div class="card-title">{{ $t('product.technology') }}</div>
			<div class="product-inner">
				<span class="inner-text"><i class="iconfont icon-con">&#xe62d</i>{{ $t('product.technology1') }}</span>
				<img src="static/imgs/product-1.png" alt="" class="inner-img">
			</div>
			<div class="product-inner">
				<span class="inner-text"><i class="iconfont icon-con">&#xe62d</i>{{ $t('product.technology2') }}</span>
				<img src="static/imgs/product-2.png" alt="" class="inner-img">
			</div>
			<div class="product-inner">
				<span class="inner-text"><i class="iconfont icon-con">&#xe62d</i>{{ $t('product.technology3') }}</span>
				<img src="static/imgs/product-3.png" alt="" class="inner-img">
			</div>
			<div class="product-inner">
				<span class="inner-text"><i class="iconfont icon-con">&#xe62d</i>{{ $t('product.technology4') }}</span>
				<img src="static/imgs/product-4.png" alt="" class="inner-img">
			</div>
		</div>
		<div class="product-characteristics border-bottom clearfloat">
			<div class="card-title chara-style">{{ $t('product.charact') }}</div>
			<div class="product-inner">
				<div>
					<div class="inner-left"><i class="iconfont icon-con">&#xe62d</i></div>
					<div class="inner-right">{{ $t('product.charact1') }}</div>
				</div>
				<div>
					<div class="inner-left"><i class="iconfont icon-con">&#xe62d</i></div>
					<div class="inner-right">{{ $t('product.charact2') }}</div>
				</div>
				<div>
					<div class="inner-left"><i class="iconfont icon-con">&#xe62d</i></div>
					<div class="inner-right">{{ $t('product.charact3') }}</div>
				</div>
				<div>
					<div class="inner-left"><i class="iconfont icon-con">&#xe62d</i></div>
					<div class="inner-right">{{ $t('product.charact4') }}</div>
				</div>	
			</div>
		</div>
		<div class="product-award">
			<div class="card-title">{{ $t('product.award') }}</div>
			<div class="award-img">
				<img src="static/imgs/award-1.png" alt="" class="img-style">
				<img src="static/imgs/award-2.png" alt="" class="img-style">
			</div>
		</div>
		<div class="product-bottom">
			<div class="product-btn" @click="toAdd">{{ $t('product.add') }}</div>
			<div class="product-btn">{{ $t('product.buy') }}</div>
		</div>

		<!--  商品详情选择 弹框  -->
		<v-confirm :data="select_item" :onClose="onClose" :onAdd="onAdd" v-show="isShowComfilm"></v-confirm>
	</div>
</template>
<script>
	import Vue   from 'vue'
	import axios from 'axios'
	import {mapState, mapActions} from 'vuex'
	import Confirm    from '@/components/confirm'
	import SwiperLoop from '@/components/swiper-loop'

	export default{
		name : 'product',
		data() {
			return {
				isShowComfilm : false,
				product       : {
					item : []
				},
				select_item : {}
			}
		},
		components : {
			'v-confirm'   : Confirm,
			'swiper-loop' : SwiperLoop
		},
		computed : mapState({
			token : state => state.User.token
		}),
		methods : {
			toAdd() {
				this.isShowComfilm = true
			},
			onClose() {
                this.isShowComfilm = false
            },
            onAdd(count) {
            	this.isShowComfilm = false
            	const model = {
					number   : count,
					product  : this.product._id,
					selected : this.select_item._id
            	}
            	console.log(model)
            	// 提交服务器
				axios.post(Vue.config.network + '/cart', model, {
					headers : {
						token : this.token
					}
				})
				.then((response) => {
					this.$router.push({path : '/cart'})
				})
				.catch((error) => {});
            	
            },
            onChange(index) {
            	if(this.product.item) {
            		this.select_item = this.product.item[index];
            	}
            },
			getProduct() {
				// 获取商品列表
				axios.get(Vue.config.network + '/product/' + this.$route.query._id)
				.then((response) => {
					console.log('response', response)
					this.product = response.data;
				})
				.catch((error) => {});
			},
		},
		created() {
			this.getProduct();
		}
	}
</script>
<style>
	.swiper{
		background-color : red;
		height           : 200px;
		width            : 100%;
	}
</style>