import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import loginPage from '../components/loginPage'
import HelloWorld from '../components/HelloWorld'
import NotFound from '../components/NotFound'
Vue.use(Router)


export default new Router({
    mode: 'history',
    routes: [
        {
            path: "/",
            name: 'Home',
            component: Home
        },
        {
            path: '/loginPage',
            name: 'loginPage',
            component: loginPage
        },
        {
            path: '/HelloWorld',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path:"/*",
            name:"NotFount",
            component:NotFound
        }
    ]
})


