import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 引入第三方组件库
// 1.完整引入mint-ui
import MintUI from 'mint-ui'
// 2单独引入mint-ui的样式
import'mint-ui/lib/style.css'

//3.将mint-ui注册vue
Vue.use(MintUI)

// 4.图片的样式文件
import'./font/iconfont.css'

Vue.config.productionTip = false

import './lib/mui/css/mui.css'
// 导入 MUI 的样式表，扩展图标样式，购物车图标
// 还需要加载图标字体文件
import './lib/mui/css/icons-extra.css'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
