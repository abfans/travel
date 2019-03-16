<template>
	<div>
		<div id="toolbar">
			<div class="cw1200">
				<ul class="fl">
					<li class="tb"><p>您好，欢迎访问Zhiqi Travel Website！</p></li>
					<li class="tb">
						<a href="#" data-am-modal="{target: '#my-alert'}">签到</a><span>|</span>
					</li>
		      <li class="tb">
						<router-link to="/login">登录</router-link><span>|</span></li></li>
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
					<li class="tb">
						<img src="../assets/images/tel_ico.gif" alt="" />
						<span>40000-40000</span>
					</li>
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
							<h3 @click="show=!show">{{title}}</h3>
							<ul :class="{show:show}">
								<li ref="lis" v-for="opt in options" :li-value="opt.value"
								 @click="selected(opt.value)"
								 @mouseleave="removeClass()"
								 @mouseenter="addClass(opt.value)">{{opt.label}}</li>
							</ul>
							<input v-model="tips" @focus="clearTips" @blur="addTips">
							<button type="button" name="button">搜索</button>
					</div>
					<div class="nav">
					<ul>
						<li v-for="(nav,index) in navLists">
							<router-link :to="nav.link" :class="{active:nav.show}" @click.navite="selectdNav(index)">{{nav.title}}</router-link>
						</li>
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
			navLists:[
				{link:'/',title:'首页',show:true},
				{link:'/scenic_list',title:'洛阳旅游',show:false},
				{link:'/mall_list',title:'特产商城',show:false},
				{link:'/note_list',title:'美丽乡村',show:false},
				{link:'/news_list',title:'新闻资讯',show:false},
			],
			title:'景区',
			current:'0',
			show:false,
			tips:'请输入内容',
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
	},
	mounted(){
		this.removeClass()
	},
	methods:{
		selected(index){
			this.current=index
			this.title=this.options[index].label
			this.show=false
		},
		addClass(index){
			this.$refs.lis.forEach(item=>{
				item.className=""
			});
			this.$refs.lis[index].className="active"
		},
		removeClass(){
			this.$refs.lis.forEach(item=>{
				item.className=""
			});
			this.$refs.lis[this.current].className="hover"
		},
		clearTips(){
			this.tips=""
		},
		addTips(){
			if(this.tips==""){
				this.tips="请输入内容"
			}
		},
		selectedNav(index){
			this.navList.forEach(item=>{
				item.show=false
			})
			this.navList[index].show=true
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
.active{
	color:#fff;
	background-color:#f60;
}
.el-input__inner{
	text-align:center;
}
.el-select-dropdown__item{
	text-align:center;
}
input,button{
	height:40px;
	vertical-align:top;
}
input{
	border:none;
	outline:none;
	padding:0 10px;
	width:372px;
}
button{
	width:80px;
	background:#f60;
	color:#fff;
	border:none;
	padding:0;
}
.search h3{
	display:inline-block;
	height:40px;
	color:#f60;
	font-weight:normal;
	overflow:hidden;
	width:65px;
	border-right:2px solid #f60;
	line-height:40px;
	text-align:center;
}
.search{
	position:relative;
}
.search ul{
	overflow:hidden;
	width:65px;
	position:absolute;
	top:40px;
	display:none;
	left:-2px;
	border:2px solid #f60;
	text-align:center;
	background:#fff;
	z-index:999;
}
.search ul li{
	height:40px;
	line-height:40px;
	cursor:pointer;
}
.hover{
	background:#eee;
}
.search .show{
	display:block;
}
</style>
