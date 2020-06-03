<template>
  <div class="pcheader">
	<!-- pc端头部 -->
    <div class="header">
      <div class="content" ref="content">
        <img class="imglogo" src="../assets/img/3.png" alt @click="goHome" />
      </div>
      <div class="menu">
        <div class="menuitem" @click="handleMenuClick(0)" :class='{selected:selectedNum == 0}'>{{uiDataSource.Home.Home}}</div>
        <div class="menuitem" @click="handleMenuClick(1)" :class='{selected:selectedNum == 1}'>{{uiDataSource.Home.CoreAdvantage}}</div>
        <div class="menuitem" @click="handleMenuClick(2)" :class='{selected:selectedNum == 2}'>{{uiDataSource.Home.ProductService}}</div>
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
          <div class="menuitem">{{uiDataSource.Home.download}}</div>
        </a>
      </div>
      <!-- 滑到一定的位置出现带背景的nav -->
      <div class="colorBackgroundNav" style="display:none">
		  <div class="backgroundHeader">
			  	<div class="content">
					<img class="imglogo" src="../assets/img/2.png" alt @click="goHome" />
				</div>
				<div class="menu1">
					<div  class="menuitem"	@click="handleMenuClick(0)" >{{uiDataSource.Home.Home}}</div>
					<div  class="menuitem"	@click="handleMenuClick(1)">{{uiDataSource.Home.CoreAdvantage}}</div>
					<div  class="menuitem" @click="handleMenuClick(2)">{{uiDataSource.Home.ProductService}}</div>
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
						<div  class="menuitem">{{uiDataSource.Home.download}}</div>
					</a>
				</div>
		  </div>
      </div>
    </div>
	<!-- 移动端头部 -->
	<div class="phoneHeader">
		<div class="logo">
			<img class='logoImg' src="../assets/img/1.png" alt="">
			<img class='BreadImg' src="../assets/img/4.png" alt="" @click='showPopup()'>
		</div>
		<van-popup v-model="show" position="right"  :style="{ width: '55%',height:'100%' }">
			<div class="nav">
				<img class='navlogo' src="../assets/img/2.png" alt="">
				<ul>
					<li @click='phoneGoDetails(1)'>
						{{uiDataSource.Home.Home}}
						<img src="../assets/img/5.png" alt="">
					</li>
					<li @click='phoneGoDetails(2)'>
						{{uiDataSource.Home.AboutUs}}
						<img src="../assets/img/5.png" alt="">
					</li>
					<li @click='phoneGoDetails(3)'>
						{{uiDataSource.Home.joinUs}}
						<img src="../assets/img/5.png" alt="">
					</li>
					<a href="https://cdn.solusi-ku.com/downloan/Solusiku-1.1.1.apk">
					<li>
                        {{uiDataSource.Home.download}}
						<img src="../assets/img/5.png" alt="">
					</li>
					 </a>
				</ul>
			</div>		
		</van-popup>
		
	</div>
  </div>
</template>

