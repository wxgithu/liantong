import Vue from 'vue'
import Router from 'vue-router'
import HelloContainer from "./components/HelloWorld.vue"
import TextContainer from "./components/testContainer.vue"
import ListContainer from "./components/listContainer.vue"
import Customer from "./components/customer/customer.vue"
import LoginMyOrder from "./components/state/loginMyOrder.vue"
import NoLoginOrder from "./components/state/noLoginOrder.vue"
import PersonalInfo from "./components/state/personalInfo.vue"
import PwdUpdate from "./components/state/pwdUpdate.vue"
import ReceiveAdd from "./components/state/receiveAddress.vue"
Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',component:HelloContainer},
    {path:"/test",component:TextContainer},
    {path:"/list",component:ListContainer},
    {path:"/customer",component:Customer,children:[
            {path:"/customer/loginMyOrder",component:LoginMyOrder},
            {path:"/customer/noLoginOrder",component:NoLoginOrder},
            {path:"/customer/personalInfo",component:PersonalInfo},
            {path:"/customer/pwdUpdate",component:PwdUpdate},
            {path:"/customer/receiveAddress",component:ReceiveAdd}
        ]},


  ]
})
