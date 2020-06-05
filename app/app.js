import Vue from 'nativescript-vue';
import App from './components/App';

import 'nativescript-tailwind/dist/tailwind.css';

import store from './store';

import axios from 'axios';
import { initialize } from '~/plugins/axios';
import ImageCacheIt from 'nativescript-image-cache-it/vue';

import { Feedback } from 'nativescript-feedback';

import Navigator from 'nativescript-vue-navigator';
import { routes } from './routes';

global.axios = axios;
initialize(store);
Vue.config.silent = (TNS_ENV === 'production');
Vue.use(ImageCacheIt);

// eslint-disable-next-line global-require
Vue.registerElement('StarRate', () => require('nativescript-star-ratings').StarRating);
Vue.prototype.$feedback = new Feedback();
Vue.use(Navigator, { routes });

new Vue({
  store,
  render: (h) => h(App),
}).$start();
