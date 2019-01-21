<template>
	<div class="addresslist">
		<v-alert v-show="isDel" :onConfirm="onConfirm" :onCancel="onCancel"></v-alert> 
		<div class="delivery info-padding clearfloat">
			<span @click="onClick" class="address-title">{{data.title}}</span>
			<div class="float-right" style="z-index: 999;">
				<i class="del iconfont" @click="del">&#xe609</i>
				<i class="editor iconfont" @click="editor">&#xe61d</i>
			</div>
			<p @click="onClick" class="info-style">{{data.address}}</p>
		</div>
		<div @click="onClick" class="info-user border-bottom info-padding">
			<span>{{data.recipients}}</span>
			<span>{{data.phone}}</span>
		</div>
		
	</div>
</template>
<script>
	import vAlert from '@/components/alert'

	export default{
		name : 'addresslist',
		data() {
			return {
				isDel : false
			}
		},
		components : {
			'v-alert' : vAlert
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
				default : () => {console.log('onSelect')}
			},
			onDelete : {
				type : Function,
				default : () => {}	
			}
		},
		methods : {
			onClick() {
				this.onSelect(this.index);
			},
			del() {
				// 删除地址
				this.isDel = !this.isDel
			},
			editor() {
				// 编辑地址
				console.log('editor')
				this.$router.push({path : '/addAddress', query : {index : this.index}})
			},
			onConfirm() {
				this.isDel = false;
				this.onDelete(this.index)
			},
			onCancel() { 
				// 取消删除
				this.isDel = false
			}
		}
	}
</script>