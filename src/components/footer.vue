<template>
  <div class="footer">
    <div class="content">
      <div class="titleLogo">
        <span>{{uiDataSource.footer.logoImg}}</span>
        <img src="../assets/img/img1/2.png" alt />
        <span>{{uiDataSource.footer.logoImg2}}</span>
        <img src="../assets/img/footer/1.png" alt />
      </div>
      <div class="contentArtical">
        <p>{{uiDataSource.footer.contentTitle}}</p>
        <!-- pc端 -->
        <div class="text">
             1. The Information Technology-based Peer to Peer Lending Service is a civil agreement between Lender and Borrower, so that all risks arising from the agreement are borne entirely by each party.<br /> 
             2. Every Lender is fully responsible for all credit risks of late or default payments. No national entity or authority is responsible for any such risks. <br />
             3. The Operator with the approval of the respective Users (Lenders and/or Borrowers) accesses, acquires, stores, administers and/or uses the Users’ personal data of Users ("Data Utilization") on or inside objects, electronic devices (including smartphones or phones cellular), hardwares, softwares, electronic documents, applications or electronic systems belonging to Users or controlled by the Users, by notifying the purpose, limitations and mechanisms of the Data Utilization to the Users concerned before obtaining such consent.<br />
             4. Lenders who do not have sufficient knowledge and experience on the lending business are advised not to use this service.<br />
             5. Borrowers should carefully consider the loan interest rate along with other costs in accordance with the ability to pay off the loan. <br />
             6. Every fraudulent activity is recorded digitally in cyberspace and may potentially be informed to the public through social media networks.<br /> 
             7. Every User should read and understand this information before making a decision to become a Lender or Borrower.<br />
             8. The Government, in this case the Financial Services Authority, shall not be liable for any breach or non-compliance by the User, either the Lender or the Borrower (either by User's intent or negligence) of the provisions of the laws and regulations or agreements or agreements between the Operator and the Lender and/or Borrower.<br />
             9. Every transaction and lending activity or the implementation of the agreements on lending activity between or involving the Operator, Lender and/or Borrower shall be made through escrow and virtual accounts as required under the Regulation of the Financial Services Authority Number 77 / POJK.01 / 2016 on The Information Technology-based Peer to Peer Lending Service and the violation or non-compliance towards those provisions constitute evidence of a violation of law by the Operator so that the Operator shall bear the indemnity suffered by each User as a direct result of the above breach of the law without prejudice to the right of the User suffering loss according to the Civi lLaw. 
        </div>
        <!-- 移动端 -->
        <div class='phonetext'>
            1. Every Lender is fully responsible for all credit risks of late or default payments. No national entity or authority is responsible for any such risks. <br />
            2. Lenders who do not have sufficient knowledge and experience on the lending business are advised not to use this service. <br />
            3. Borrowers should carefully consider the loan interest rate along with other costs in accordance with the ability to pay off the loan. <br />
            4. The Government, in this case the Financial Services Authority, shall not be liable for any breach or non-compliance by the User, either the Lender or the Borrower (either by Users intent or negligence) of the provisions of the laws and regulations or agreements or agreements between the Operator and the Lender and/or Borrower. <br />
            5. Every transaction and lending activity or the implementation of the agreements on lending activity between or involving the Operator, Lender and/or Borrower shall be made through escrow and virtual accounts as required under the Regulation of the Financial Services Authority Number 77 / POJK.01 / 2016 on The Information Technology-based Peer to Peer Lending Service and the violation or non-compliance towards those provisions constitute evidence of a violation of law by the Operator so that the Operator shall bear the indemnity suffered by each User as a direct result of the above breach of the law without prejudice to the right of the User suffering loss according to the Civi lLaw. <br />
        </div>
      </div>
      <div class="panda">© {{year}} {{uiDataSource.footer.panda}}</div>
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
        footer: {}
      },
      year: ""
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

<style lang="less" scoped>
@media screen and (min-width: 768px) {
  .footer {
    width: 100%;
    height: 606px;
    background-image: url("../assets/img/img1/1.png");
    background-size: 100% 100%;
    box-sizing: border-box;
    padding-top: 40px;
    color: #fff;
    font-family: PingFangSC-Medium, PingFang SC;
    .content {
      width: 80%;
      margin: auto;
      .titleLogo {
        display: flex;
        align-items: center;
        span {
          font-size: 1.8rem;
          font-weight: 500;
          line-height: 25px;
        }
        img {
          width: 156px;
          height: 57px;
          margin: 0 24px;
        }
        img:last-child {
          width: 123px;
          height: 52px;
        }
      }
      .contentArtical {
        margin-top: 20px;
        font-weight: 500;
        line-height: 24px;
        p {
          font-size: 1.6rem;
        }
        div {
          width: 90%;
          font-size: 1.2rem;
        }
        .phonetext{
          display:none;
        }
      }
      .panda {
        font-size: 1.8rem;
        font-weight: 600;
        line-height: 25px;
        text-align: center;
        margin-top: 40px;
      }
    }
  }
}
@media screen and (max-width: 768px){
   .footer{
     width:100%;
     background-image: url("../assets/img/img1/1.png");
     background-size: 100% 100%;
     box-sizing: border-box;
     padding:21px 0;
     .content{
       width:95%;
       margin:auto;
       .titleLogo{
          display:flex;
          align-items: center;
          color:#fff;
          img{
            width: 78px;
            height: 28px;
            margin-right:7px;
          }
          img:last-child{
            width: 66px;
            height: 31px;
            margin-right:0;
          }
          span{
            display:inline-block;
            width:30%;
            font-size:14px;
            font-family:PingFangSC-Medium,PingFang SC;
            font-weight:500;
            line-height:15px;
          }
       }
     }
     .contentArtical{
       p{
          font-size:13px;
          font-family:PingFangSC-Medium,PingFang SC;
          font-weight:500;
          color:rgba(255,255,255,1);
          line-height:28px;
          margin-top:5px;
       }
       .text{
         display:none;
       }
       .phonetext{
          font-size:12px;
          color:rgba(255,255,255,1);
       }
     }
     .panda{
       font-size:14px;
       font-family:PingFangSC-Semibold,PingFang SC;
       font-weight:600;
       color:rgba(255,255,255,1);
       line-height:30px;
       margin-top:5px;
       text-align: center;
     }
   }
}
</style>
