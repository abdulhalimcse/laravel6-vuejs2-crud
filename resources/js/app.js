require('./bootstrap');

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import App from './views/App'
import Hello from './views/Hello'
import Home from './views/Home'

import UsersIndex from './views/UsersIndex';
import UsersCreate from './views/UsersCreate';
import UsersEdit from './views/UsersEdit';
import NotFound from './views/NotFound';

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/hello',
            name: 'hello',
            component: Hello,
        },
        {
            path: '/users',
            name: 'users.index',
            component: UsersIndex,
        },
		{
            path: '/users/create',
            name: 'users.create',
            component: UsersCreate,
        },
		{
            path: '/users/:id/edit',
            name: 'users.edit',
            component: UsersEdit,
        },
		{
			path:'/404', 
			name: 404, 
			component: NotFound,
		},
		{
			path: '*', redirect: '/404'
		},
    ],
});

const app = new Vue({
    el: '#app',
    components: { App },
    router,
});
