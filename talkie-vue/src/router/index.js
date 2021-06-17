import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props: true
  },
  
  {
    path: "/details/:slug",
    name: 'DestinationDetails',
    component: () => import (/* webpackChunkName: "DestinationDetails" */"../views/DestinationDetails"),
    props: true
  },


]

const router = new VueRouter({
  mode: "history",
  linkExactActiveClass: "i-love-her",
  routes
})

export default router
