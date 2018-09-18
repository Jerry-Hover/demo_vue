import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

// 控制引入的组件文件
const _import_ = require( './common' )

Vue.use(Router)

export const constantRouterMap = [
  { path:'/', redirect:'/test_index', name:'测试首页' },
  { path:'/test_index', name:'首页', component:HelloWorld, meta:{ title:'首页' } },
  { path:'/demo', name:'test2', component:_import_( 'test/first_demo' ), meta:{ title:'测试页' } },
]

export default new Router({
  mode: 'history',
  routes: constantRouterMap
})



