import Vue         from 'vue'
import App         from './App'
import Store       from './store'
import router      from './router'
import VueRouter   from 'vue-router'
import Vuex        from 'vuex'
import vuexI18n    from 'vuex-i18n'
// import Cookie   from 'vue-cookie'
import querystring from 'querystring'
import Logo        from '@/components/logo'
import Nav         from '@/components/nav'


Vue.use(VueRouter)


Vue.config.productionTip = false
Vue.component('v-logo',Logo)
Vue.component('v-nav',Nav)


// i18n语言
// if(!Cookie.get('lang')) {
// 	Cookie.set('lang', 'zh')
// }

// var locale = Cookie.get('lang'); 
 
Vue.use(vuexI18n.plugin, Store)
Vue.i18n.add('zh', require('@/languages/zh.json'))
Vue.i18n.add('en', require('@/languages/en.json'))
Vue.i18n.set('en');


new Vue({
	el         : '#app',
	router,
	store      : Store,
	template   : '<App/>',
	components : { App }
})
