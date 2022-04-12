import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from '../views/AboutView.vue'
import LoginView from '../views/LoginView.vue'
import BookingRoom from '../views/BookingRoom.vue'
import Instutution from '../views/InstututionView.vue'
import Petition from '../views/PetitionView.vue'
import RoomManagement from '../views/RoomManagement.vue'
import Building from '../views/BuildingView.vue'
import BookingRoomDetail from '../views/BookingRoomDetail.vue'
import AddInstututionSuccess from '../views/AddInstututionSuccessView.vue'
import DeleteInstutution from '../views/DeleteInstututionView.vue'
import AddInstutution from '../views/AddInstututionView.vue'

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
    path: '/instutution',
    name: 'instutution',
    component: Instutution
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
  },
  {
    path: '/bookingDetail',
    name: 'bookingDetail',
    component: BookingRoomDetail
  },
  {
    path: '/addInstutution',
    name: 'addInstutution',
    component: AddInstutution
  },
  {
    path: '/addInstututionSuccess',
    name: 'addInstututionSuccess',
    component: AddInstututionSuccess
  },
  {
    path: '/deleteInstutution',
    name: 'deleteInstutution',
    component: DeleteInstutution
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
