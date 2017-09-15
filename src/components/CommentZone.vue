<template>
    <el-card class="commentzone">
        <slot></slot>
        <div v-if="commentLists.length > 0">
            <div class="commentitem" v-for="comment in commentLists">
                <h3>{{ comment.nickname }}:</h3>
                <p>{{ comment.content }}</p>
                <span>{{ comment.create_time | timefilter }}</span>
            </div>
        </div>
        <div v-else>
            <h3>暂无回复</h3>
        </div>
    </el-card>
</template>

<script>
  export default {
    name: 'commentzone',
    data() {
      return {
        commentLists: []
      }
    },
    methods: {
      getCurrentPosterComments(id) {
        var api = process.env.API_ROOT + '/comment/get'
        this.$http.post(api, {
          id: id
        }).then(response => {
          this.commentLists = response.data.data;
          this.$store.commit('changeCurrentPosterComment', this.commentLists)
        })
      },
    },
    created() {
      this.getCurrentPosterComments(this.$store.state.currentPosterId)
    },
    watch: {},
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .commentitem{
        border-bottom: 1px solid #eeeded;
        overflow: hidden;
        display: flex;
        flex-direction: row;
    }
    .commentitem:last-child{
        border: none;
    }

    .commentitem *{
        height: 30px;
        line-height: 30px;
        margin: 10px 0;
    }

    .commentitem h3{
        width: 100px;
        text-align: right;
        flex-shrink: 0;
    }

    .commentitem p{
        margin-left: 30px;
        flex-grow: 1;
        text-align: left;
    }
    .commentitem span{
        float: right;
        flex-shrink: 0;
        color: #989797;
        font-size: 12px;
    }
</style>
