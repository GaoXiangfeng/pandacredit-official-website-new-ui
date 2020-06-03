<template>
  <div class="second">
    <div class="content">
      <h3>{{uiDataSource.CoreAdvantage.CoreAdvantage}}</h3>
      <div class="middle">
        <ul>
          <li>
            <img src="../assets/img/img2/1 (2).png" alt />
            <p>{{uiDataSource.CoreAdvantage.WideRange}}</p>
            <span>{{uiDataSource.CoreAdvantage.WideRangeB}}</span>
          </li>
          <li>
            <img src="../assets/img/img2/2 (2).png" alt />
            <p>{{uiDataSource.CoreAdvantage.Flexible}}</p>
            <span>{{uiDataSource.CoreAdvantage.FlexibleB}}</span>
          </li>
          <li>
            <img src="../assets/img/img2/3 (2).png" alt />
            <p>{{uiDataSource.CoreAdvantage.High}}</p>
            <span>{{uiDataSource.CoreAdvantage.HighB}}</span>
          </li>
          <li>
            <img src="../assets/img/img2/4 (2).png" alt />
            <p>{{uiDataSource.CoreAdvantage.Safety}}</p>
            <span>{{uiDataSource.CoreAdvantage.SafetyB}}</span>
          </li>
          <li>
            <img src="../assets/img/img2/5 (2).png" alt />
            <p>{{uiDataSource.CoreAdvantage.Low}}</p>
            <span>{{uiDataSource.CoreAdvantage.LowB}}</span>
          </li>
        </ul>
      </div>
      <ol>
        <li>
          <div>
            <h4>{{uiDataSource.CoreAdvantage.Risk}}</h4>
            <span></span>
            <p>{{uiDataSource.CoreAdvantage.RiskB}}</p>
          </div>
        </li>
        <li>
          <div>
            <h4>{{uiDataSource.CoreAdvantage.MultiLevel}}</h4>
            <span></span>
            <p>{{uiDataSource.CoreAdvantage.MultiLevelB}}</p>
          </div>
        </li>
        <li>
          <div>
            <h4>{{uiDataSource.CoreAdvantage.CuttingEdge}}</h4>
            <span></span>
            <p>{{uiDataSource.CoreAdvantage.CuttingEdgeB}}</p>
          </div>
        </li>
      </ol>
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
        CoreAdvantage: {}
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

<style lang='less' scoped="">
@media screen and (min-width: 768px) {
  .second {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
	height: 770px;
	box-sizing: border-box;
	padding-top:130px;
    .content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
	  width: 85%;
	  text-align: center;
      h3 {
        font-size: 3.4rem;
        font-family: PingFangSC-Medium, PingFang SC;
        color: rgba(51, 51, 51, 1);
        line-height: 50px;
        margin: 0 0 78px 0;
      }
      .middle {
        ul {
          width: 100%;
          display: flex;
          justify-content: space-between;
          margin-bottom: 105px;
          li {
            width: 15%;
            img {
              width: 50px;
              height: 50px;
            }
            p {
              font-size: 1.8rem;
              font-family: PingFangSC-Regular, PingFang SC;
              color: rgba(51, 51, 51, 1);
              margin: 6px 0 13px 0;
            }
            span {
              display: inline-block;
              font-size: 1.4rem;
              font-family: PingFangSC-Regular, PingFang SC;
              color: rgba(102, 102, 102, 1);
            }
          }
        }
      }

      ol {
        width: 100%;
        display: flex;
        justify-content: space-between;
        text-align: left;
        li {
          width: 28%;
          background: #f7f7f7;
          border-radius: 8px;
          div {
            width: 80%;
            margin: auto;
            h4 {
              margin-top: 35px;
              font-size: 1.8rem;
              font-family: PingFangSC-Medium, PingFang SC;
              color: rgba(51, 51, 51, 1);
              line-height: 25px;
            }
            span {
              display: inline-block;
              width: 35px;
              height: 4px;
              background: rgba(65, 155, 252, 1);
              border-radius: 2px;
            }
            p {
              font-size: 1.4rem;
              font-family: PingFangSC-Regular, PingFang SC;
              color: rgba(102, 102, 102, 1);
              line-height: 20px;
              margin: 15px 0 35px 0;
            }
          }
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .second {
    width: 100%;
    height: 22rem;
    box-sizing:border-box;
    padding-top:3.5rem;
    .content {
      width: 95%;
      margin: auto;
      font-family: PingFangSC-Regular, PingFang SC;
      color:rgba(51,51,51,1);
      h3 {
        font-size: 1.9rem;
        font-weight: 400;
        line-height: 2.4rem;
        text-align: center;
      }
      .middle {
        width:100%;   
        overflow: auto;
        ul {
          width: 200%;
          margin: 2rem auto;
          display: flex;
          justify-content: space-between;
          text-align: center;
          li {
            width: 20%;
            img {
              width: 3.3rem;
              height: 3.3rem;
			}
			p{
				font-size:1.4rem;
				font-weight:400;
				line-height:2rem;
				margin-bottom:0.3rem;
			}
			span{
				display:inline-block;
				width:90%;
				font-size:1.2rem;
				font-weight:400;
				color:rgba(102,102,102,1);
				line-height:1.4rem;
			}
          }
        }
      }
    }
    .middle::-webkit-scrollbar {
      display: none;
	}
	ol{
		display:none;
	}
  }
}
</style>
