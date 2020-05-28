import Vue from "nativescript-vue";

import App from "./components/App";
import 'nativescript-tailwind/dist/tailwind.css'
// Vue.registerElement('SVGImage', () => require('@exeleon/nativescript-svg').SVGImage);

new Vue({
    render: h => h(App)
}).$start();
