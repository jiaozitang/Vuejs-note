// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//引入路由
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import axios from 'axios'
import HelloWorld from './components/HelloWorld'
import Home from './components/Home'
Vue.config.productionTip = false
Vue.prototype.$axios = axios;
//使用路由
Vue.use(VueRouter)
Vue.use(VueResource)
//Vue.component('Users',Users);//全局变量

//配置路由
const router = new VueRouter({
  routes:[
    {path:'/',component: Home},
    {path:'/helloworld',component: HelloWorld}
  ],
  mode:'history'
})
/* eslint-disable no-new */
new Vue({
  router,//实例化中引用定义好的路由
  el: '#app',
  components: { App },
  template: '<App/>'
})
