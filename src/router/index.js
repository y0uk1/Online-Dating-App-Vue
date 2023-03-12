import { createRouter, createWebHistory } from 'vue-router'
import UserList from '../pages/UserList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'userList',
      component: UserList
    },
    {
      path: '/user/:id',
      name: 'userDetail',
      component: () => import('../pages/UserDetail.vue')
    },
    {
      path: '/user/:id/chat',
      name: 'chat',
      component: () => import('../pages/ChatView.vue')
    },
    {
      path: '/message-list',
      name: 'messageList',
      component: () => import('../pages/MessageList.vue')
    }
  ]
})

export default router
