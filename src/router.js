import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Help from './views/Help.vue'
import Guess from './views/Guess.vue'
import Random from './views/Random.vue'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/help',
			name: 'help',
			component: Help
		},
		{
			path: '/guess',
			name: 'guess',
			component: Guess
		},{
            path: '/random',
            name: 'random',
            component: Random
        }
	]
})
