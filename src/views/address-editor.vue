<template>
	<div class="address-editor">
		<div class="item">
			<div class="address-title">{{ $t('address.title')}}</div>
			<div class="address-text">Shanghai jing 'an district kangding road 1018 from pavilion building the second floor</div>
		</div>
		<div class="item">
			<div class="address-title">{{ $t('address.person')}}</div>
			<div class="address-text">Amy Wang</div>
		</div>
		<div class="item">
			<div class="address-title">{{ $t('address.phone')}}</div>
			<div class="address-text">188 0024 2709</div>
		</div>
		<div class="address-bottom" @click="addAddress">{{ $t('address.btn')}}</div>
	</div>
</template>
<script>
	import Vue   from 'vue'
	import axios from 'axios'
	import {mapState, mapActions} from 'vuex'
	export default{
		name: 'address-editor',
		data() {
			return {
				title      : '',
				address    : '',
				recipients : '',
				phone      : ''
			}
		},
		watch : {
			phone(newValue, oldValue) {
				this.phone = newValue.length > oldValue.length ? newValue.replace(/\s/g, '').replace(/(\d{3})(\d{0,4})(\d{0,4})/, '$1 $2 $3') : this.phone.trim()
			}
		},
		methods : {
			addAddress() {
				// 保存添加新地址
				console.log('save')
			},
			getAddress() {
				axios.get(Vue.config.network + '/member/address', {
					headers : { token : this.token }
				})
				.then((response) => {
					if(response.data && response.data.length > this.$router.query.index) {
						this.address = response.data[this.$router.query.index];
					}
				})
				.catch((error) => {});
			}
		},
		created() {
			this.getAddress();
		}
	}
</script>
<style>
	.address-editor{
		text-align  : left;
		line-height : 30px;
		font-size   : 15px;
	}
	.address-editor .address-text{
		color: rgba(0,0,0,.4);
	}
	.address-editor .item{
		padding       : 4px 14px;
		border-bottom : 1px solid #EFEFF4;
		word-break    : keep-all;
	}
	.address-editor .item:last-child{
		border-bottom : none;
	}
	.address-editor .address-bottom {
		position         : fixed;
		bottom           : 0;
		left             : 0;
		right            : 0;
		background-color : #009F80;
		color            : #fff;
		line-height      : 50px;
		text-align       : center;
	}
</style>