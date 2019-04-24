import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/Header'
import MainMenu from "../components/MainMenu";
import Home from "../components/Home";
import Classify from "../components/Classify";
import ShopCar from "../components/ShopCar";
import My from "../components/My";
import Login from "../components/Login";
import HeaderWhite from "../components/HeaderWhite";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
      component: MainMenu,
      children: [
        {
          path: '/home',
          name: 'home',
          component: Home
        },
        {
          path: '/classify',
          name: 'classify',
          component: Classify
        },
        {
          path: '/shopCar',
          name: 'shopCar',
          component: ShopCar
        },
        {
          path: '/my',
          name: 'my',
          component: My
        },
      ]
    },
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   components: {
    //     default: HelloWorld,
    //     header: Header
    //   }
    // },
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
