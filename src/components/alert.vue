<template>
	<div class="alert">
		<div class="mask">
			<div class="alert-inner clearfloat">
				<div class="alert-title">Confirm Address Delete?</div>
				<div class="alert-btn" @click="onConfirm">Confirm</div>
				<div class="alert-btn" @click="onCancel">Cancel</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		name: 'alert',
		data() {
			return {

			}
		},
		props : {
			onConfirm : {
				type : Function,
				default : () => console.log('del yes')
			},
			onCancel : {
				type : Function,
				default : () => console.log('del no')
			}
		}
	}
</script>
<style>
	.alert .mask{
		background-color : rgba(216,216,216,.75);
		position         : absolute;
		top              : 0;
		left             : 0;
		right            : 0;
		height           : 100%;
		padding-bottom   : 75%;
	}
	.alert .alert-inner{
		text-align       : center;
		background-color : #fff;
		margin           : 0 auto;
		border-radius    : 10px;
		width            : 343px;
		padding          : 20px 0;
	}
	.alert .alert-btn{
		margin-top : 20px;
		width      : 50%;
		float      : left;
	}
	.alert .clearfloat{
		clear   : both;
		content : '';
		display : table;
	}
</style>