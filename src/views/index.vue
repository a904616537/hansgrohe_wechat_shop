<!-- 首页商品列表 -->
<template>
	<div class="home">
		<v-nav></v-nav>
		<!-- 轮播图 -->
		<img src="shop/static/imgs/bg1.jpg" class="home-img" />
		<div class="home-content">
			<!-- 品牌介绍 -->
			<p>{{ $t('home.title') }}</p>
			<p>{{ $t('home.text1') }}</p>
			<p>{{ $t('home.text2') }}</p>
		</div>
		<router-link to="/store"><div class="store">{{ $t('home.enter') }}</div></router-link>
	</div>
</template>

<script>
	import ShoppingList from '@/views/shoppingList'
	import Swiper       from '@/components/swiper'

	export default{
		name : 'home',
		data() {
			return {
				show   : true
			}
		},
		components : {
			'v-shoppingList' : ShoppingList,
			'v-swiper'       : Swiper
		},
		methods: {
		},
	}
</script>