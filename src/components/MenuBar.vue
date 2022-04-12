<template>
  <div class="app-menu">
    <b-nav vertical>
      <b-nav-item to="/">Active</b-nav-item>
      <b-nav-item to="/about">Link</b-nav-item>
      <b-nav-item @click="showFormInput = !showFormInput"
        >Form input
        <b-icon
          :icon="showFormInput ? 'caret-down-fill' : 'caret-right-fill'"
        ></b-icon
      ></b-nav-item>
      <b-nav-item class="sub-menu" v-if="showFormInput" to="./formInput1"
        >Form input 1</b-nav-item
      >
      <b-nav-item class="sub-menu" v-if="showFormInput" to="./formInput2"
        >Form input 2</b-nav-item
      >
      <b-nav-item class="sub-menu" v-if="showFormInput" to="./formInput3"
        >Form input 3</b-nav-item
      >
      <b-nav-item class="sub-menu" v-if="showFormInput" to="./formInput4"
        >Form input 4</b-nav-item
      >
      <b-nav-item class="sub-menu" v-if="showFormInput" to="./formInput5"
        >Form input 5</b-nav-item
      >
      <b-nav-item class="sub-menu" v-if="showFormInput" to="./formInput6"
        >Form input 6</b-nav-item
      >
      <b-nav-item class="sub-menu" v-if="showFormInput" to="./formInput7"
        >Form input 7</b-nav-item
      >
      <b-nav-item class="sub-menu" v-if="showFormInput" to="./formInput8"
        >Form input 8</b-nav-item
      >
      <b-nav-item class="sub-menu" v-if="showFormInput" to="./formInput9"
        >Form input 9</b-nav-item
      >
      <b-nav-item class="sub-menu" v-if="showFormInput" to="./formInput10"
        >Form input 10</b-nav-item
      >

      <b-nav-item @click="showForm = !showForm"
        >Form
        <b-icon
          :icon="showForm ? 'caret-down-fill' : 'caret-right-fill'"
        ></b-icon
      ></b-nav-item>
      <b-nav-item class="sub-menu" v-if="showForm" to="./form1"
        >Form 1</b-nav-item
      >
      <b-nav-item class="sub-menu" v-if="showForm" to="./form2"
        >Form 2</b-nav-item
      >
      <b-nav-item class="sub-menu" v-if="showForm" to="./form3"
        >Form 3</b-nav-item
      >
      <b-nav-item class="sub-menu" v-if="showForm" to="./form4"
        >Form 4</b-nav-item
      >
      <b-nav-item @click="showCRUDExample = !showCRUDExample"
        >CRUD Example
        <b-icon
          :icon="showCRUDExample ? 'caret-down-fill' : 'caret-right-fill'"
        ></b-icon
      ></b-nav-item>
      <b-nav-item class="sub-menu" v-if="showCRUDExample" to="./datatable1"
        >Data table 1</b-nav-item
      >
      <b-nav-item class="sub-menu" v-if="showCRUDExample" to="./productform1"
        >Product Form 1</b-nav-item
      >
      <b-nav-item class="sub-menu" v-if="showCRUDExample" to="./productTable"
        >Product Table</b-nav-item
      >
    </b-nav>
  </div>
</template>
<script>
export default {
  data () {
    return {
      showFormInput: false,
      showForm: false,
      showCRUDExample: false
    }
  }
}
</script>
<style>
.app-menu {
  background-color: gray;
  font-size: 10pt;
  padding-top: 50px;
}
.sub-menu {
  padding-left: 10pt;
}

.nav-link {
  color: white;
  text-align: left;
}
.nav-link:hover {
  color: gold;
}
</style>
