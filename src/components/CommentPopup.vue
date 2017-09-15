<template>
    <el-dialog title="发表评论" :visible.sync="dialogFormVisible" :before-close="closePopup">
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="昵称" prop="nickname" :rules="[
                            { required: true, message: '昵称不能为空'}]">
                <el-input v-model="form.nickname" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="内容" prop="content" :rules="[
                            { required: true, message: '内容不能为空'}]">
                <el-input type="textarea" v-model="form.content"></el-input>
            </el-form-item>
        </el-form>
        <div>
            <el-button type="primary" @click="onSubmit('form')">
                发表评论
            </el-button>
            <el-button @click="resetForm('form')">重置</el-button>
        </div>
    </el-dialog>
</template>

<script>

  export default {
    name: 'commentpopup',
    data() {
      return {
        form: {
          content: '',
          nickname: ''
        },
      }
    },
    methods: {
      onSubmit(formname) {
        this.$refs[formname].validate((valid) => {
          if (valid) {
            var api = process.env.API_ROOT + '/comment/new'
            this.form.poster_id = this.$store.state.currentPosterId;
            this.$http.post(api, this.form).then(response => {
              if (response.data.flag) {
                this.$message({
                  message: '发布成功',
                  type: 'success'
                });

                var currentPosterComment = this.$store.state.currentPosterComment;
                currentPosterComment.unshift(JSON.parse(JSON.stringify(response.data.result)));
                this.$store.commit('changeCurrentPosterComment', currentPosterComment);
                
                this.$store.commit('toogleCommentPopup', false);
                this.resetForm(formname)
              } else {
                this.$message({
                  message: response.data.msg,
                  type: 'error'
                });
              }
            })
          }
        })

        console.log(this.$store.state.currentPosterId)
      },
      resetForm(formname) {
        this.$refs[formname].resetFields();
      },
      closePopup() {
        this.$store.commit('toogleCommentPopup', false)
      }
    },
    created() {
    },
    computed: {
      dialogFormVisible: {
        get: function () {
          return this.$store.state.showCommentPopup;
        },
        set: function () {

        }
      },

    },
    watch: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
