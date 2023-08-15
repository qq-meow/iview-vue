import Vue from 'vue'
import App from './App.vue'
import router from '@/routers'
import store from './store'
import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.use(iView);
// import vConsole from '@/utils/vconsole.js'

Vue.config.productionTip = !1

// if (process.env.NODE_ENV) {
//     Vue.use(vConsole)
// }


new Vue({
    router,
      store, 
    render: o => o(App)
}).$mount('#app')
