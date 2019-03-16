import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index/index'
import Login from '@/components/login'
import Register from '@/components/register'
import Scenic from "@/components/index/scenic"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      children:[
        {
          path:'/index',
          name:'index',
          redirect: '/',
          component:Index
        },{
          path:'/scenic_list',
          name:'scenic',
          component:Scenic
        }
      ]
    },
    // },{
    //   path:'/scenic_list',
    //   name:'ScenicLlist',
    //   component:'ScenicList'
    // },
    {
      path:'/login',
      name:'login',
      component:Login,
    },
    {
      path:'/register',
      name:'register',
      component:Register,
    }
  ]
})
