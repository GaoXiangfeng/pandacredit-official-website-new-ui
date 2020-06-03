<template>
  <div class="home">
    <!-- 头部 -->
    <pcheader @changeIndexFn='getChangeNumFn'></pcheader>
    <!-- <router-view></router-view> -->
    <!-- 首页 -->
    <div class="big">
      <div :style="thisStyle" class="box">
        <first ref="firstPage"></first>
        <second ref="secondPage"></second>
        <three ref="threePage"></three>
        <four ref="fourPage"></four>
        <five ref="fivePage"></five>
        <homeFooter></homeFooter>    
      </div>
    </div>
  </div>
</template>

<script>
// 引入头部
import pcheader from "@/components/header";
// 引入组件
import first from "@/components/first";
import second from "@/components/second";
import three from "@/components/three";
import four from "@/components/four";
import five from "@/components/five";
import homeFooter from "@/components/footer";
export default {
  data() {
    return {
      index: 0,
      thisStyle: {
        top: 0,
        scrollTop: 0
      }
    };
  },
  created(){
       // 页面刷新事件
    window.addEventListener("beforeunload", function (e) {
      return  window.scrollTo(0,0)
    });
  },
  mounted() {
    // 把aboutUs company用路由传过来的index接收
    this.index=this.$route.query.index
    var top=0
    if(this.index==0){
      top=0
    }else if(this.index==1){
      top=this.$refs.firstPage.$el.scrollHeight
    }else if(this.index==2){
      top=this.$refs.firstPage.$el.scrollHeight + this.$refs.secondPage.$el.scrollHeight + this.$refs.threePage.$el.scrollHeight
    }  
    window.scrollTo({
          top:top,
          behavior: "smooth"
    })  
   
  },
  
   methods: {
       // header传过来的
       getChangeNumFn(num){
           switch(num){
              case 0:
                  {
                    this.thisStyle.top = 0 ;
                    window.scrollTo({
                        top:0,
                        behavior: "smooth"
                    })
                  }
                  break;
                case 1:
                  {
                    this.thisStyle.top = this.$refs.firstPage.$el.scrollHeight
                    window.scrollTo({
                        top:this.thisStyle.top,
                        behavior: "smooth"
                    })
                  }
                  break;
                case 2:
                  {
                     this.thisStyle.top = this.$refs.firstPage.$el.scrollHeight + this.$refs.secondPage.$el.scrollHeight + this.$refs.threePage.$el.scrollHeight
                     window.scrollTo({
                        top:this.thisStyle.top,
                        behavior: "smooth"
                    })                   
                  }
                  break; 
                    
           }
       },
     
  },
  components: {
    pcheader,
    first,
    second,
    three,
    four,
    five,
    homeFooter
  }
};
</script>

<style lang='less' scoped="">
.home {
  width: 100%;
  height: 100%;
}

.big {
  position: relative;
  width: 100%;
  height: 100%;
}

.box {
  position: absolute;
  width: 100%;
  height: 100%;
  transition: 1s;
}
</style>
