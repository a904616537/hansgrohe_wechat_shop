<template>
	<div class="addresslist">
		<div class="delivery info-padding clearfloat">
			<span class="address-title">Address 1</span>
			<div class="float-right">
				<i class="del iconfont" @click="del">&#xe609</i>
				<i class="editor iconfont" @click="editor">&#xe61d</i>
			</div>
			<p class="info-style">Shanghai jing 'an district kangding road 1018 from pavilion building the second floor</p>
		</div>
		<div class="info-user border-bottom info-padding">
			<span>Amy Wang</span>
			<span>155 0027 9072</span>
		</div>
	</div>
</template>
<script>
	export default{
		name : 'addresslist',
		data() {
			return {

			}
		},
		methods : {
			del() {
				// 删除地址
				console.log('del')
			},
			editor() {
				// 编辑地址
				console.log('editor')
			}
		}
	}
</script>