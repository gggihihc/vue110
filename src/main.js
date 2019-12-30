import Vue from 'vue'
import app from './app.vue'


// 导入mui样式
import './lib/main.ui/css/mui.min.css'

// 导入mint-ui
import { Header, Swipe, SwipeItem} from '../node_modules/mint-ui'
import 'mint-ui/lib/style.css'
import './lib/main.ui/css/icons-extra.css'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

//导入vue-source
import vueSource from 'vue-source'
Vue.use(vueSource)

//导入路由
import router from './router.js'

new Vue({
    el: '#app',
    render: c => c(app),
    router
})