<template>
  <div class="five">
    <div class="content">
      <h3>{{uiDataSource.five.APPdisplay}}</h3>
      <!-- ivew轮播 -->
      <div class="pc">
         <!-- <el-carousel indicator-position="outside" initial-index="0" interval="3000"> -->
        <el-carousel indicator-position="outside">
          <el-carousel-item>
            <div>
              <img src="../assets/img/img5/1.png" alt />
            </div>
          </el-carousel-item>
          <el-carousel-item>
            <div>
              <img src="../assets/img/img5/2.png" alt />
            </div>
          </el-carousel-item>
          <el-carousel-item>
            <div>
              <img src="../assets/img/img5/3.png" alt />
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
      <!-- vant轮播 -->
      <div class="phone">
        <van-swipe class="my-swipe" :autoplay="3000">
          <van-swipe-item>
              <div>
                <img src="../assets/img/img5/1.png" alt />
              </div>
          </van-swipe-item>
          <van-swipe-item>
              <div>
                <img src="../assets/img/img5/2.png" alt />
              </div>
          </van-swipe-item>
          <van-swipe-item>
              <div>
                <img src="../assets/img/img5/3.png" alt />
              </div>
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
  </div>
</template>

<script>
import store from "../store/index";
import localStorage from "../services/localStorage.service";
import { mapState } from "vuex";
export default {
  data() {
    return {
      uiDataSource: {
        five: {}
      },
      year: "",
      val: 0
    };
  },
  mounted() {
    this.changeLanguage();
    this.nowYear();
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
    // 获取当前的年份
    nowYear() {
      var myDate = new Date();
      var year = myDate.getFullYear();
      return (this.year = year);
      console.log(year);
    }
  }
};
</script>

<style lang="less" scoped="">
@media screen and (min-width: 768px) {
  .five {
    width: 100%;
    height: 773px;
    .content {
      width: 75%;
      text-align: center;
      box-sizing: border-box;
      padding-top: 131px;
      margin: auto;
      .phone{
        display:none;
      }
      h3 {
        font-size: 3.4rem;
        font-family: PingFangSC-Medium, PingFang SC;
        color: #000;
        line-height: 50px;
        margin-bottom: 63px;
      }
    }

    .address {
      margin: 64px 0;

      ul {
        width: 100%;
        height: 111px;
        border-top: 0.5px solid #000;
        border-bottom: 0.5px solid #000;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        li {
          display: flex;
          margin: 0 80px;
          align-items: center;

          img {
            width: 37px;
            height: 37px;
            margin-right: 12px;
          }

          span {
            display: flex;
            width: 50%;
            font-size: 1.8rem;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #000;
            line-height: 25px;
          }
        }

        .lastLi {
          width: 40%;

          span {
            display: inline-block;
            width: 80%;
          }
        }
      }
    }

    .bottom {
      width: 100%;
      margin: auto;

      img {
        width: 160px;
        height: 20px;
        margin: 10px auto;
      }

      span {
        font-size: 1.8rem;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #000;
        line-height: 25px;
      }
    }
  }

  .content /deep/ .el-carousel {
    height: 450px;
    .el-carousel__container {
      .el-carousel__item {
        display: flex;
        justify-content: center;
        img {
          display: inline-block;
          width: 973px;
          // height: 300px;
          max-width: 90%;
          margin-bottom: 50px;
        }
      }
    }
  }
  .content /deep/ .el-carousel__container {
    height: 400px;
  }
  .content /deep/ .carousel__indicators {
    margin-top: 30px;
  }
  .content /deep/ .el-carousel__indicator {
    padding: 0;
    height: 6px;
    .el-carousel__button {
      width: 36px;
      height: 6px;
      background: rgba(65, 155, 252, 1);
      border-radius: 5px;
      margin-right: 5px;
    }
  }
}
@media screen and (max-width: 768px){
  .five{
    width:100%;
    height:294px;
    .content{
      width:90%;
      margin:auto;
      text-align: center;
      box-sizing: border-box;
      padding-top:40px;
      .pc{
        display:none;
      }
      h3{
        font-size:19px;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(51,51,48,1);
        line-height:48px;
        margin-bottom:15px;
      }
    }
    .content /deep/ .my-swipe{
      height:155px;
    }
    .content /deep/ .my-swipe .van-swipe__track .van-swipe-item{
      div{
        img{
          width:100%;
        }
      }
    }
    .content /deep/ .my-swipe .van-swipe__indicators{
       bottom:5px;
       i{
         width:25px;
         height:4px;
         border-radius:0; 
       }
    }
  }
}
</style>
