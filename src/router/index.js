import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue';
import AboutPage from '../views/AboutPage.vue';
import GamePage from '../views/GamePage.vue';
import BinDetails from '@/views/BinDetails.vue';
import InstructionPage from '@/views/InstructionPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage,
    },
    {
      path: '/game',
      name: 'game',
      component: GamePage,
    },
    {
      path: '/instruction',
      name: 'instruction',
      component: InstructionPage,
    },
    {
      path: '/bins/:color',
      name: 'BinDetails',
      component: BinDetails,
      props: true
    },
  ],
})

export default router
