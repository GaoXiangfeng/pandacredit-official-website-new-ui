import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/common/home'
import aboutUs from '@/view/aboutUs/aboutUs'
import company from '@/view/aboutUs/company'

Vue.use(Router)

const routes = [
	{
	  path: '/',
	  redirect: '/home',
	},
  {
    path: '/home',
    name: 'home',
    component: Home,
  },
  {
	  path: '/aboutUs',
	  name: 'aboutUs',
	  component: aboutUs,
  },
  {
	  path: '/company',
	  name: 'company',
	  component: company,
  }
]

const router =  new Router({
  mode: 'history',
  routes 
})

//路由守卫
router.beforeEach(async(to, from, next) => {
  next()
})

export default router
