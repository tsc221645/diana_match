import { createApp } from 'vue'; import { createRouter, createWebHistory } from 'vue-router'; import App from './App.vue'; import './style.css';
import Landing from './views/Landing.vue'; import Quiz from './views/Quiz.vue'; import Result from './views/Result.vue'; import Live from './views/Live.vue';
const router=createRouter({history:createWebHistory(),routes:[{path:'/',component:Landing},{path:'/quiz',component:Quiz},{path:'/result',component:Result,beforeEnter:()=>sessionStorage.getItem('diana-result')?true:'/'},{path:'/live',component:Live}]});
createApp(App).use(router).mount('#app');
