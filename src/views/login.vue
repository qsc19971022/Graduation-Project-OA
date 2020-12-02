<template>
  <div id="login">
      <div id="login-header">
          <h1>钱夕夕后台管理系统</h1>
      </div>
      <div id="login-center">
          <div id="login-box">
              <div id="login-box-user">
                  <div class="el-icon-user-solid"></div>
                  <el-input
                          size="large"
                          class="user"
                          placeholder="请输入内容"
                          v-model="user"
                          clearable>
                  </el-input>
              </div>
              <div id="login-box-pwd">
                  <div class="el-icon-unlock"></div>
                  <el-input placeholder="请输入密码" v-model="pwd" size="large" class="pwd" show-password></el-input>
              </div>
              <div id="login-box-submit">
                  <el-button type="primary" size="medium" :loading="false" id="submit" @click="login">登录</el-button>
                  <el-button type="danger" size="medium" id="exit">取消</el-button>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
    import loginApi from "@/apis/loginApi";
export default {
    name: 'HelloWorld',
    data(){
      return {
          user : '',
          pwd : '',
          tip : ''
      }
    },
     props: {
      msg: String
  },
    methods:{
        login(){
            loginApi.checkLogin(this.user,this.pwd,(cb) => {
                if (cb.status == 0) {
                    localStorage.setItem("user",this.user);
                    this.$message('登录成功');
                    this.$router.push('/index');
                } else {
                    this.$message('账号或密码错误');
                }
            });
        }
    },
    mounted(){
        document.body.style.backgroundColor="#409EFF";
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#login-header>h1{
    text-align: center;
    margin-top: 60px;
    color: white;
    font-size: 50px;
    font-family: .AppleSystemUIFont;
}
#login-center{
    width: 100%;
    height: 600px;
}
#login-box {
    width: 500px;
    height: 260px;
    margin: 100px auto;
    background-color: #EBEEF5;
    border-radius: 8px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    padding-top:40px ;
    box-sizing: border-box;
    text-align: center;
}
#login-box-pwd,#login-box-user{
    height: 60px;
}
.el-icon-user-solid,.el-icon-unlock{
    display: inline-block;
    width: 50px;
    height: 50px;
}
.pwd,.user{
    width: 280px;
    height: 60px;
    line-height: 60px;
    display: inline-block;
}
#login-box-submit{
    margin-top: 20px;
}
#submit,#exit{
    margin: 0 20px;
}
</style>
