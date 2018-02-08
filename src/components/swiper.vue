 <!--  单页显示自动轮播效果，带下圆点点击切换  -->
<template>
    <div class="swiper">
    	<swiper :options="swiperOption">
	        <!-- <swiper-slide v-for="(img, index) in images" :key="index"> -->
	        <swiper-slide><div class="inner imgbg" style="background-image: url('static/imgs/product-2.png')"></div></swiper-slide>
			<swiper-slide><div class="inner imgbg" style="background-image: url('static/imgs/product-3.png')"></div></swiper-slide>
			<swiper-slide><div class="inner imgbg" style="background-image: url('static/imgs/product-4.png')"></div></swiper-slide>
	        <div class="swiper-pagination" slot="pagination"></div>
	    </swiper>
    </div>
</template>

<script>
	import Vue              from 'vue';
	import VueAwesomeSwiper from 'vue-awesome-swiper';
	import('swiper/dist/css/swiper.css')
	Vue.use(VueAwesomeSwiper);


	export default {
	  	data () {
	        return {
		        swiperOption: {
						pagination                   : {
							el: '.swiper-pagination'
						},
						paginationClickable          : true,
						autoplay                     : true,
						speed                        : 1000,
						autoplayDisableOnInteraction : true	
		        }
	        }
	    },
	    props : {
	    	images : {
				type    : Array,
				default : () => []
	    	}
	    }
	}
</script>
<style>
	.swiper .inner{
		background-color : #fff;
		height           : 214px;
		width            : 100%;
	}
	.swiper .imgbg{
		width               : 100%;
		height              : 214px;
		background-size     : cover;
		background-repeat   : no-repeat;
		background-position : center;
	}
	.swiper-pagination-bullet{
		background-color : rgb(255,255,255) !important;
		border           : 2px solid rgba(255,255,255,.6);
	}
	.swiper-pagination-bullet-active{
		background-color : transparent !important;
		border           : 2px solid rgba(255,255,255,.6);
	}
</style>
