<template>
    <div class="breadcrumb">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item v-for="routeitem in route" :key="routeitem.title" :to="{ path: routeitem.link }">{{ routeitem.title }}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script>

  export default {
    name: 'breadcrumb',
    data () {
      return {
      }
    },
    methods: {

    },
    created() {
    },
    watch: {
    },
    computed:{
      route:{
        get: function () {
          return this.$store.state.breadcrumb;
        },
        set: function () {

        }
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
