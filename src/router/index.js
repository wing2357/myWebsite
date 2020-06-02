import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/home',
		name: 'Home',
		component: Home,
        meta: {
            keepAlive: true
        }
	},
	{
        path: '/',
        redirect: '/home',
        meta: {
            keepAlive: true
        }
	},
	{
		path: '/background',
		name: 'Background',
        meta: {
            keepAlive: true
        },
		component: () => import('../views/Background.vue')
	},
	{
		path: '/creativeTeam',
		name: 'CreativeTeam',
        meta: {
            keepAlive: true
        },
		component: () => import('../views/CreativeTeam.vue')
	},
	{
		path: '/trackList',
		name: 'TrackList',
        meta: {
            keepAlive: true
        },
		component: () => import('../views/TrackList.vue')
	},
	{
		path: '/video',
		name: 'Video',
        meta: {
            keepAlive: true
        },
		component: () => import('../views/Video.vue')
	}
]

const router = new VueRouter({
	routes
})

export default router
