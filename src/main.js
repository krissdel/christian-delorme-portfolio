import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'
import App from './App.vue'
import router from './router'
import VueKinesis from 'vue-kinesis'
import VueSweetalert2 from 'vue-sweetalert2';

Vue.use(VueSweetalert2);
Vue.use(VueKinesis)
Vue.config.productionTip = false
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDvmZL_-Vr3zl4qvtmGFjBNRULS-e9C-Cw',
    libraries: 'places',
  }
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
