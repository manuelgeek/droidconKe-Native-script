import Vue from "nativescript-vue";
import App from "./components/App";

import 'nativescript-tailwind/dist/tailwind.css'

import store from './store'

import axios from 'axios'
global.axios = axios
import {initialize} from "~/plugins/axios";
initialize(store)
Vue.config.silent = (TNS_ENV === 'production')
import ImageCacheIt from 'nativescript-image-cache-it/vue';
Vue.use(ImageCacheIt);

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
