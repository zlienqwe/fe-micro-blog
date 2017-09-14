<template>
    <div class="detail">
        <BreadCrumb></BreadCrumb>
        <h1>{{ poster_detail.title }}</h1>
        <p>{{ poster_detail.content }}</p>
    </div>
</template>

<script>
    import BreadCrumb from '../components/BreadCrumb.vue'
  export default {
    name: 'detail',
    data() {
      return {
        poster_detail: {},
      }
    },
    methods: {
      getCurrentPosterDetail(id){
        var api = process.env.API_ROOT + '/post/detail'
        this.$http.post(api, {
          id: id
        }).then(response =>{
          console.log(response)
          this.poster_detail = response.data.data;
          var breadcrumbroute = [
            {
              title: '首页',
              link: '/'
            },
            {
              title: this.poster_detail.title,
            }
          ]
          this.$store.commit('setbreadcrumbroute', breadcrumbroute)
        })
      }
    },
    created() {
      this.getCurrentPosterDetail(this.$route.params.poster_id)
    },
    components: {
      BreadCrumb
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .detail{
        padding: 30px;
    }
</style>
