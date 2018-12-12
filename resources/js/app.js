
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
// routers
window.Vue = require('vue');

import VueRouter from 'vue-router'
import routes from './router';
import { Form, HasError, AlertError } from 'vform'

Vue.use(VueRouter)
const router = new VueRouter({
    mode: 'history',
    routes,
});
/***************************************************vform */
window.Form= Form
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)
/***************************************************vform */


const app = new Vue({
    el: '#app',
    router
});