<script>
import store from "../store/index";
import localStorage from "../services/localStorage.service";
import { mapState } from "vuex";
import Promise from "../services/promise.service";
export default {
  data() {
    return {
      uiDataSource: {
        Home: {}
	  },
	  selectedNum:'',
	  show: false
    };
  },
  computed: {
    ...mapState({
      language: state => state.module.language
    })
  },
  watch: {
    language: function() {
      this.changeLanguage();
    }
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
      this.$i18n.locale = this.language;
      this.uiDataSource = this.$i18n.messages[this.$i18n.locale].message.home;
    },
   
    // 把当前点击的标题的下表传给父级home 然后改变点击导航条滚动到第几屏
    handleMenuClick(num) {
	  this.selectNum = num
      this.$router.push({
        name: "home"
      });
      this.$emit("changeIndexFn",num);
    },
    goHome() {
      this.$emit("changeIndexFn");
	},
	/////////////////////////////////////////////////////
	// 移动端跳转页面
	phoneGoDetails(params){
		let param = Number(params);
		switch(param){
			case 1: {
				this.$router.push({  name: "home" });
				break;
			}
			case 2: {
				this.$router.push({  name: "aboutUs" });
				break;
			}
			case 3: {
				this.$router.push({  name: "company" });
				break;
			}
		}
	},
	showPopup(){
		this.show=true
	}
	//////////////////////////////////////////////
  },
  created() {},
  mounted() {
    this.changeLanguage();
    $(window).scroll(function() {
      if ($(this).scrollTop() > 300) {
        // 先让盒子固定定位在顶部然后下拉
        $(".colorBackgroundNav")
          .css({
            position: "fixed",
            top: 0,
            left: 0
          })
          .slideDown();
      } else {
        // 恢复正常流并且瞬间隐藏
        $(".colorBackgroundNav").css({
          position: "",
          display: "none"
        });
      }
    });
  }
};
</script>

<style lang="less" scoped>
// pc端头部
@media screen and (min-width: 768px) {
	.pcheader {
		width: 100%;
		height: 80px;
		position: fixed;
		top: 0;
		z-index: 999;
		    .phoneHeader{
               display:none;
			}
			.header{
				display:block;
				width:85%;
				height: 80px;
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
					align-items: center;
					font-size: 1.8rem;
					cursor: pointer;
					color: #fff;
					.none{
						display: none;
					}
					.menuitem {
						// width: 105px;
						font-size: 1.8rem;
						font-family: PingFangSC-Regular, PingFang SC;
						font-weight: 400;
						color: rgba(255, 255, 255, 1);
						margin-right: 50px;
						text-align: center;
						
					}
					// .menuitem.selected{
					// 	border-bottom: 3px solid #ccc;
					// 	// transition: border 200ms ease-in-out;
					// 	// color: rgba(225,36,82,1)!important;
					// }
					.menuitem:last-child {
						margin-right: 0;
					}

				}
				.colorBackgroundNav{
					width: 100%;
					height: 60px;
					display: flex;
					justify-content: space-between;
					align-items: center;
					position: fixed;
					top: 0;
					z-index: 999;
					background:#fff;
					box-shadow: 5px 0 20px #ccc;
					margin:auto;
					.backgroundHeader{
						width:85%;
						height: 60px;
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
						.menu1 {
							display: flex;
							justify-content: space-between;
							align-items: center;
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
								color: #000;
								margin-right: 50px;
								text-align: center;
							}

							.menuitem:last-child {
								margin-right: 0;
							}

						}
					}
				}
		}
	}
}
// 移动端头部
@media screen and (max-width: 768px) {
	.pcheader {
		width: 100%;
		height: 80px;
		position: absolute;
		top: 0;
		left:0;
		z-index: 999;
		.header{
			display:none;
		}
		.phoneHeader{
			width:100%;
			display:block;
			.logo{
				width:90%;
				margin:auto;
				display: flex;
				justify-content: space-between;
				.logoImg{
					width:136px;
					height:18px;
					margin-top:20px;
				}
				.BreadImg{
					width:24px;
					height:23px;
					margin-top:11px;
				}
			}
			.nav{
				background:#fff;
				text-align:center;
				.navlogo{
					width: 136px;
					height:18px;
					margin-top:29px;
				}
				ul{
					width:100%;
					height:500px;
					background:#F9FAFB;
					margin-top:12px;
					li{
						width:90%;
						margin:auto;
						line-height:53px;
						border-bottom:2px solid #E9E9E9;
						display:flex;
						justify-content: space-between;
						font-size:14px;
						font-family:PingFangSC-Regular,PingFang SC;
						font-weight:400;
						color:rgba(97,100,101,1);
						img{
							width: 7px;
							height:10px;
							margin-top:24px;
						}
					}
				}
			}
		}
	}
}
	
.active{
	color: #000 !important;
}
</style>
