import {createRouter, createWebHashHistory} from 'vue-router'

const routes = [
    {
      path: '/',
      name: 'home',
      component: Home.vue
    },
    {

    }
]

const router = createRouter({
    history:createWebHashHistory(),
    routes
})