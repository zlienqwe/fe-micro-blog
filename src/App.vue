<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import MainNav from './components/Navheader.vue'
  export default {
    name: 'app',
    data() {
      return {
        isLogin: false
      }
    },
    components: {
      MainNav,
    },
    methods: {

    },
    computed: {

    },
    watch: {

    },
    created() {

    },
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .navheader + *{
    margin-top: 70px;
    margin-bottom: 30px;
  }
</style>
