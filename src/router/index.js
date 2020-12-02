import Vue from 'vue';
import vueRouter from 'vue-router';

Vue.use(vueRouter);
let router = new vueRouter({
    mode:'history',
    routes:[
        {path: "/",redirect:"/login"},
        {
            path : '/login',
            component : () => import('../views/login')
        },
        {
            path : '/index',
            component : () => import('../views/index'),
            children : [
                {path : '/home' , component : () => import('../views/home')},
                {path : "/",redirect:"/home"},
                {path : "/customer" , component : () => import('../views/customer')},
                {path : "/newUser" , component : () => import('../views/newUser')},
                {path : "/info" , component : () => import('../views/info')},
                {path : "/admin" , component : () => import('../views/admin')},
                {path : "/product" , component : () => import('../views/product')}
            ]
        },
    ]
});
export default  router;