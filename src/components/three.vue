<template>
	<div class="three">
		<div class="content">
				<h3>{{uiDataSource.three.ApplicationProcess}}</h3>
				<div>
					<ul>
						<li>
							<img src="../assets/img/img3/6.png" alt="">
							<p>{{uiDataSource.three.ApplicationProcess}}</p>
						</li>
						<li><img src="../assets/img/img3/14.png" alt=""></li>
						<li>
							<img src="../assets/img/img3/7.png" alt="">
							<p>{{uiDataSource.three.LoanApplication}}</p>
						</li>
						<li><img src="../assets/img/img3/14.png" alt=""></li>
						<li>
							<img src="../assets/img/img3/8.png" alt="">
							<p>{{uiDataSource.three.SubmitInformation}}</p>
						</li>
						<li><img src="../assets/img/img3/14.png" alt=""></li>
						<li>
							<img src="../assets/img/img3/9.png" alt="">
							<p>{{uiDataSource.three.RiskControlModelFiltering}}</p>
						</li>
						<li><img src="../assets/img/img3/14.png" alt=""></li>
						<li>
							<img src="../assets/img/img3/10.png" alt="">
							<p>{{uiDataSource.three.CreditInvestigation}}</p>
						</li>
						<li><img src="../assets/img/img3/14.png" alt=""></li>
						<li>
							<img src="../assets/img/img3/11.png" alt="">
							<p>{{uiDataSource.three.MultiLevelReview}}</p>
						</li>
						<li><img src="../assets/img/img3/14.png" alt=""></li>
						<li>
							<img src="../assets/img/img3/12.png" alt="">
							<p>{{uiDataSource.three.DockingBank}}</p>
						</li>
					</ul>
				</div>
		</div>
	</div>
</template>

<script>
	import store from '../store/index'
	import localStorage from '../services/localStorage.service'
	import { mapState } from 'vuex'
	export default{
		data () {
		  return {
		    uiDataSource: {
				three: {}
		    }
		  }
		},
		mounted() {
		  this.changeLanguage()
		},
		computed:{
		  ...mapState({
		         language: state => state.module.language,
		     })
		},
		watch: {
		  language: function () {
		      this.changeLanguage()
				},
				menuindex: function () {
					  this.changeMenuIndex()
				}
		},
		methods:{
			changeLanguage() {
			  this.$i18n.locale = this.language
			  
			  this.uiDataSource = this.$i18n.messages[this.$i18n.locale].message.home
			},
		}
	}
</script>

<style lang="less" scoped="">
@media screen and (min-width: 768px){
	.three {
		width: 100%;
		height: 500px;
		box-sizing: border-box;
		padding-top:138px;
		.content{
			width:85%;
			margin:auto;
			text-align: center;	
			h3{
				font-size:3.4rem;
				margin-bottom:78px;
			}
			div{
				ul{
					display: flex;
					justify-content: space-around;
					align-items: center;
					li{
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;
						width:60px;
						line-height:62px;
						img{
							width:60px;
							height:62px;
						}
						p{
							width:130px;
							font-size:1.6rem;
							font-family:PingFangSC-Regular,PingFang SC;
							font-weight:400;
							color:#000;
							line-height:50px;
						}
					}
					li:nth-child(2n) img{
						width:57px;
						height:20px;
						margin-top:-50px;
					}
				}
			}
		}
	}
}
@media screen and (max-width: 768px){
	.three{
		width:100%;
		height:185px;
		text-align: center;
		box-sizing: border-box;
		padding-top:10px;
		.content{
			width:95%;
			margin:auto;
			font-family:PingFangSC-Regular,PingFang SC;
			color:rgba(51,51,51,1);
			h3{
				font-size:19px;
				font-weight:400;
				line-height:24px;
				margin-bottom:30px;
			}
			div{
				width:100%;   
				overflow: auto;
				ul{
					width:223%;
					display: flex;
					justify-content: space-between;
					text-align: center;
					li{
						img{
							width:30px;
							height:31px;
						}
						p{
							width:50%;
							font-size:13px;
							font-weight:400;
							line-height:20px;
							margin:auto;
						}
					}
					li:nth-child(2n) img{
						width:28px;
						height:10px;
						margin-top:10px;
					}
				}
			}
			div::-webkit-scrollbar {
				display: none;
			}
		}
	}
}	
</style>
