<!-- 地址列表 -->
<template>
	<div class="hans-address infomation">
		<div class="address-head">
			<div class="mask">
				<img src="static/imgs/bg1.jpg" class="bg1" alt="">
				<img src="static/imgs/bg1.jpg" class="bg1 blur" alt="">		
			</div>
			<div class="user-img">
				<div class="img-inner">
					<img src="static/imgs/user-img.png" alt="">
				</div>
			</div>
		</div>
		<div class="address-content">
			<div class="infomation">
				<!-- 地址列表循环 -->
				<v-address></v-address>

			</div>
		</div>
		<div class="address-bottom" @click="addAddress">
			<span class="iconfont">+</span>
		</div>

	</div>
</template>
<script>
	import addresslist from '@/components/addressList'

	export default{
		name : 'hans-address',
		data() {
			return {
				
			}
		},
		components : {
			'v-address' : addresslist
		},
		methods : {
			addAddress() {
				// 添加地址
				console.log('add-address')
			}
		}
	}
</script>