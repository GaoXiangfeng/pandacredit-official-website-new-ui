<template>
  <!-- Join Us -->
  <div class="company">
    <!-- 头部 -->
    <pcheader @changeIndexFn="getChangeNumFn"></pcheader>
    <div class="content">
      <div class="banner">
        <p>
          JOIN US
          <br />CREATE THE
          <br />FUTURE
        </p>
      </div>
      <div class="main">
        <div class="topText">
          <div class="title">Join PandaCredit, Realize The Dreams</div>
          <p>Talent is the driving force for the sustainable development of PandaCredit.</p>
          <p>PandaCredit advocates credit-based ethics, simple interpersonal relationships, and a happy working atmosphere, that encourages employees to stay motivated and grow with the company.</p>
          <p>We have gathered talents from many financial institutions, professional firms and industries at home and abroad, and formed a team of young and energetic professional managers.</p>
          <p>We are a team with ideals, feelings and innovation.</p>
        </div>
        <div class="middleImg">
          <ul>
            <li>
              <img src="../../assets/img/companyimg/2.png" alt />
              <img src="../../assets/img/companyimg/3.png" alt />
              <img src="../../assets/img/companyimg/4.png" alt />
            </li>
            <li>
              <img src="../../assets/img/companyimg/5.png" alt />
              <img src="../../assets/img/companyimg/6.png" alt />
              <img src="../../assets/img/companyimg/7.png" alt />
            </li>
          </ul>
        </div>
        <div class="bottomText">
          <span>However, the current achievements are not enough. PandaCredit needs more work and will continue to forge ahead..</span>
          <p>If you are an innovative talent who has feelings and strength, passion and responsibility, and is determined to develop the Internet finance, please join us!</p>
        </div>
      </div>
      <!-- 加入我们 -->
      <div class="introduction">
        <div class="title">Come On, We'll Wait For You!</div>
        <Collapse v-model="value1">
          <Panel name="1">
            Web Developer
            <span>
              <img src="../../assets/img/companyimg/8.png" alt class="addressImg" />
              Beijing
            </span>
            <div slot="content">
              <p class="responsibilities">Responsibilities:</p>
              <span>1. Mainly responsible for the realization of the front-end page, and completing the display effect and interaction function of the front-end according to the product requirements.</span>
              <span>2. Cooperated with back-end engineers to complete the project development, and maintained good compatibility of the code in various browsers.</span>
              <span>3. Solve difficult problems and performance optimization problems in product development.Responsibilities.</span>
              <p class="requirements">Requirements:</p>
              <span>1. 3 year or above web front-end development experience.</span>
              <span>2. Proficient in JavaScript front-end development, familiar with HTML4/HTML5, CSS2/CSS3, ES5/ES6 and other front-end development technologies.</span>
              <span>3. Familiar with common front-end UI framework, node. js technology and ecology, skilled in NPM /webpack/gulp and other tool chains.</span>
              <span>4. Experience in mobile terminal development is preferred.</span>
              <span>5. Excellent ability to work independently and as a team player, good communication skills.</span>
            </div>
          </Panel>
        </Collapse>
        <Collapse v-model="value2">
          <Panel name="1">
            JAVA Developmental Engineer
            <span>
              <img src="../../assets/img/companyimg/8.png" alt class="addressImg" />
              Beijing
            </span>
            <div slot="content">
              <p class="responsibilities">Responsibilities:</p>
              <span>1. Responsible for the detailed design and development of software products and projects.</span>
              <span>2. Completed the preparation and implementation of software test plans and use cases, and submitted test reports.</span>
              <span>3. Complete software version assembly and configuration management.</span>
              <span>4. Coordinate and solve technical problems in technical projects of the department, ensure project quality, and ensure the timely completion of development projects.</span>
              <p class="requirements">Requirements:</p>
              <span>1. Bachelor degree or above in computer science.Excellent undergraduate students, master students preferred.</span>
              <span>2. Experience in Java development is preferred.</span>
              <span>3. Familiar with software development and testing process, capable of independently developing and debugging programs.</span>
              <span>4. Master SQL usage, experience in oracle/mysql/sybase database programming is preferred.</span>
              <span>5. Financial and payment related systems and knowledge background are preferred.</span>
              <span>6. Innovative, with strong understanding, communication skills and sense of responsibility.</span>
            </div>
          </Panel>
        </Collapse>
        <Collapse v-model="value3">
          <Panel name="1">
            CPDA
            <span>
              <img src="../../assets/img/companyimg/8.png" alt class="addressImg" />
              Beijing
            </span>
            <div slot="content">
              <p class="responsibilities">Responsibilities:</p>
              <span>1. Responsible for the construction of data warehouse model of big data platform and data asset management.</span>
              <span>2. Responsible for the data analysis model construction of the big data platform, and supporting the application products such as risk control, products, network and direct marketing.</span>
              <span>3. Participate in data governance, build a data platform with high data quality, good stability and internal sharing and integration of data, and make data standards more standardized and data acquisition more efficient.</span>
              <p class="requirements">Requirements:</p>
              <span>1. Bachelor degree or above, major in computer science or related, at least 3 years of experience in financial data industry.</span>
              <span>2. Familiar with data technology and big data development tools; at least 3 years' experience in data warehouse construction; practical experience in data modeling, data development, data asset management, data analysis and other big data fields.</span>
              <span>3. Able to extract requirements for data and technology based on business problems and planning, and make forward-looking planning and design.</span>
              <span>4. Proactive, good at communication, excellent teamwork and pressure tolerance, strong sense of responsibility and enterprising spirit.</span>
            </div>
          </Panel>
        </Collapse>
        <Collapse v-model="value4">
          <Panel name="1">
            Senior Product Manager
            <span class="adress">
              <img src="../../assets/img/companyimg/8.png" alt class="addressImg" />
              Beijing
            </span>
            <div slot="content">
              <p class="responsibilities">Responsibilities:</p>
              <span>1. Responsible for the overall planning and arrangement of the business line, output the roadmap, complete the overall product document, and achieve the company's OKR target for the business line.</span>
              <span>2. Cooperated with the business team to export performance solutions to customers, received customers' business demands in real time, and cooperated with the business team to achieve the company's annual business goals.</span>
              <span>3. Led the product team to cooperate with the R&D team to promote the project development progress until the system was put online.</span>
              <span>4. Promote the overall capability of the product team, implement the product manager competency model according to the arrangement of the product management department, and build an excellent product team.Ii.</span>
              <p class="requirements">Requirements:</p>
              <span>1. At least 5 years working experience as product manager or industrial scheme manager in payment industry application layer, or at least 3 years in charge of payment scheme connection in the original company.</span>
              <span>2. With strong product planning ability, I can make product planning according to the characteristics and deficiencies of my products to realize the value of my products.</span>
              <span>3. Strong product penetration ability and inter-departmental coordination ability, responsible for the quality of the products I am responsible for.Provides clear cross-product functional requirements and ensures timely completion through project management.</span>
              <span>4. Able to work under great pressure and capable of team management.</span>
            </div>
          </Panel>
        </Collapse>
        <Collapse v-model="value5">
          <Panel name="1">
            Audit manager
            <span>
              <img src="../../assets/img/companyimg/8.png" alt class="addressImg" />
              Djakarta
            </span>
            <div slot="content">
              <p class="responsibilities">Responsibilities:</p>
              <span>1. Contact, evaluate, screen and eliminate users.</span>
              <span>2. Completed the monthly audit target.</span>
              <span>3. Complete other tasks assigned by leaders.</span>
              <span>4. Adapt to short-term business trips.</span>
              <p class="requirements">Requirements:</p>
              <span>1. More than two years of experience in government audit, familiar with the loan industry, excellent channel development and market development ability.</span>
              <span>2. Strong sense of enterprise and responsibility, good interpersonal communication, social activity ability and public relations negotiation ability.</span>
              <span>3. Passionate, persistent and dedicated to work, with clear and active thinking.</span>
              <span>4. better conversation, good image, good temperament.</span>
              <span>5. Good team spirit, good coordination, communication and overall grasp of the ability.</span>
              <span>6. sharp thinking, highly innovative spirit, strong adaptability to the environment, strong ability to resist pressure.</span>
            </div>
          </Panel>
        </Collapse>
        <Collapse v-model="value6">
          <Panel name="1">
            HR Specialist
            <span>
              <img src="../../assets/img/companyimg/8.png" alt class="addressImg" />
              India
            </span>
            <div slot="content">
              <p class="responsibilities">Responsibilities:</p>
              <span>1. Select high-quality talents for the company: responsible for answering recruitment calls, screening resumes and interviewing.</span>
              <span>2. Assisting the work of the directly affiliated leadership management department.</span>
              <span>3. Supervise and assist department employees to complete related work matters.</span>
              <span>4. Responsible for the use of copying, fax and printing equipment.</span>
              <span>5. Responsible for sorting out, classifying and keeping common forms of the company and updating them according to the actual situation.</span>
              <span>6. Make good preparations before the meeting, arrange meeting minutes and contents after the meeting</span>
              <span>7. Responsible for material collection and archive management.</span>
              <span>8. Assisted the superior to complete the administrative affairs of the company and the daily affairs of the department.</span>
            </div>
          </Panel>
        </Collapse>
      </div>
      <homeFooter></homeFooter>
    </div>
  </div>
