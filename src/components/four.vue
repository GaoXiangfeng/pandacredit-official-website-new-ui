<template>
  <div class="four">
    <div class="content">
      <!-- iview轮播 -->
      <div class="pc">
        <el-carousel indicator-position="outside">
          <el-carousel-item>
            <div class="contentDetails">
              <div class="left">
                <img src="../assets/img/img4/1.png" alt />
              </div>
              <div class="right">
                <p>{{uiDataSource.four.CarouselTextp1}}</p>
                <span>{{uiDataSource.four.CarouselTextSpan1}}</span>
                <div>
                  <img src="../assets/img/img1/3.png" alt />
                  <a  href="https://apps.apple.com/ph/app/id1486755731"  target="_blank"  style="display:inline-block;width:152px;height:45px;" >
                    <img src="../assets/img/img1/4.png" alt />
                  </a>
                </div>
              </div>
            </div>
          </el-carousel-item>
          <el-carousel-item>
            <div class="contentDetails">
              <div class="left">
                <img src="../assets/img/img4/2.png" alt />
              </div>
              <div class="right">
                <p>{{uiDataSource.four.CarouselTextp2}}</p>
                <span>{{uiDataSource.four.CarouselTextSpan2}}</span>
              </div>
            </div>
          </el-carousel-item>
          <el-carousel-item>
            <div class="contentDetails">
              <div class="left">
                <img src="../assets/img/img4/3.png" alt />
              </div>
              <div class="right">
                <p>{{uiDataSource.four.CarouselTextp3}}</p>
                <span>{{uiDataSource.four.CarouselTextSpan3}}</span>
              </div>
            </div>
          </el-carousel-item>
          <el-carousel-item>
            <div class="contentDetails">
              <div class="left">
                <img src="../assets/img/img4/4.png" alt />
              </div>
              <div class="right">
                <p>{{uiDataSource.four.CarouselTextp4}}</p>
                <span>{{uiDataSource.four.CarouselTextSpan4}}</span>
              </div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
      <!-- vant轮播 -->
      <div class="phone">
           <van-swipe class="my-swipe" :autoplay="3000"  indicator-color="white">
              <van-swipe-item>
                <div class="contentDetails">
                  <div class="left">
                    <img src="../assets/img/img4/1.png" alt />
                  </div>
                  <div class="right">
                    <p>{{uiDataSource.four.CarouselTextp1}}</p>
                    <span>{{uiDataSource.four.CarouselTextSpan1}}</span>
                    <div>
                      <img src="../assets/img/img1/3.png" alt />
                      <a  href="https://apps.apple.com/ph/app/id1486755731"  target="_blank"  style="display:inline-block;width:152px;height:45px;">
                        <img src="../assets/img/img1/4.png" alt />
                      </a>
                    </div>
                  </div>
                </div>
              </van-swipe-item>
              <van-swipe-item>
                  <div class="contentDetails">
                    <div class="left">
                      <img src="../assets/img/img4/2.png" alt />
                    </div>
                    <div class="right">
                      <p>{{uiDataSource.four.CarouselTextp2}}</p>
                      <span>{{uiDataSource.four.CarouselTextSpan2}}</span>
                    </div>
                  </div>
              </van-swipe-item>
              <van-swipe-item>
                 <div class="contentDetails">
                    <div class="left">
                      <img src="../assets/img/img4/3.png" alt />
                    </div>
                    <div class="right">
                      <p>{{uiDataSource.four.CarouselTextp3}}</p>
                      <span>{{uiDataSource.four.CarouselTextSpan3}}</span>
                    </div>
                  </div>
              </van-swipe-item>
              <van-swipe-item>
                  <div class="contentDetails">
                    <div class="left">
                      <img src="../assets/img/img4/4.png" alt />
                    </div>
                    <div class="right">
                      <p>{{uiDataSource.four.CarouselTextp4}}</p>
                      <span>{{uiDataSource.four.CarouselTextSpan4}}</span>
                    </div>
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
        four: {}
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
    }
  }
};
</script>

<style lang="less" scoped="">
@media screen and (min-width: 768px) {
  .four {
    width: 100%;
    height: 600px;
    background-image: url("../assets/img/img1/1.png");
    background-size: 100% 100%;
    box-sizing: border-box;
    padding-top: 109px;
    .content {
      width: 70%;
      margin: auto;
      position: relative;
    }
    .phone{
      display:none;
    }
  }
  .content /deep/ .el-carousel {
    height: 450px;
    .el-carousel__container {
      .el-carousel__item {
        .contentDetails {
          display: flex;
          justify-content: space-around;
          .left {
            img {
              width: 204px;
              height: 400px;
              margin-left: 30px;
            }
          }
          .right {
            margin-top: 70px;
            color: #fff;
            font-family: PingFangSC-Medium, PingFang SC;
            width: 50%;
            text-align: left;

            p {
              font-size: 2.8rem;
              font-weight: 500;
              line-height: 40px;
              color: #fff;
            }
            span {
              display: inline-block;
              margin: 22px 0 31px 0;
              font-size: 1.8rem;
              font-weight: 400;
              line-height: 25px;
            }
            img {
              width: 152px;
              height: 45px;
              margin-right: 15px;
            }
          }
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
      width: 14px;
      height: 14px;
      background: #fff;
      border-radius: 50%;
      margin-right: 10px;
      margin-top: -100px;
      position: relative;
      z-index: 999;
    }
  }
}
@media screen and (max-width: 768px){
  .four {
    width: 100%;
    height: 200px;
    background-image: url("../assets/img/img1/1.png");
    background-size: 100% 100%;
    box-sizing: border-box;
    padding-top: 15px;
    .content {
      width: 80%;
      margin: auto;
      position: relative;
      .pc{
        display:none;
      }
    }
    .content /deep/ .my-swipe{
      width:100%;
    }
    .content /deep/ .my-swipe .van-swipe__track .van-swipe-item{ 
       .contentDetails{
            display:flex;
            justify-content: space-between;
            font-family:PingFangSC-Medium,PingFang SC;
            color:rgba(255,255,255,1);
            .left{
              width:30%;
              img{
                width:90px;
                height: 177px;
              }
            }
            .right{
              width:63%;
              p{
                  font-size:14px;
                  font-weight:500;
                  line-height:20px;
                  margin-top:13px;
              }
              span{
                  display:inline-block;
                  width:100%;
                  font-size:12px;
                  font-weight:400;
                  line-height:15px;
                  margin:8px 0;
              }
              div{
                display:flex;
                img{
                    width:55px;
                    height:16px;
                    margin-right:5px;
                  }
              }
            }
        }
     }
    .content /deep/ .my-swipe .van-swipe__indicators{
      bottom:45px;
    }
  }
  
}
</style>
