<template>
	<div class="add">
		<div class="item">
			<div class="address-title">{{ $t('address.title')}}</div>
			<input type="text" :placeholder="$t('address.delivery')" class="address-input" v-model="delivery">
		</div>
		<div class="item">
			<div class="address-title">{{ $t('address.person')}}</div>
			<input type="text" :placeholder="$t('address.name')" class="address-input" v-model="person">
		</div>
		<div class="item">
			<div class="address-title">{{ $t('address.phone')}}</div>
			<input type="phone" :placeholder="$t('address.number')" class="address-input" maxlength="13" v-model="phone">
		</div>
		<div class="address-bottom" @click="addAddress">{{$t('address.btn')}}</div>
	</div>
</template>
<script>
	export default{
		name: 'add',
		data() {
			return {
				delivery : '',
				person   : '',
				phone    : ''
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
	.address-bottom {
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