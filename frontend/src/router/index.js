import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Calculator from '@/components/basic/Calculator'
import JoinForm from '@/components/member/JoinForm'
import LoginForm from '@/components/member/LoginForm'
import BoardList from '@/components/board/BoardList'
import ListTable from '@/components/member/ListTable'
import MemberList from '@/components/member/MemberList'

Vue.use(Router)

export default new Router({
  mode : 'history',
  routes: [
    {path: '/memberlist',name:'memberlist',component:MemberList},
    {
      path: '/listtable',
      name:  'listtable',
      component:ListTable
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/calculator',
      name: 'calculator',
      component: Calculator
    },
    {
      path: '/joinForm',
      name: 'joinForm',
      component: JoinForm
    },
    {
      path: '/loginForm',
      name: 'loginForm',
      component: LoginForm
    },
    {
      path: '/boardList',
      name: 'boardList',
      component: BoardList
    }
    
  ]
})
