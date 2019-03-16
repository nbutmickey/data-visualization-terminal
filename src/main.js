import Vue from 'vue'
import App from './App'
import router from './router'

//引入scroll组件
import scroll from 'vue-seamless-scroll'
Vue.use(scroll)

//引入基于g2的利用vue封装的图标组件库
import Viser from 'viser-vue'
Vue.use(Viser)

//引入ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//引入iconfont
import './assets/iconfont/iconfont.css'

//引入store状态管理器
import store from './store'

//引入网络请求库axios
import axios from 'axios'
Vue.prototype.$http=axios;

Vue.config.productionTip = false
/* eslint-disable no-new */
import VueParticles from 'vue-particles'
Vue.use(VueParticles)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
