import Vue from "nativescript-vue";
import App from "./components/App";

import 'nativescript-tailwind/dist/tailwind.css'
import VueDevtools from 'nativescript-vue-devtools'

if(TNS_ENV !== 'production') {
    Vue.use(VueDevtools, { host: '192.168.100.8' })
}
import store from './store'

import axios from 'axios'
global.axios = axios
import {initialize} from "~/plugins/axios";
initialize(store)
Vue.config.silent = (TNS_ENV === 'production')

Vue.registerElement('StarRate', () => require('nativescript-star-ratings').StarRating);

import { Feedback } from "nativescript-feedback";
Vue.prototype.$feedback = new Feedback()

import Navigator from 'nativescript-vue-navigator'
import {routes} from './routes'
Vue.use(Navigator, { routes })

new Vue({
    store,
    render: h => h(App)
}).$start();
