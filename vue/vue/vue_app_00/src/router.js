import Vue from 'vue'
import Router from 'vue-router'
import HelloContainer from "./components/HelloWorld.vue"
//1,引入Exame01.vue组件
import  Exame01 from "./components/exam/Exame01.vue"
import  Exame02 from "./components/exam/Exame02.vue"
import  Exame03 from "./components/exam/Exame03.vue"
Vue.use(Router)


//2,为Exame01.vue配置路径
export default new Router({
  routes: [
    {path:'/',component:HelloContainer},
    {path:'/Exame01',component:Exame01},
    {path:'/Exame02',component:Exame02},
    {path:'/Exame03',component:Exame03}

  ]
})
