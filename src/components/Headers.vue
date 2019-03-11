<template>
	<div>
		<div id="toolbar">
			<div class="cw1200">
				<ul class="fl">
					<li class="tb"><p>您好，欢迎访问Zhiqi Travel Website！</p></li>
					<li class="tb">
						<a href="#" data-am-modal="{target: '#my-alert'}">签到</a><span>|</span></li>
		            <li class="tb"><a href="login.html">登录</a><span>|</span></li></li>
					<li class="tb"><a href="login.html">登录</a></li>
					<li class="tb"><a href="register.html">注册</a></li>
				</ul>
				<ul class="fr">
				<li class="tb">
					<a href="#">我的河洛</a>
					<span>|</span>
				</li>
				<li class="tb">
					<a href="">购物车</a>
					<span>|</span>
				</li>
				<li class="tb">
					<a href="">用户帮助中心</a>
					<span>|</span>
				</li>
				<li class="tb"><img src="../assets/images/tel_ico.gif" alt="" /><span>40000-40000</span></li>
			</ul>
			</div>
		</div>
		<div id="header">
			<div class="cw1200">
				<div class="logo fl">
					<a href="">
						<img src="../assets/images/t_logo.jpg" alt="" />
					</a>
				</div>
				<div class="search_nav fl">
					<div class="search radius6">
						<el-select v-model="value" placeholder="请选择">
						    <el-option
						      v-for="item in options"
						      :key="item.value"
						      class="select"
						      :label="item.label"
						      :value="item.value">
						    </el-option>
						</el-select>
						<el-input 
							style="border:none"
							v-model="input" placeholder="请输入内容"></el-input>
					</div>
					<div class="nav">
					<ul>
						<li><router-link to="/">首页</router-link></li>
						<li><router-link to="/">洛阳旅游</router-link></li>
						<li><a href="">特产商城</a></li>
						<li><a href="">美丽乡村</a></li>
						<li><a href="">新闻资讯</a></li>
						<li><a href="">项目地址</a></li>
					</ul>
				</div>	
				</div>
				
			</div>
		</div>
	</div>
</template>

<script>
export default{
	name:'headers',
	data(){
		return{
			options:[
				{
          			value: '0',
          			label: '景区'
        		},
        		{
          			value: '1',
          			label: '特产'
        		},
        		{
          			value: '2',
          			label: '游记'
        		},
        		{
          			value: '3',
          			label: '文章'
        		},
			],
			value:"0",
		}
	}
}
</script>

<style scoped>
@import url("../assets/css/style.css");
.header .fl li{
	float: left;
}
.el-select{
	width:100px;
	border:none;
}
.el-input{
	width:200px;
	border:none;
	height:200px;
}
.el-input .el-input__inner{
    height: 33px;
    font-size: 13px;
    box-shadow: none;
    border:none;
}
</style>