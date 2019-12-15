import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import test from '@/components/test'
import test2 from '@/components/test2'
import upload from '@/components/upload'
import Table from '@/components/Table'
import sign from '@/components/sign'
import table3 from '@/components/table3'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
    },
    
  ]
})
