import Vue from 'vue'
import Router from 'vue-router'
import Headers from '@/components/Headers'
import Login from '@/components/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'headers',
      component: Headers
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
    }
  ]
})
