import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Header from '@/components/Header'
import Login from "../components/Login";
import HeaderWhite from "../components/HeaderWhite";

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      name: 'HelloWorld',
      components: {
        default: HelloWorld,
        header: Header
      }
    },
    {
      path: '/login',
      name: 'Login',
      components: {
        default: Login,
        // header: HeaderWhite
      }
    },
  ]
})
