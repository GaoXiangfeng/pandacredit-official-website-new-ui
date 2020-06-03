<template>
  <div class="first">
    <div class="content">
      <div class="left">
        <div class="logoImgTop">
          <p>REGISTERED <br/> SUPERVISED BY</p>
          <img src="../assets/img/img1/2.png" alt />
        </div>
        <div class="wenziMiddle">
          <p>Rich and complete financial management services</p>
          <span>Provide customers with safe and convenient financial services Provide efficient and intelligent cooperation mode for enterprises</span>
        </div>
        <div class="logoImgBottom">
          <p>Start Download Now</p>
          <div>
             <img src="../assets/img/img1/3.png" alt />
              <a href="https://apps.apple.com/ph/app/id1486755731" target="_blank" style='display:inline-block;width:152px;height:45px;'>
                <img src="../assets/img/img1/4.png" alt  class='APPImg'/>
              </a>
          </div>
        </div>
      </div>
      <div class="right">
         <img class='pcRightImg' src="../assets/img/img1/6.png" alt />
         <img class='phoneRightImg' src="../assets/img/img1/5.png" alt />     
      </div>
    </div>
  </div>
</template>

<script>
import pcheader from "@/components/header";
import store from "../store/index";
import localStorage from "../services/localStorage.service";
import { mapState } from "vuex";
export default {
  data() {
    return {
      uiDataSource: {
        first: {}
      }
    };
  },
  mounted() {
    this.changeLanguage();
  },
  computed: {
    ...mapState({
      language: state => state.module.language
    })
  },
  watch: {
    language: function() {
      this.changeLanguage();
    },
    menuindex: function() {
      this.changeMenuIndex();
    }
  },
  methods: {
    changeLanguage() {
      this.$i18n.locale = this.language;

      this.uiDataSource = this.$i18n.messages[this.$i18n.locale].message.home;
    },
  },
  components: {
    pcheader
  }
};
</script>

<style lang="less" scoped>
@media screen and (min-width: 768px) {
  .first {
    width: 100%;
    height: 700px;
    background-image: url("../assets/img/img1/1.png");
    background-size: 100% 100%;
    box-sizing: border-box;
    font-family: PingFangSC-Semibold, PingFang SC;
    .content {
      width: 85%;
      margin: auto;
      display: flex;
      justify-content: space-between;
      color: #fff;
      .left {
        margin-top: 160px;
        width: 60%;
        .logoImgTop {
          display: flex;
          align-items: center;
          p {
            font-size: 1.8rem;
            font-weight: 600;
            line-height: 25px;
            margin-right:10px;
          }
          img {
            width: 132px;
            height: 52px;
          }
        }
        .wenziMiddle {
          p {
            font-size: 5.4rem;
            font-weight: 400;
            line-height: 60px;
            margin: 20px 0;
          }
          span {
            display: inline-block;
            width: 60%;
            font-size: 1.8rem;
            font-weight: 400;
            line-height: 28px;
            color: #edeef2;
          }
        }
        .logoImgBottom {
          display: flex;
          margin-top: 44px;
          align-items: center;
          img {
            width: 152px;
            height: 45px;
            margin-left: 12px;
          }
          .APPImg{
            width: 100%;
            height: 45px;
          }
        }
      }
      .right {
        margin-top: 132px;
        text-align: right;
        .phoneRightImg{
          display:none;
        }
        img {
          width: 471px;
          height: 526px;
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .first{
	  width:100%;
	  height:23.6rem;
	  background-image:url("../assets/img/img1/1.png");
	  font-family: PingFangSC-Semibold, PingFang SC;
    color:#fff;
    position: relative;
	  .content{
       width:85%;
       margin:auto;
       display:flex;
       justify-content: space-between;
      .left{
         width:65%;
        .logoImgTop{
          box-sizing: border-box;
          padding-top:5.3rem;
          display:flex;
          p{
            font-size:1.2rem;
            font-weight:400;
            margin-right:0.5rem;
          }
          img{
            width:6.6rem;
            height:2.6rem;
          }
          }
        .wenziMiddle{
          p{
            width:100%;
            font-size:1.9rem;
            font-weight:500;
            line-height:2rem;
            margin:8px 0;
          }
          span{
            display:none;
          }
        }
        .logoImgBottom{
          
          p{
            font-size:1.2rem;
            font-weight:400;
            margin-bottom:0.5rem;
          } 
          div{
            display:flex;
            img{
              width:7.5rem;
              height:2.1rem;
              margin-right:0.5rem;
            }
          }       
        }
      }
      
      .right {
        position: absolute;
        right:1px;
        top:4rem;
        width:36%;
        text-align: center;
        .pcRightImg{
          display:none;
        }
        img {
          width: 9rem;
          height:17.7rem;
        }

	    }
  }
}
}
</style>
