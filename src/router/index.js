import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from '../views/AboutView.vue'
import LoginView from '../views/LoginView.vue'
import BookingRoom from '../views/BookingRoom.vue'
import Agency from '../views/AgencyView.vue'
import Petition from '../views/PetitionView.vue'
<<<<<<< HEAD
import RoomManagement from '../views/RoomManagement.vue'

=======
import Building from '../views/BuildingView.vue'
>>>>>>> refs/remotes/origin/master
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/booking',
    name: 'booking',
    component: BookingRoom
  },
  {
    path: '/agency',
    name: 'agency',
    component: Agency
  },
  {
    path: '/petition',
    name: 'petition',
    component: Petition
  },
  {
    path: '/manageRoom',
    name: 'manageRoom',
    component: RoomManagement
  },
  {
    path: '/building',
    name: 'building',
    component: Building
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
