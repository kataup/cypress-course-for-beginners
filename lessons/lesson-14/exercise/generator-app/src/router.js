import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import GenerateValue from './views/GenerateValue.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/generate-value', name: 'GenerateValue', component: GenerateValue }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
