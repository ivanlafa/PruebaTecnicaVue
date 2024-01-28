import Vue from "vue";
import App from "./App.vue";
import axios from "axios";

Vue.config.productionTip = false;

// Configuración del cliente HTTP global para Vue utilizando Axios
Vue.prototype.$http = axios;

// Creación de la instancia de Vue
new Vue({
  render: (h) => h(App),
}).$mount("#app");