import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import main from './components/main.vue'
import person from './components/person.vue'
import car from './components/car.vue'
import search from './components/search.vue'

var router = new VueRouter({
    routes: [
        {path: '/', redirect: main},
        {path: '/main', component: main},
        {path: '/person', component: person},
        {path: '/car', component: car},
        {path: '/search', component: search}
    ],
    linkActiveClass: 'mui-active'
})
export default router;