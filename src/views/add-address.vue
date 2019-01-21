<template>
	<div class="add">
		<div class="item">
			<div class="address-title">{{ $t('address.title')}}</div>
			<input type="text" :placeholder="$t('address.address_title')" class="address-input" v-model="title">
		</div>
		<div class="item">
			<div class="address-title">{{ $t('address.delivery_title')}}</div>
			<input type="text" :placeholder="$t('address.delivery')" class="address-input" v-model="address">
		</div>
		<div class="item">
			<div class="address-title">{{ $t('address.person')}}</div>
			<input type="text" :placeholder="$t('address.name')" class="address-input" v-model="recipients">
		</div>
		<div class="item">
			<div class="address-title">{{ $t('address.phone')}}</div>
			<input type="phone" :placeholder="$t('address.number')" class="address-input" maxlength="13" v-model="phone">
		</div>
		<div class="address-bottom" @click="addAddress">{{$t('address.btn')}}</div>
	</div>
</template>
<script>
	import Vue   from 'vue'
	import axios from 'axios'
	import {mapState, mapActions} from 'vuex'
	export default{
		name: 'add',
		data() {
			return {
				update     : false,
				title      : '',
				address    : '',
				recipients : '',
				phone      : ''
			}
		},
		computed : mapState({
			token : state => state.User.token
		}),
		watch : {
			phone(newValue, oldValue) {
				this.phone = newValue.length > oldValue.length ? newValue.replace(/\s/g, '').replace(/(\d{3})(\d{0,4})(\d{0,4})/, '$1 $2 $3') : this.phone.trim()
			}
		},
		methods : {
			addAddress() {

				const model = {
					index      : this.update?this.$route.query.index : -1,
					title      : this.title,
					address    : this.address,
					recipients : this.recipients,
					phone      : this.phone
				}
				// 保存添加新地址
				axios.post(Vue.config.network + '/member/address', model, {
					headers : { token : this.token }
				})
				.then((response) => this.$router.go(-1))
				.catch((error) => {});
			},
			getAddress(index) {
				axios.get(Vue.config.network + '/member/address', {
					headers : { token : this.token }
				})
				.then((response) => {
					if(response.data && response.data.length > index) {
						const address = response.data[index];
						this.title      = address.title;
						this.address    = address.address;
						this.recipients = address.recipients;
						this.phone      = address.phone;
					}
				})
				.catch((error) => {});
			}
		},
		created() {
			if(typeof this.$route.query.index != 'undefined') {
				this.update = true;
				this.getAddress(this.$route.query.index);
			}
		}
	}
</script>
<style>
	.add{
		text-align  : left;
		line-height : 30px;
		font-size   : 15px;
	}
	.add .address-input{
		outline : none;
		width   : 100%;
		border  : none;
		color   : rgba(0,0,0,.4);
	}
	.add .item{
		padding       : 4px 14px;
		border-bottom : 1px solid #EFEFF4;
		word-break    : keep-all;
	}
	.add .item:last-child{
		border-bottom : none;
	}
	.add .address-bottom {
		position         : fixed;
		bottom           : 0;
		left             : 0;
		right            : 0;
		background-color : #009F80;
		color            : #fff;
		line-height      : 50px;
		text-align       : center;
	}
	input::-webkit-input-placeholder {
		color: rgba(0,0,0,.8);
	}
	input:-moz-placeholder {
		color: rgba(0,0,0,.8);
	}
	input::-moz-placeholder {
		color: rgba(0,0,0,.8);
	}
	input::-ms-input-placeholder {
		color: rgba(0,0,0,.8);
	}
</style>