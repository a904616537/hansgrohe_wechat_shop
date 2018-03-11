<template>
	<div class="index-nav">
		<i class="iconfont" @click="showBar">&#xe62b;</i>
		<div class="navbar" v-show="!show">
			<div class="con"></div>
			<ul>
				<router-link to="/home"><li class="nav-list">{{ $t('nav.home') }}</li></router-link>
				<router-link to="/shop"><li class="nav-list">{{ $t('nav.shopping') }}</li></router-link>
				<router-link to="/profile"><li class="nav-list">{{ $t('nav.user') }}</li></router-link>
				<router-link to="/cart"><li class="nav-list">{{ $t('nav.cart') }}</li></router-link>
			</ul>
		</div>
	</div>
</template>
<script>
	export default{
		name : 'index-nav',
		data() {
			return {
				show : true
			}
		},
		methods: {
			showBar() {
				this.show = !this.show
			}
		}
	}
</script>
<style>
	.index-nav .iconfont{
		font-size   : 24px;
		margin-left : 10px;
	}
	.index-nav{
		text-align : left;
		position   : absolute;
		top        : 26px;
		left       : 10px;
		z-index    : 99;
	}
	.index-nav ul{
		margin           : 0px;
		padding          : 10px;
		border           : 1px solid #EFEFF4;
		width            : 120px;
		border-radius    : 4px;
		background-color : #fff;
	}
	.index-nav .con{
		width            : 10px;
		height           : 12px;
		border           : 1px solid #EFEFF4;
		position         : relative;
		left             : 14px;
		top              : 7px;
		transform        : rotate(45deg);
		background-color : #fff;
		border-right     : 0px;
		border-bottom    : 0px;
	}
	.index-nav .nav-list{
		list-style    : none;
		text-align    : left;
		line-height   : 30px;
		border-bottom : 1px solid #EFEFF4;
	}
	.index-nav .nav-list:last-child{
		border-bottom : none;
	}
</style>