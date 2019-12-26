import Vue from 'vue'
import app from './app.vue'


// 导入mui样式
import './lib/main.ui/css/mui.min.css'

// 导入mint-ui
import { Header} from '../node_modules/mint-ui'
import 'mint-ui/lib/style.css'
Vue.component(Header.name, Header)


new Vue({
    el: '#app',
    render: c => c(app)
})