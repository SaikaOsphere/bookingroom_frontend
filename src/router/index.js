import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from '../views/AboutView.vue'
import LoginView from '../views/LoginView.vue'
import BookingRoom from '../views/BookingRoom.vue'
import Instutution from '../views/InstututionView.vue'
import Petition from '../views/PetitionView.vue'
import RoomManagement from '../views/RoomManagement/RoomManagement.vue'
import Building from '../views/building/BuildingView.vue'
import BookingRoomDetail from '../views/booking/BookingRoomDetail.vue'
import BookingDetail from '../views/booking/recentBookingDetail.vue'
import BookingRoomConfirm from '../views/booking/BookingRoomConfirm.vue'
import AddBuilding from '../views/building/AddBuilding.vue'
import EditBuilding from '../views/building/EditBuilding.vue'
import DeleteBuilding from '../views/building/DeleteBuilding.vue'
import AddBuildingSuccess from '../views/building/AddBuildingSuccess.vue'
import EditBuildingSuccess from '../views/building/EditBuildingSuccess.vue'
import DeleteBuildingSuccess from '../views/building/DeleteBuildingSuccess.vue'
import Approver from '../views/ApproverView.vue'
import AddRoomManagement from '../views/RoomManagement/AddRoomManagement .vue'
import AddRoomManagementSuccess from '../views/RoomManagement/AddRoomManagementSuccess.vue'
import EditRoomManagement from '../views/RoomManagement/EditRoomManagement.vue'
import EditRoomManagementSuccess from '../views/RoomManagement/EditRoomManagementSuccess.vue'
import DeleteRoomManagement from '../views/RoomManagement/DeleteRoomManagement.vue'
import DeleteRoomManagementSuccess from '../views/RoomManagement/DeleteRoomManagementSuccess.vue'
// import AddInstututionSuccess from '../views/AddInstututionSuccessView.vue'
// import DeleteInstutution from '../views/DeleteInstututionView.vue'
// import AddInstutution from '../views/AddInstututionView.vue'
// import DeleteInstututionSuccess from '../views/DeleteInstututionSuccessView.vue'
// import EditInstutution from '../views/EditInstututionView.vue'
// import EditInstututionSuccess from '../views/EditInstututionSuccessView.vue'
// import AddInstututionSuccess from '../views/Instutution/AddInstututionSuccessView.vue'
// import DeleteInstutution from '../views/Instutution/DeleteInstututionView.vue'
// import AddInstutution from '../views/Instutution/AddInstututionView.vue'
// import DeleteInstututionSuccess from '../views/Instutution/DeleteInstututionSuccessView.vue'
// import EditInstutution from '../views/Instutution/EditInstututionView.vue'
// import EditInstututionSuccess from '../views/Instutution/EditInstututionSuccessView.vue'

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
    path: '/bookingRoomDetail',
    name: 'bookingRoomDetail',
    component: BookingRoomDetail
  },
  {
    path: '/bookingDetail',
    name: 'bookingDetail',
    component: BookingDetail
  },
  {
    path: '/bookingRoomConfirm',
    name: 'bookingRoomConfirm',
    component: BookingRoomConfirm
  },
  {
    path: '/addBuilding',
    name: 'addBuilding',
    component: AddBuilding
  },
  {
    path: '/editBuilding',
    name: 'editBuilding',
    component: EditBuilding
  },
  {
    path: '/deleteBuilding',
    name: 'deleteBuilding',
    component: DeleteBuilding
  },
  {
    path: '/addBuildingSuccess',
    name: 'addBuildingSuccess',
    component: AddBuildingSuccess
  },
  {
    path: '/editBuildingSuccess',
    name: 'editBuildingSuccess',
    component: EditBuildingSuccess
  },
  {
    path: '/deleteBuildingSuccess',
    name: 'deleteBuildingSuccess',
    component: DeleteBuildingSuccess
  },
  {
    path: '/approver',
    name: 'approver',
    component: Approver
  },
  {
    path: '/addRoomManagement',
    name: 'addRoomManagement',
    component: AddRoomManagement
  },
  {
    path: '/addRoomManagementSuccess',
    name: 'addRoomManagementSuccess',
    component: AddRoomManagementSuccess
  },
  {
    path: '/editRoomManagement',
    name: 'editRoomManagement',
    component: EditRoomManagement
  },
  {
    path: '/editRoomManagementSuccess',
    name: 'editRoomManagementSuccess',
    component: EditRoomManagementSuccess
  },
  {
    path: '/deleteRoomManagement',
    name: 'deleteRoomManagement',
    component: DeleteRoomManagement
  },
  {
    path: '/deleteRoomManagementSuccess',
    name: 'deleteRoomManagementSuccess',
    component: DeleteRoomManagementSuccess
  }
  // {
  //   path: '/editInstututionSuccess',
  //   name: 'editInstututionSuccess',
  //   component: EditInstututionSuccess
  // },
  // {
  //   path: '/editInstutution',
  //   name: 'editInstutution',
  //   component: EditInstutution
  // },
  // {
  //   path: '/addInstutution',
  //   name: 'addInstutution',
  //   component: AddInstutution
  // },
  // {
  //   path: '/addInstututionSuccess',
  //   name: 'addInstututionSuccess',
  //   component: AddInstututionSuccess
  // },
  // {
  //   path: '/deleteInstutution',
  //   name: 'deleteInstutution',
  //   component: DeleteInstutution
  // },
  // {
  //   path: '/deleteInstututionSuccess',
  //   name: 'deleteInstututionSuccess',
  //   component: DeleteInstututionSuccess
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
