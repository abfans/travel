<template>
  <div class="login">
      <div class="login-center">
        <h1>
          <span>登录</span>
          <span>注册</span>
        </h1>
        <p>
          
        </p>
      </div>
  </div>
</template>

<script>
export default {
  name:'login',
  data(){
    return{

    }
  }
}
</script>

<style  scoped>
.login{
  width:100%;
  height:100%;
  background:url(../assets/images/log_register.jpg)
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
</style>
