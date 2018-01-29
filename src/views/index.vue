<!-- 首页商品列表 -->
<template>
	<div class="home">
		<v-nav></v-nav>
		<!-- 轮播图 -->
		<v-swiper></v-swiper>
		<div class="home-content">
			<!-- 商品循环 -->
			<v-shoppingList></v-shoppingList>
		</div>

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