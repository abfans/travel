<template>
  <div class="login">
      <div class="login-center">
        <h1>
          <router-link to="/login" tag="span" :class="{active:active}"
            @click.native="changeActive(true)">
            登陆
          </router-link>
          <router-link to="/register" tag="span" :class="{active:!active}"
            @click.native="changeActive(false)">
            注册
          </router-link>
        </h1>
        <div class="login-content">
          <el-input placeholder="请输入手机号" v-model="mobile"></el-input>
        </div>
        <div class="login-content">
          <el-input placeholder="请输入手机号" v-model="password"></el-input>
        </div>
        <div  class="login-content">
           <el-input placeholder="验证码" class="code-input" v-model="code"></el-input>
           <img src="" alt="获取验证" class="tips">
        </div>
        <div  class="login-content">
          <el-button type="primary">注册</el-button>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name:'login',
  data(){
    return{
      active:false,
      mobile:'',
      password:'',
      remember:false
    }
  },
  methods:{
    changeActive(state){
      if(this.active==state){
        return
      }
      this.active=!this.active
    }
  }
}
</script>

<style  scoped>
.login{
  width:100%;
  height:100%;
  background:url(../assets/images/log_register.jpg);
  background-size: cover;
}
.login-center{
    width: 350px;
    padding: 15px 30px 20px 30px;
    margin-top: -175px;
    margin-left: -185px;
    position: absolute;
    left: 50%;
    top: 50%;
    text-align:center;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 3px 3px rgba(0,0,0,.4);
}
.login-center h1{
  height:50px;
  line-height:50px;
  font-size:30px;
  margin-bottom:15px;
  border-bottom:3px solid #ccc;
}
.login-center h1 span{
  width:170px;
  height:50px;
  display:inline-block;
}
.active{
  border-bottom:3px solid #f80;
}
.login-content{
  height:50px;
  padding:10px 0;
  line-height:50px;
}
.el-input__inner{
  height:50px;
}
.el-button{
  width:100%;
  height:50px;
}
.el-button--primary{
  background:#f80;
  font-size:14px;
}
.el-checkbox{
  display:block;
  float:left;
}
.tips{
  display:block;
  float:right;
  margin-right:10px;
}
.code-input{
  width:200px;
  float:left;
}
</style>
