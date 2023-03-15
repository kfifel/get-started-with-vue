import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/result',
    name: 'result',
    component: () =>  import('../views/ResultQuiz.vue')
  },
  {
    path: '/quiz',
    name: 'quiz',
    component: () => import('../views/QuizTest.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name:'notFound',
    component: () => import('../views/NotFound.vue')
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router
