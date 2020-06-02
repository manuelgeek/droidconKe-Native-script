import Vue from "nativescript-vue";
import App from "./components/App";

import 'nativescript-tailwind/dist/tailwind.css'

Vue.registerElement('StarRate', () => require('nativescript-star-ratings').StarRating);

new Vue({
    render: h => h(App)
}).$start();
