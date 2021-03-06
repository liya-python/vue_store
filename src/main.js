// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//导入store状态机
import store from './store'
//导入element-ui
import ElementUI from 'element-ui'
//导入样式
import 'element-ui/lib/theme-chalk/index.css'

//全局注册element
Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
    store,
})
