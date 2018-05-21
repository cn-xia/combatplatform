<template>
  <div id="app">
    <div id="header"></div>
    <div>
      <router-view/>
    </div>
    <div>
      <step-bar></step-bar>
    </div>
  </div>
</template>

<script>
import StepBar from "./components/StepBar.vue"
export default {
  name: 'App',
  components:{
    StepBar
  }
}
</script>

<style lang="scss">
  @import './style/_scroll-bar.scss';
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
