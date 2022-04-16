import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeView from '../views/HomeView.vue'
import About from '../views/AboutView.vue'
import LoginView from '../views/LoginView.vue'

import BookingRoom from '../views/BookingRoom.vue'
import BookingRoomDetail from '../views/booking/BookingTime.vue'
import BookingHistory from '../views/booking/recentBooking.vue'
import BookingRoomConfirm from '../views/booking/BookingDetail.vue'

import Institution from '../views/Instutution/InstututionView.vue'

import Petition from '../views/Petition/PetitionView.vue'

import RoomManagement from '../views/RoomManagement/RoomView.vue'
import ToolD from '../views/equipment/ToolD.vue'
import Building from '../views/building/BuildingView.vue'

import Approver from '../views/approver/ApproverView.vue'

import Petitiondetail from '../views/Petition/Petition_detail.vue'
import Users from '../views/users/UsersView.vue'
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
    path: '/institution',
    name: 'institution',
    component: Institution
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
    path: '/bookingRoomDetail',
    name: 'bookingRoomDetail',
    component: BookingRoomDetail
  },
  {
    path: '/bookingHistory',
    name: 'bookingHistory',
    component: BookingHistory
  },
  {
    path: '/bookingRoomConfirm',
    name: 'bookingRoomConfirm',
    component: BookingRoomConfirm
  },
  {
    path: '/approver',
    name: 'approver',
    component: Approver
  },
  {
    path: '/pettitiondetail',
    name: 'petitiondetail',
    component: Petitiondetail
  },
  {
    path: '/users',
    name: 'users',
    component: Users
  },
  {
    path: '/toolD',
    name: 'toolD',
    component: ToolD
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
