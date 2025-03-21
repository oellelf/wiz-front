import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/HomeIndex.vue'
import UnderWriting from '../pages/UnderWriting.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/UnderWriting', component: UnderWriting
   }
]

const router = new VueRouter({
  mode: 'history', // 'hash'로 변경 가능 (# 포함된 URL)
  routes
})

export default router
