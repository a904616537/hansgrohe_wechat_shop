import Vue           from 'vue'
import Router        from 'vue-router'
import Login         from '../views/login'
import Index         from '../views/index'
import Product       from '../views/product'
import Cart          from '../views/cart'
import Order         from '../views/order'
import Infomation    from '../views/infomation'
import Payment       from '../views/payment'
import Address       from '../views/address'
import Profile       from '../views/profile'
import Shop          from '../views/shop'
import Registe       from '../views/registe'
import addAddress    from '../views/add-address'
import addressEditor from '../views/address-editor'

 
Vue.use(Router)

var routers = [
	{
		path      : '/shop',
		component : Login
	},{
		path      : '/home',
		component : Index
	},{
		path      : '/product',
		component : Product
	},{
		path      : '/cart',
		component : Cart
	},{
		path      : '/order',
		component : Order
	},{
		path      : '/info', //订单详情
		component : Infomation
	},{
		path      : '/payment',
		component : Payment
	},{
		path      : '/address',
		component : Address
	},{
		path      : '/profile',
		component : Profile
	},{
		path      : '/store',
		component : Shop
	},{
		path      : '/registe',
		component : Registe
	},{
		path      : '/addAddress',
		component : addAddress
	},{
		path      : '/editor',
		component : addressEditor
	}

]

const router = new Router({
  	routes: routers,
	mode   :  'history'
})

router.beforeEach((to, from, next) => {
	document.body.scrollTop = 0;
	next();
})

export default router;
