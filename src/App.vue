<template>
  <b-container fluid id="app">
    <header>
      <keep-alive>
        <!--vue的tag屬性只能用kebab-case-->
        <navber :view='mainView' @update-view="changeView"/>  <!-- view是傳入值, update-view是傳出值-->
      </keep-alive>
    </header>
    <main>
      <keep-alive>
        <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
        <!-- <HelloWorld msg="Welcome to Your Vue.js App"/>  -->
        <component :is="mainView"/>
      </keep-alive>
    </main>
    <footer>
      <!-- <my-footer/> -->
    </footer>
  </b-container>

</template>

<script>
import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
//import HelloWorld from '@/components/HelloWorld.vue'
//import MyFooter from '@/components/footer.vue'
import navber from '@/components/navbar.vue'
// import financeProject from '@/components/my-component.vue'
import financeProject from '@/components/financeProject.vue'
import stockCompare from '@/components/my-component2.vue'


// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

export default {
  name: 'App',
  components: {
    navber,
    financeProject,
    stockCompare,
  },
  data: function() {
    return {
      mainView:'stockCompare', //主功能
    }
  },
  methods:{
      changeView(name){
          this.mainView = name;
      }
  },  
}
</script>

<style>
</style>
