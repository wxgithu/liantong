import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Detail from '@/components/Details'
import Index from  '@/components/index.vue' 
import Customer from "@/components/customer/customer.vue"
import noLoginCustomer from "@/components/customer/customer_nologin.vue"//未登录时点击跳转此页面
import LoginMyOrder from "@/components/state/loginMyOrder.vue"
import NoLoginOrder from "@/components/state/noLoginOrder.vue"
import PersonalInfo from "@/components/state/personalInfo.vue"
import PwdUpdate from "@/components/state/pwdUpdate.vue"
import ReceiveAdd from "@/components/state/receiveAddress.vue"
import mallIndex from "@/components/mallIndex"
import recharge from "@/components/recharge.vue"
import TaocanDetail from "@/components/taocanDetail.vue"
import login from "@/components/login"
import PhoneNumber from "@/components/phoneNumberList.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path:"/mallindex",
      name:'mallIndex',
      component:mallIndex
    },
    {
    	path:"/phoneNumber",
      name:'PhoneNumber',
      component:PhoneNumber
    },
    {
      path:"/detail",
      name:'Detail',
      component:Detail
    },
    {
      path:"/taocandetail", 
      name:'TaocanDetail',
      component:TaocanDetail
    },
    {path: '/login', component: login}, 
    {path:"/recharge",component:recharge},
    {
      path:"/nologinCustomer",
      name:"noLoginCustomer",
      component:noLoginCustomer
    },
    {
      path:"/customer/personalInfo",
      name:"PersonalInfo",
      component:PersonalInfo
    },
    {
      path:"/customer/pwdUpdate",
      name:"PwdUpdate",
      component:PwdUpdate
    },
    {path:"/customer/:uid",component:Customer},
    {path:"/customer/loginMyOrder",component:LoginMyOrder},
   
    {path:"/customer/receiveAddress",component:ReceiveAdd},
    
  
  ]
})
