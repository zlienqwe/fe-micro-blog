<template>
    <el-card>
        <div v-for="comment in commentLists">
            <h3>{{ comment.nickname }}</h3>
            <p>{{ comment.content }}</p>
        </div>
    </el-card>
</template>

<script>

  export default {
    name: 'commentzone',
    data () {
      return {
        commentLists: []
      }
    },
    methods: {
      getCurrentPosterComments(id){
        var api = process.env.API_ROOT + '/comment/get'
        this.$http.post(api, {
          id: id
        }).then(response =>{
          console.log(response)
          this.commentLists = response.data.data;
          this.$store.commit('changeCurrentPosterComment', this.commentLists)
        })
      },
    },
    created() {
      this.getCurrentPosterComments(this.$store.state.currentPosterId)
    },
    watch: {
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
