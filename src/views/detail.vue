<template>
    <div class="detail">
        <BreadCrumb></BreadCrumb>
        <h1>{{ poster_detail.title }}</h1>
        <p>{{ poster_detail.content }}</p>
        <i class="el-icon-edit" @click="addComment"></i>
        <CommentZone></CommentZone>
        <CommentPopup></CommentPopup>
    </div>
</template>

<script>
    import BreadCrumb from '../components/BreadCrumb.vue'
    import CommentPopup from '../components/CommentPopup.vue'
    import CommentZone from '../components/CommentZone.vue'
  export default {
    name: 'detail',
    data() {
      return {
        poster_detail: {},
        comment_list: []
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
      },
      addComment(){
        this.$store.commit('toogleCommentPopup', true)
        this.$store.commit('changeCurrentPosterId', this.poster_detail.id)
      }
    },
    created() {
      this.getCurrentPosterDetail(this.$route.params.poster_id)
      this.$store.commit('changeCurrentPosterId', this.$route.params.poster_id)

    },
    components: {
      BreadCrumb,
      CommentPopup,
      CommentZone
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .detail{
        padding: 30px;
    }
</style>
