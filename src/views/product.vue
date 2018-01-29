<!-- 商品信息 -->
<template>
	<div class="product">
		<!-- <div class="swiper">swiper</div> -->
		<swiper-loop></swiper-loop>
		<div class="product-title clearfloat border-bottom">
			<div class="product-left">
				<span>{{ $t('product.no') }} 72820000</span>
				<span>{{ $t('product.surface') }}</span>
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
		<v-confirm :onClose="onClose" :onAdd="onAdd" v-show="isShowComfilm"></v-confirm>
	</div>
</template>
<script>
	import Confirm    from '@/components/confirm'
	import SwiperLoop from '@/components/swiper-loop'

	export default{
		name : 'product',
		data() {
			return {
				isShowComfilm : false
			}
		},
		components : {
			'v-confirm'   : Confirm,
			'swiper-loop' : SwiperLoop
		},
		methods : {
			toAdd() {
				this.isShowComfilm = true
			},
			onClose() {
                this.isShowComfilm = false
            },
            onAdd() {
            	this.isShowComfilm = false
            	this.$router.push({path : '/cart'})
            }
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