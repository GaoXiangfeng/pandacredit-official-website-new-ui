<template>
	<div class='about'>
		<!-- pc端头部 -->
		<div class="pcHeader">
			<div class="header">
				<div class="content">
					<img class="imglogo" src="../../assets/img/2.png" alt="" @click='goHome'>
				</div>
				<div class="menu">
					<div class="menuitem" @click="handleMenuClick(0)">{{uiDataSource.Home.Home}}</div>
					<div class="menuitem" @click="handleMenuClick(1)">{{uiDataSource.Home.CoreAdvantage}}</div>
					<div class="menuitem" @click="handleMenuClick(2)">{{uiDataSource.Home.ProductService}}</div>
					<div class="menuitem">
						<Dropdown class="drop" placement="bottom-end" @on-click='goDetails'>
							<div>
								{{uiDataSource.Home.AboutUs}}
								<Icon type="md-arrow-dropdown" />
							</div>
							<DropdownMenu slot="list">
								<DropdownItem name='1'>{{uiDataSource.Home.AboutUs}}</DropdownItem>
								<DropdownItem name='2'>{{uiDataSource.Home.joinUs}}</DropdownItem>
							</DropdownMenu>
						</Dropdown>
					</div>
					<a href="https://cdn.solusi-ku.com/downloan/Solusiku-1.1.1.apk" target="_blank">
						<div class="menuitem">
							{{uiDataSource.Home.download}}
						</div>
					</a>
				</div>
			</div>
		</div>
		<!-- 移动端头部 -->
		<div class="phoneHeader">
			<pcheader></pcheader>
		</div>
		
		<!-- banner -->
		<div class="banner">
			<img src="../../assets/img/aboutimg/1.png" alt="">
			<div class="mengban"></div>
		</div>
		<!-- 公司简介 -->
		<div class="introduction">
			<div class="content">
				<h3>{{uiDataSource.introduce.AboutUs}}</h3>
				<p>{{uiDataSource.introduce.AboutUs1}}</p>
				<p>{{uiDataSource.introduce.AboutUs2}}</p>
				<p>{{uiDataSource.introduce.AboutUs3}}</p>
				<img src="../../assets/img/aboutimg/3.png" alt="">
			</div>
		</div>
		<!-- 发展历程 -->
		<!-- <div class="history">
			<h2>{{uiDataSource.history.historyTitle}}</h2>
			<img src="../../assets/img/aboutimg/4.png" alt="">
		</div> -->
		<!-- 联系我们 -->
		<!-- <div class="ContactUs">
			<div class="left">
				<p>{{uiDataSource.companyInfo.tel}}</p>
				<p>{{uiDataSource.companyInfo.email}}</p>
				<p>{{uiDataSource.companyInfo.address}}</p>
			</div>
			<img src="../../assets/img/aboutimg/5.png" alt="">
		</div> -->
		<!-- footer -->
		<div class="footer">
			<img class="imglogo" src="../../assets/img/2.png" alt="">
			<p>© {{year}} Finlabtech. All Rights Reserved.</p>
		</div>
	</div>
</template>

<script>
	// // 引入头部
	import pcheader from '@/components/header'
	import store from '../../store/index'
	import localStorage from '../../services/localStorage.service'
	import { mapState } from 'vuex'
	import Promise from '../../services/promise.service'
	export default {
		data() {
			return {
				uiDataSource: {
					introduce: {},
					history: {},
					companyInfo: {},
					Home:{}
					
				},
				year:""
			}
		},
		components:{
			pcheader
		},
		computed:{
		  ...mapState({
		         language: state => state.module.language,
		     })
		},
		watch: {
		  language: function () {
		      this.changeLanguage()
		  }
		},
		created() {
		},
		mounted() {
		  this.changeLanguage()
		  this.nowYear()
		},
		methods: {
			// 跳转页面
			goDetails(params){
				let _param = Number(params);
				switch(_param){
					case 1: {	
						window.scrollTo(0,0)
						this.$router.push({  name: "aboutUs" });
						break;
					}
					case 2: {
						window.scrollTo(0,0)
						this.$router.push({  name: "company" });
						break;
					}
				}
			},
		  changeLanguage() {
		    this.$i18n.locale = this.language
		    
		    this.uiDataSource = this.$i18n.messages[this.$i18n.locale].message.home
		  },
		  // 获取当前的年份
		  nowYear(){
			  var myDate=new Date();
			  var year=myDate.getFullYear();
			  return this.year=year
			  console.log(year)
		  },
		  // 把当前点击的标题的下标用路由传值传给父级home 然后改变点击导航条滚动到第几屏
		  handleMenuClick(num1) {
		  	this.$router.push({
		  		name: 'home',
		  		query: {
		  			index: num1
		  		}
		  	})
		  },
		  goHome(){
			  this.$router.push({
				  path:'/home'
			  })
		  }
		}
		
	}