</template>

<script>
import store from "../../store/index";
import localStorage from "../../services/localStorage.service";
import { mapState } from "vuex";
import Promise from "../../services/promise.service";
import pcheader from "@/components/header";
import homeFooter from "@/components/footer";
export default {
  data() {
    return {
      uiDataSource: {
        Home: {}
      },
      value1: "",
      value2: "",
      value3: "",
      value4: "",
      value5: "",
      value6: ""
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
    changeLanguage() {
      this.$i18n.locale = this.language;
      this.uiDataSource = this.$i18n.messages[this.$i18n.locale].message.home;
    },
    getChangeNumFn(num) {
      this.$router.push({
        path: "/home",
        query: {
          index: num
        }
      });
    }
  },
  created() {},
  mounted() {},
  components: {
    pcheader,
    homeFooter
  }
};
</script>

<style lang="less" scoped>
@media screen and (min-width: 768px) {
  .company {
    width: 100%;
    font-family: PingFangSC-Semibold, PingFang SC;
    .content {
      width: 100%;
      height: 736px;
      margin: auto;
      background-image: url("../../assets/img/companyimg/1.png");
      background-size: 100% 100%;
      .banner {
        width:100%;
        height:100%;
        display: block;
        box-sizing: border-box;
        padding-top: 240px;
        p {
          font-size: 6rem;
          width: 50%;
          font-weight: 600;
          color: rgba(255, 255, 255, 1);
          line-height: 80px;
          margin-left: 228px;
        }
      }

      .main {
        width: 100%;
        margin: auto;
        color: rgba(51, 51, 51, 1);
        font-family: PingFangSC-Regular, PingFang SC;
        box-sizing: border-box;
        padding-top:40px;
        .topText {
          width: 70%;
          margin: auto;
          .title {
            font-size: 3.2rem;
            font-weight: 400;
            line-height: 45px;
            text-align: center;
            margin-bottom: 78px;
          }
          p {
            font-size: 1.8rem;
            font-weight: 400;
            line-height: 25px;
            margin-bottom: 28px;
          }
        }
        .middleImg {
          width: 80%;
          margin: 78px auto;
          ul {
            li {
              display: flex;
              justify-content: space-between;
              margin-bottom: 52px;
              img {
                width: 370px;
                height: 277px;
              }
            }
          }
        }
        .bottomText {
          width: 70%;
          margin: auto;
          p {
            width: 80%;
            margin: 20px 0 78px 0;
            font-size: 1.8rem;
            font-weight: 400;
            color: rgba(51, 51, 48, 1);
            line-height: 25px;
          }
          span {
            font-size: 1.8rem;
            font-weight: 400;
            color: rgba(51, 51, 48, 1);
            line-height: 25px;
          }
        }
      }
      .introduction {
        width: 80%;
        margin: auto;
        text-align: center;
        .title {
          font-size: 3.2rem;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: rgba(51, 51, 48, 1);
          line-height: 45px;
          margin-bottom: 40px;
        }
        .responsibilities {
          color: #333;
          margin-bottom: 20px;
        }
        .requirements {
          margin: 25px 0 20px 0;
          color: #333;
        }
      }
    }
  }
  .content /deep/ .ivu-collapse {
    padding: 5px 15px;
    background: #fff;
    border-radius: 10px;
    margin-bottom: 20px;
    font-size: 2rem;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    line-height: 30px;
    .ivu-collapse-item {
      text-align: left;
      .ivu-collapse-header {
        color: rgba(0, 0, 0, 1);
        height: 70px;
        line-height: 70px;
      }
      .ivu-collapse-header > span {
        float: right;
        margin-right: 10px;
        font-size: 1.8rem;
      }
      .ivu-collapse-header > i {
        float: right;
        line-height: 70px;
        color: #419bfc;
      }
      .addressImg {
        width: 23px;
        height: 30px;
        vertical-align: middle;
      }
    }
    .ivu-collapse-content-box {
      text-align: left;
      p {
        font-size: 1.8rem;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        line-height: 25px;
        margin-bottom: 8px;
      }
      span {
        display: block;
        width: 80%;
        font-size: 1.6rem;
        color: #666;
        font-family: PingFangSC-Medium, PingFang SC;
        line-height: 25px;
      }
    }
  }
  .content /deep/ .ivu-collapse:last-child {
    margin-bottom: 130px;
  }
}
@media screen and (max-width: 768px) {
  .company {
    width: 100%;
    font-family: PingFangSC-Semibold, PingFang SC;
    .content {
      width: 100%;
      height: 209px;
      margin: auto;
      background-image: url("../../assets/img/companyimg/1.png");
      background-size: 100% 100%;
      .banner{
          width:100%;
          height:100%;
          box-sizing: border-box;
          padding-top:68px;
          p{
            font-size:24px;
            font-family:PingFangSC-Semibold,PingFang SC;
            font-weight:600;
            color:rgba(255,255,255,1);
            line-height:29px;
            margin-left:37px;
          }
      }
    }
    .main{
      width:85%;
      margin:auto;
      box-sizing: border-box;
      padding-top:40px;
      text-align: center;
      .topText{
         font-family:PingFangSC-Regular,PingFang SC;
         font-weight:400;
        .title{
            font-size:19px;    
            color:rgba(51,51,51,1);
            line-height:24px;
            margin-bottom:20px;
        }
        p{
          font-size:12px;
          color:rgba(102,102,102,1);
          line-height:16px;
        }
       
      }
      .topText:first-child p{
          margin-bottom:15px;
      }
      .middleImg{
        width:80%;
        margin: auto;
        ul{
          width:100%;
          display:flex;
          justify-content: space-around;
          li{
            img{
              width:155px;
              height:128px;
              margin-right:5px;
            }
          }
        }
      }
      .bottomText{
        width:90%;
        margin:auto;
        font-family:PingFangSC-Regular,PingFang SC;
        color:rgba(51,51,48,1);
        font-size:12px;
        font-weight:400;
        line-height:16px;
        text-align: center;
        span{
          display: inline-block;
          margin:20px 0;
        }
      }    
    }
    .introduction{
      width:95%;
      margin:auto;
      text-align: center;
      box-sizing: border-box;
      padding:30px 0;
      .title{
        font-size:19px;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(51,51,48,1);
        line-height:48px;
        margin-bottom:20px;
      }
      .responsibilities {
        color: #333;
        margin-bottom: 20px;
      }
      .requirements {
        margin: 25px 0 20px 0;
        color: #333;
      }
    }
    .content /deep/ .ivu-collapse {
      padding: 3px;
      background: #fff;
      border-radius: 8px;
      margin-bottom: 10px;
      font-size: 1.3rem;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      line-height: 30px;
      .ivu-collapse-item {
        text-align: left;
        .ivu-collapse-header {
          color: rgba(0, 0, 0, 1);
          height: 40px;
          line-height: 40px;
        }
        .ivu-collapse-header > span {
          float: right;
          margin-right: 2px;
          font-size: 1.2rem;
          color:#666;
        }
        .ivu-collapse-header > i {
          float: right;
          line-height:42px;
          color: #419bfc;
        }
        .addressImg {
          width: 12px;
          height: 15px;
          vertical-align: middle;
        }
    }
    .ivu-collapse-content-box {
      text-align: left;
      p {
        font-size: 1.3rem;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        line-height: 25px;
        margin-bottom: 8px;
      }
      span {
        display: block;
        width: 95%;
        font-size: 1.2rem;
        color: #666;
        font-family: PingFangSC-Medium, PingFang SC;
        line-height: 18px;
      }
    }
  }
  }
}
</style>
