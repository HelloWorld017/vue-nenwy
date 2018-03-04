import Vue from "vue";
import NenwyUI from "../lib/index.js";
import App from "./App.vue";

Vue.use(NenwyUI);

new Vue({
	el: '#app',
	render(h){
		return h(App);
	}
});
