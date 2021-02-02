import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Events from '../views/Events.vue'
import Literature from '../views/Literature.vue'
import News from '../views/News.vue'
import Project from '../views/Project.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/About',
    name: 'About',
    component: About
  },
  {
    path: '/Events',
    name: 'Events',
    component: Events
  },
  {
    path: '/Literature',
    name: 'Literature',
    component: Literature
  },
  {
    path: '/News',
    name: 'News',
    component: News
  },
  {
    path: '/Project',
    name: 'Project',
    component: Project
  },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
