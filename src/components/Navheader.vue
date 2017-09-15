<template>
  <div class="navheader">
    <el-menu theme="dark" :default-active="activeIndex" :router='ifUseRouter' class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index='/home'>首页</el-menu-item>
      <el-menu-item index='/about'>关于</el-menu-item>
      <el-menu-item index='/help'>帮助</el-menu-item>
    </el-menu>
  </div>
</template>

<script>

  export default {
    name: 'navheader',
    data () {
      return {
        activeIndex: '/home',
        ifUseRouter: true
      }
    },
    methods: {
      setNav (){
        if(this.$route.path == '/'){
          this.activeIndex = '/home'
        }else {
          this.activeIndex = '/'+this.$route.path.split('/')[1];
        }
      },
      handleSelect (val) {
      }
    },
    created() {
      this.setNav();
    },
    watch: {
      "$route": "setNav"
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .navheader{
    position: fixed;
    top: 0;
    width: 100%;
    z-index:1;
  }
</style>
