import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'index-page',
            redirect: '/stock/stop/list'
        },
        {
            path: '/stock/stop/list',
            name: 'stock-stop-list',
            component: resolve => require(['@/components/stop/stock-stop-list.vue'], resolve)
        },
        {
            path: '/stock/stop/detail',
            name: 'stock-stop-detail',
            component: resolve => require(['@/components/stop/stop-item-detail.vue'], resolve)
        }
    ]
})
