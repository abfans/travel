<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Headers from '@/components/Headers'
export default {
  name: 'App',
  components:{
  	Headers
  }
}
</script>

<style>
body, html,#app{
  width:100%;
  height:100%;
}
.fl{
	float:left;
}
ul li,ol li{
	list-style: none;
}
html, body, div, span, object, iframe,h1, h2,
h3, h4, h5, h6, p, blockquote, pre,abbr, address, cite, code,del, dfn,
em, img, ins,kbd, q, samp,small, strong, sub, sup, var,b, i,dl, dt, dd,
ol, ul, li,fieldset, form, label, legend,table, caption, tbody,
tfoot,thead,tr, th, td,article, aside, canvas, details, figcaption,
figure, footer, header, hgroup, menu, nav, section, summary,time, mark,
audio, video {
    margin:0;
    padding:0;
    border:0;
    outline:0;
    font-size:100%;
    vertical-align:baseline;
    background:transparent;
    outline-style:none;/*FF*/
}
</style>
