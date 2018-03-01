<template>
	<div class="addresslist" @click="onSelect(index)">
		<div class="delivery info-padding clearfloat">
			<span class="address-title">{{data.title}}</span>
			<div class="float-right">
				<i class="del iconfont" @click="del">&#xe609</i>
				<i class="editor iconfont" @click="editor">&#xe61d</i>
			</div>
			<p class="info-style">{{data.address}}</p>
		</div>
		<div class="info-user border-bottom info-padding">
			<span>{{data.recipients}}</span>
			<span>{{data.phone}}</span>
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
		props : {
			index : {
				type    : Number,
				default : 0
			},
			data : {
				type    : Object,
				default : () => {return {}}
			},
			onSelect : {
				type : Function,
				default : () => {}
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