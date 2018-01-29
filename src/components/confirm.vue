<!-- 商品信息 弹框 -->
<template>
	<div class="confirm">
		<div class="mask">
			<div class="confirm-box clearfloat">
				<div class="confirm-inner">
					<img src="static/imgs/water-purifier.jpg" alt= "" class="confirm-img">
					<div class="confirm-icon" @click="onClose"><i class="iconfont confirm-icon">&#xe695</i></div>
					<div class="card-price">$ 999.00</div>
					<div class="text-style">{{ $t('confirm.material') }}</div>
					<select v-model="material" class="pub-input select-input">
		                <option disabled value="">Surface: Chrome Plated</option>
		                <option value="1">Surface: select2</option>
		                <option value="2">Surface: select3</option>
		            </select>
		            <div class="text-style">
		            	{{ $t('confirm.qty') }}
						<div class="num">
							<i class="iconfont icon-btn" @click="decrement">-</i>
							<span>{{ count }}</span>
							<i class="iconfont icon-btn" @click="increment">+</i>
						</div>
		            </div>
				</div>
	        	<div class="confirm-btn" @click="onAdd">{{ $t('confirm.confirm') }}</div> 
			</div>

		</div>
	</div>
</template>
<script>
	export default{
		name : 'confirm',
		data() {
			return {
				material : '',
				count    : 1
			}
		},
		props : {
			onClose : {
				type    : Function,
				default : () => console.log('onClose')
			},
			onAdd : {
				type    : Function,
				default : () => console.log('onAdd')
			}
		},
		methods : {
			increment() {
            	this.count += 1;
            },
            decrement() {
            	if (this.count == 1 ) return;
            	else this.count -= 1
            },
    	}
	}
</script>
<style>
	.confirm .mask{
		background-color : rgba(216,216,216,.7);
		position         : fixed;
		top              : 0;
		left             : 0;
		right            : 0;
		bottom           : 0;
		height           : 100%;
	}
	.confirm-box{
		position         : fixed;
		bottom           : 0;
		left             : 0;
		right            : 0;
		background-color : #fff;
		text-align       : left;
		font-size        : 15px;
	}
	.confirm-inner{
		padding : 14px;	
	}
	.confirm-inner .confirm-img{
		width         : 50%;
		border-radius : 10px;
	}
	.confirm-inner .confirm-icon{
		color     : #000;
		float     : right;
		font-size : 20px;
	}
	.confirm-inner .card-price{
		float       : none;
		line-height : 40px;
	}
	.confirm-inner .select-input{
		height             : 40px;
		width              : 100%;
		padding            : 0 12px;
		margin             : 10px 0;
		outline            : none;
		border-radius      : 0px;
		background-color   : rgb(239,239,244);
		border             : none;
		appearance         : none;
		-moz-appearance    : none;
		-webkit-appearance : none;
		-ms-appearance     : none; 
        color              : #000;
	}
	.confirm-inner .num{
		float       : right;
		line-height : 20px;
	}
	.confirm-inner .num .icon-btn{
		color            : #000;
		font-size        : 18px;
		padding          : 0 10px;
	}
	.confirm-inner .num span{
		display    : inline-block;
		width      : 30px;
		text-align : center;
		color      : #DE5E0F;
	}
	.confirm-btn{
		background-color : #009F80;
		color            : #fff;
		line-height      : 50px;
		text-align       : center;
	}
</style>