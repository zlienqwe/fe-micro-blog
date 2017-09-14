<template>
    <div class="homepage">
        <MainNav></MainNav>
        <el-row>
            <el-col class="el-col" v-for="poster in posterItems" :key="poster.id" :xs="12" :sm="8" :md="6" :lg="4">
                <PosterItem :posteritem='poster'></PosterItem>
            </el-col>
        </el-row>
    </div>
</template>

<script>
  import PosterItem from '../components/PosterItem.vue'
  import MainNav from '../components/Navheader.vue'

  export default {
    name: 'homepage',
    data() {
      return {
        posterItems: []
      }
    },
    methods: {
      getCurrentUserPoster(){
        var api = process.env.API_ROOT + '/post';
        this.$http.get(api).then(response => {
          this.posterItems = response.data.data;
        })
      }
    },
    created() {
      this.getCurrentUserPoster();
      this.$store.commit('setbreadcrumbroute', [])
    },
    components: {
      PosterItem,
      MainNav
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .body {
        background-color: #ececec;
        border-radius: 5px;
        min-height: 500px;
    }
    .el-col{
    }
</style>
