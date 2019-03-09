import Vue from 'vue';
import App from './App.vue';
import BootstrapVue from 'bootstrap-vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

//FA
import { faCoffee, faCheck, faStar } from '@fortawesome/free-solid-svg-icons';


Vue.use(BootstrapVue);

library.add(
  faCoffee,
  faCheck,
  faStar
  );

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app')
