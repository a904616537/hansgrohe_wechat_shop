import Vue          from 'vue'
import Vuex         from 'vuex'
import * as actions from './actions'
import  Language    from './module/language'
import  User        from './module/user'

Vue.use(Vuex)

export default new Vuex.Store({
	actions,
	modules : {
		Language,
		User
	},
	// strict  : debug
})