<!-- 卡片轮播图 （element ui） -->
<template style="z-index: -1">
  	<el-carousel
  	:interval="4000"
  	type="card"
  	height="250px"
  	:autoplay="false"
  	@change="onChange"
  	arrow="always"
  	indicator-position="none"
  	class="swiper-loop clearfloat">
	    <el-carousel-item v-for="(item, index) in data || []" :key="index">
	    	<img :src="item.img" class="el-img">
	    	<p class="swiper-text">{{item.name}}<span class="float-right">$ {{item.price}}</span></p>
	    </el-carousel-item>
  	</el-carousel>
</template>
<script>
	import Vue from 'vue'
	import ElementUI from 'element-ui'
	import 'element-ui/lib/theme-chalk/index.css'

	Vue.use(ElementUI)

	export default{
		data () {
			return {

			}
		},
		props : {
			data : {
				type    : Array,
				default : () => {
					return [{img : 'static/imgs/filter.png', name : 'Tails Select S', price : 999}]
				}
			},
			onChange : {
				type    : Function,
				default : (index) => console.log('onChange index', index)
			}
		}
	}
</script>
<style>
	.swiper-loop{
		padding : 5px 30px 5px 10px;
		z-index : 0;
	}
	.swiper-loop .el-img{
		height : 200px;
	}
	.swiper-loop .swiper-text{
		text-align : left;
		padding    : 0 10px;
	}
	.swiper-loop .swiper-text span{
		color : #DE5E0F;
	}
	.el-carousel__item--card.is-active {
		width         : 280px;
		margin-left   : -17.5%;
		border-radius : 8px;
		box-shadow    : 0 2px 6px rgba(0,0,0,.4);
	}
  	.el-carousel__item:nth-child(2n) {
		background-color : #fff;
		border-radius    : 8px;
		box-shadow       : 0 2px 6px rgba(0,0,0,.4);
  	}
  	.el-carousel__item:nth-child(2n+1) {
		background-color : #fff;
		border-radius    : 8px;
		box-shadow       : 0px 2px 6px rgba(0,0,0,.4);
  	}
  	button.el-carousel__arrow--right,button.el-carousel__arrow--left{
		outline : none;
		right   : 0px;
  	}
</style>