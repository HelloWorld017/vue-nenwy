import NenwCodeTag from "../components/NenwCodeTag.vue";
import NenwInput from "../components/NenwInput.vue";
import NenwScrollInfo from "../components/NenwScrollInfo.vue";

class NenwyUI {
	static install(Vue) {
		Vue.component('nenw-code-tag', NenwCodeTag);
		Vue.component('nenw-input', NenwInput);
		Vue.component('nenw-scroll-info', NenwScrollInfo);
	}
}

export default NenwyUI;
