import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../components/Login";
import profile from "../components/profile";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component:Login
  },
  {
    path: '/profile',
    component: profile
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
