<template lang="html">
  <div class="index">
    <Headers />
    <router-view class="bgImg"></router-view>
    <Footer />
  </div>
</template>

<script>
import Headers from "../Headers"
import Footer from "./footer"
export default {
  components:{
    Headers,
    Footer
  }
}
</script>

<style lang="css" scoped>
.bgImg{
  background: url(../../assets/images/g_bg.jpg) repeat-y
}
</style>
