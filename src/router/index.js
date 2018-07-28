import Vue from 'vue'
import Router from 'vue-router'
import IndexWithMap from '@/pages/IndexWithMap'
import InfoFusion from '@/pages/InfoFusion'
import Report from '@/pages/Report'
import AttackAid from '@/pages/AttackAid'

import NotFound from '@/pages/NotFound'
import Detect from '@/pages/detect'
import TargetInfo from '@/pages/detect/TargetInfo'
import EnvironInfo from '@/pages/detect/EnvironInfo'
import AirproInfo from '@/pages/detect/AirproInfo'

import Situation from '@/pages/infofusion/Situation'
import Threat from '@/pages/infofusion/Threat'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path:'/',
      redirect:'/detect/targetinfo'
    },
    {
      path: '/attackaid',
      name: 'AttackAid',
      component: AttackAid
    },
    {
      path: '/infofusion',
      name: 'InfoFusion',
      component: InfoFusion,
      children:[
        {
          path:'threat',
          component:Threat
        },
        {
          path:'situation',
          component:Situation
        }
      ]
    },
    {
      path: '/detect',
      name: 'Detect',
      component: Detect,
      children:[
        {
          path:'targetinfo',
          component:TargetInfo
        },
        {
          path:'airproInfo',
          component:AirproInfo
        },
        {
          path:'environInfo',
          component:EnvironInfo
        }
      ]
    },
    {
      path: '/report',
      name: 'Report',
      component: Report
    },
    {
      path: '/404',
      component: NotFound,
      name: 'NotFound',
      hidden: true
    },
    {
      path: '*',
      hidden: true,
      redirect: { path: '/404' }
    }

  ]
})
