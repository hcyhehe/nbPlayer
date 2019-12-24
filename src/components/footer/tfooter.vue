<template>
  <div class="tFooter">
    <nav class="mui-bar mui-bar-tab">
      <a class="mui-tab-item" :class="{'mui-active':bmTab==1}" @click="active(1)">
        <img class="ft-icon" v-if="bmTab!=1" src="../../assets/img/home.png">
        <img class="ft-icon" v-if="bmTab==1" src="../../assets/img/home_active.png">
        <span class="mui-tab-label">首页</span>
      </a>
      <a class="mui-tab-item" :class="{'mui-active':bmTab==2}" @click="active(2)">
        <img class="ft-icon" v-if="bmTab!=2" src="../../assets/img/person.png">
        <img class="ft-icon" v-if="bmTab==2" src="../../assets/img/person_active.png">
        <span class="mui-tab-label">个人中心</span>
      </a>
    </nav>

    <!-- <mt-tabbar v-model="selected">
      <mt-tab-item id="首页">
        <img slot="icon" v-if="selected!='首页'" src="../../assets/img/home.png">
        <img slot="icon" v-if="selected=='首页'" src="../../assets/img/home_active.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="个人中心">
        <img slot="icon" v-if="selected!='个人中心'" src="../../assets/img/person.png">
        <img slot="icon" v-if="selected=='个人中心'" src="../../assets/img/person_active.png">
        个人中心
      </mt-tab-item>
    </mt-tabbar> -->

  </div>
</template>


<script>
export default {
  name: 'tFooter',
  computed: {
    bmTab(){
      return this.$store.state.bmTab;
    }
  },
  data(){
    return{
      //selected: '首页',
    }
  },
  watch:{
    // selected(){
    //   if(this.selected == '首页'){
    //     this.$router.push({path:'/'});
    //   } else {
    //     this.$router.push({path:'/person'});
    //   }
    // },
  },
  methods: {
    active(n){
      //console.log(n);
      this.$store.state.bmTab = n;
      if(n==1) this.$router.push({path:'/home'});
      if(n==2) this.$router.push({path:'/person'});
    }
  },
  created(){
    
  },
}
</script>


<style lang="scss">
.tFooter{
  position: fixed;
  bottom: 0;
  margin-top: 0.3rem;
  border-top: 1px solid #f5f5f5;
  z-index: 10;
  .mui-bar{
    background: #fff;
    box-shadow: none;
    height: 1.45rem;
    font-size: 0.3rem;
    padding-top: 0.15rem;
  }
  .mui-active{
    color: #100964 !important;
  }
}

.ft-icon{
  margin: 0 auto;
  width: 0.8rem !important;
}

// .tFooter{
//   .mint-tab-item-icon{
//     height: 1.1rem;
//     width: 1.1rem;
//   }
//   .mint-tab-item-label{
//     color: #999;
//     font-size: 0.31rem;
//   }
//   .is-selected{
//     .mint-tab-item-label{
//       color: #100964 !important;
//     }
//   }
//   .mint-tabbar > .mint-tab-item.is-selected{
//     background: #fff;
//   }
//   .mint-tabbar{
//     background: #fff;
//   }
// }
</style>
