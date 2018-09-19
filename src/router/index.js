import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'


// 控制引入的组件文件
const _import_ = require( './common' )

Vue.use(Router)

export const constantRouterMap = [
  { path:'/', redirect:'/test_index', name:'测试首页' },
  { path:'*', redirect:'/404' },
  { path:'/404', name:'错误页', component:_import_( 'error/404' ), meta:{ title:'错误页' } },
  { path:'/test_index', name:'首页', component:_import_( 'test/index' ), meta:{ title:'首页' } },
  { path:'/demo1', name:'test1', component:HelloWorld, meta:{ title:'测试页-1' } },
  { path:'/demo2', name:'test2', component:_import_( 'test/first_demo' ), meta:{ title:'测试页-2' } },
]


export default new Router({
  mode: 'history',
  routes: constantRouterMap
})


export const testRouterMap = [
  { path:'/demo3', name:'test3', component:_import_( 'test/first_demo' ), meta:{ title:'测试页-3' } },
]




