// 页面路由
import Vue from 'vue' //引入vue
import Router from 'vue-router' //引入路由 
import { Message } from 'element-ui'
import { store } from '@/stroe/stroe'
import logins from '@/Logins/logins'//登录注册
import forget from '@/Logins/forget'
import Home from '@/views/Home'  //首页
import NotFoud from '@/views/404' //404
import Jh from '@/views/Jihe'  // 集合
import Gz from '@/views/Gongzuo' //工作
import louyuAdmin from '@/components/louyuAdmin'
import fangyuanAdmin from '@/components/fangyuanAdmin' //房源
import Zs from '@/components/zhaoshangAdmin'
import Zk from '@/components/zukeAdmin'
import Ht from '@/components/hetongAdmin'
import User from '@/components/profile/main'
import Internal from '@/components/profile/Internal'
import accountSetting from '@/components/profile/accountSetting'
import fyTag from '@/components/profile/fyTag'
import htTag from '@/components/profile/htTag'
import contractTemplate from '@/components/profile/contractTemplate'
import Termination from '@/components/profile/Termination'
import CostTypeTable from '@/components/profile/CostTypeTable'
import tenantTag from '@/components/profile/tenantTag'
import customIndustry from '@/components/profile/customIndustry' 
import lydetails from '@/components/lydetails'   //楼宇详情
import pmmap from '@/components/lydetails/lydetails01'  
import fymanage from '@/components/lydetails/lydetails02'
import zsmanage from '@/components/lydetails/lydetails03'
import zkmanage from '@/components/lydetails/lydetails04'
import htmanage from '@/components/lydetails/lydetails05'
Vue.use(Router)
const routes  =  [

  {
    path:'/logins', //登录注册
    name:'logins',
    component:logins,
  },
  {
    path:'/forget', //忘记密码
    name:'forget',
    component:forget
  },
  {
    path: '/', //首页
    name: 'Home',
    component: Home,
    meta: {
      requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
    },
    children:[
      {
        path:'/', //集合
        name:'Jh',
        component:Jh,
        children:[
          {
            path:'/',   //楼宇管理
            name:'louyuAdmin',
            component:louyuAdmin
          },
          {
          path:'fangyuanAdmin',   //房源管理
          name:'fangyuanAdmin',
          component:fangyuanAdmin
          },
          {
            path:'Zs',
            name:'Zs',
            component:Zs
          },
          {
            path:'Zk',
            name:'Zk',
            component:Zk
          },
          {
            path:'Ht',
            name:'Ht',
            component:Ht
          }
        ]
      },
      {
        path:'page1',//工作流
        name:'Gz',
        component:Gz
      }
    ]

  },
  {
    path: '/lydetails',
    name: 'lydetails',
    component: lydetails,
    redirect:'/pmmap',
    children:[
      {
        path: '/pmmap', 
        name: 'pmmap',
        component: pmmap
      },
      {
        path: '/fymanage', 
        name: 'fymanage',
        component: fymanage
      },
      {
        path: '/zsmanage', 
        name: 'zsmanage',
        component: zsmanage
      },
      {
        path: '/zkmanage', 
        name: 'zkmanage',
        component: zkmanage
      },
      {
        path: '/htmanage', 
        name: 'htmanage',
        component: htmanage
      }
    ]
  },
  {
    path:'/main',   //个人中心
    name:'UserIndex',
    component:User,
    meta: {
      requireAuth: true,
    },
    children: [
      { path: '/main', component: Internal, name: 'Internal'}, //内部管理
      { path:'/accountSetting',component:accountSetting, name:'accountSetting'}, //账户设置
      { path:'/fyTag',component:fyTag, name:'fyTag'}, //房源标签
      { path:'/htTag',component:htTag, name:'htTag'},
      { path:'/Termination',component:Termination, name:'Termination'},
      { path:'/CostTypeTable',component:CostTypeTable, name:'CostTypeTable'},
      { path:'/tenantTag',component:tenantTag, name:'tenantTag'},
      { path:'/customIndustry',component:customIndustry, name:'customIndustry'},
      {path:'/contractTemplate',component:contractTemplate,name:'contractTemplate'},
    ]
  },
  {
    path:'*',  //404
    name:'notFound',
    component:NotFoud
  }
]
const router = new Router({
  mode: 'history',
  routes
})
// router.beforeEach((to, from, next) => {
//   // iView.LoadingBar.start();//loadong 效果
//   store.state.user =JSON.parse(sessionStorage.getItem('user'))//获取本地存储的token
//   console.log(store.state.user);
//   if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
//     if (store.state.user!=="") {  // 通过vuex state获取当前的user是否存在
//      next();
//     }
//     else {
//       next({
//         path: '/login',
//         query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
//       })
//     }
//   }
//   else {
//     next();
//   }
// })
// 页面刷新时，重新赋值
// if (sessionStorage.getItem('user')) {
//   this.$store.commit(ADD_COUNT, sessionStorage.getItem('user'))
// }
router.beforeEach((to, from, next) => {
   var userInfo = JSON.parse(sessionStorage.getItem('user'))
   if(userInfo){
    next()
   }else{
    if(to.path=='/logins' || to.path=='/forget'){
      next()
    }else if(to.path=='/register'){
      next('/logins')
    }
    else{
      Message({
        showClose: true,
        message: '请先登陆',
        type: 'error'
      });
      next('/logins')
    }
   }
})
export default router;