</script>

<style lang="less" scoped>
	
// pc端
@media screen and (min-width: 768px){
	.about{
		.phoneHeader{
			display:none;
		}
		.pcHeader {
			display:block;
			width: 100%;
			height: 80px;
			position: fixed;
			top: 0;
			z-index: 999;
			background:#fff;
			.header{
				width:85%;
				height:80px;
				margin:auto;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.content {
					img {
						width: 256px;
						height: 35px;
					}
				}
				.menu {
					display: flex;
					justify-content: space-between;
					font-size: 1.8rem;
					cursor: pointer;
					color: #000;
					.none{
						display: none;
					}
					.menuitem {
						font-size: 1.8rem;
						font-family: PingFangSC-Regular, PingFang SC;
						font-weight: 400;
						margin-right: 50px;
						text-align: center;
			
					}
					.menuitem:last-child {
						margin-right: 0;
					}
				}
			}
		}
		.banner{
			width:100%;
			height:600px;
			position: relative;
			top:80px;
			margin-bottom:144px;
			img{
				width:100%;
				height:100%;
				position: relative;
				top:0;
				z-index: 2;
			}
			.mengban{
				width:100%;
				height:100%;
				position: absolute;
				top:0;left:0;
				background:rgba(0,0,0,.5);
				z-index: 3;
			}
		}
		.introduction{
			width:988px;
			height:432px;
			background:rgba(247,247,247,1);
			margin:auto;
			box-sizing: border-box;
			padding-top:50px;
			position: relative;
			.content{
				width:80%;
				margin:auto;
				h3{
					font-size:3.6rem;
					font-family:PingFangSC-Semibold,PingFang SC;
					font-weight:600;
					color:rgba(51,51,53,1);
					line-height:50px;
					margin-bottom:40px;
				}
				p{
					font-size:1.4rem;
					font-family:PingFangSC-Medium,PingFang SC;
					font-weight:500;
					color:rgba(85,85,80,1);
					line-height:20px;
					margin-bottom: 19px;
				}
				img{
					position: absolute;
					width:200px;
					height:180px;
					bottom:-40px;
					right:-10px;
				}
			}
		}
		.history{
			width:1201px;
			height:407px;
			margin:100px auto;
			h2{
				width:1201px;
				text-align: center;
				font-size:3.6rem;
				font-family:PingFangSC-Semibold,PingFang SC;
				font-weight:600;
				color:rgba(51,51,53,1);
				line-height:50px;
				margin-bottom:30px;
			}
			img{
				width:100%;
				height:100%;
			}
		}
		.ContactUs{
			width:1201px;
			height:286px;
			margin:180px auto;
			display: flex;
			justify-content: space-between;
			align-items: center;
			p{
				font-size:1.8rem;
				font-family:PingFangSC-Regular,PingFang SC;
				font-weight:400;
				color:rgba(85,85,80,1);
				margin:20px 0;
			}
		}
		.footer{
			width:100%;
			height:318px;
			background:rgba(240,240,240,1);
			text-align: center;
			margin-top:50px;
			img{
				margin-top:151px;
				width:181px;
				height: 25px;
			}
			p{
				font-size:1.8rem;
				font-family:PingFangSC-Regular,PingFang SC;
				font-weight:400;
				color:rgba(85,85,80,1);
				line-height:25px;
			}
		}
		
	}
}

@media screen and (max-width: 768px) {
	.about{
		.pcHeader{
			display:none;
		}
		.phoneHeader{
			display:block;
		}
		.banner{
			position: relative;
			width:100%;
			height:209px;
			img{
				width:100%;
				height:100%;
			}
			.mengban{
				position: absolute;
				top:0;
				left:0;
				width:100%;
				height:100%;
				background:rgba(0,0,0,.3);
			}
		}
		.introduction{
			width:100%;
			box-sizing: border-box;
			padding-top:30px;
			margin-bottom:50px; 
			.content{
				width:85%;
				margin:auto;
				box-sizing: border-box;
				padding:15px;
				background:#f7f7f7;
				position: relative;
				h3{
					font-size:19px;    
					color:rgba(51,51,51,1);
					line-height:24px;
					margin-bottom:15px;
				}
				p{
					text-indent: 2rem;
					font-size:12px;
					color:rgba(102,102,102,1);
					line-height:16px;
				}
				img{
					position: absolute;
					bottom:-30px;
					right:5px;
					width:70px;
					height:60px;
				}
			}
		}
		.footer{
			width:100%;
			height:100px;
			background:#f0f0f0;
			text-align: center;
			img{
				width:136px;
				height:18px;
				margin:30px 0 5px 0;
			}
			p{
				font-size:12px;
			}
		}
	}
	
	
}
a{
	color:#000;
}
</style>
