import Vue         from 'vue'
import App         from './App'
import Store       from './store'
import router      from './router'
import VueRouter   from 'vue-router'
import Vuex        from 'vuex'
import vuexI18n    from 'vuex-i18n'
import FastClick from 'fastclick';
// import Cookie   from 'vue-cookie'
import querystring from 'querystring'
import Logo        from '@/components/logo'
import Nav         from '@/components/nav'

FastClick.attach(document.body)
Vue.use(VueRouter)


// Vue.config.network = 'http://localhost:8081';
Vue.config.network = 'http://filtration.hansgrohe.com.cn/server';
// Vue.config.network = 'http://testserver.eatisco.com';

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
Vue.i18n.set('zh');


new Vue({
	el         : '#app',
	router,
	store      : Store,
	template   : '<App/>',
	components : { App }
})
