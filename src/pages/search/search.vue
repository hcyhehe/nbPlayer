<template>
  <div class="search">
    <div class="s1">
      <van-search
        v-model="keywords"
        placeholder="请输入搜索关键词"
        show-action
        @search="onSearch"
        @cancel="onCancel"
      />
    </div>
    <div class="s2">

    </div>
    <div class="s3">
      <div class="one" v-for="(obj,index) in list" :key="index">
        <div class="o1">{{index+1}}</div> 
        <div class="o2">{{obj.name}}</div> 
        <div class="o3" @click="player(obj.id)"><van-icon name="play-circle-o" size="0.85rem" /></div>
        <div class="o4">{{obj.artists[0].name}}</div>
      </div>
    </div>

    <audio id="audio" :src="href" autoplay="autoplay" loop="loop"></audio>
  </div>
</template>

 
<script>
import moment from 'moment'
import { aGet, aPost } from '../../utils/request.js'
import api from '../../utils/global.js'
import $ from 'jquery'
import { Toast, Search } from 'vant'


export default {
  data(){
    return{
      keywords: '',
      list: [],
      status: false,
      href: '',
    }
  },
  methods: {
    onSearch(){
      let that = this
      if(!this.keywords){
        return Toast('关键词不能为空')
      }
      aGet(api.net163Search, {keywords: this.keywords}).then(res=>{
        console.log('net163Search', res.data)
        if(res.data.status==200){
          that.list = res.data.body.result.songs
        }
      }).catch(err=>{
        console.log(err)
      })
    },
    onCancel(){
      this.keywords = ''
    },
    player(id){
      this.href = 'https://music.163.com/song/media/outer/url?id='+id+'.mp3'
      console.log(this.href)
    },
  },

  created(){
    
  },

  mounted(){
    let that = this;
    
  },

  beforeDestroy(){
    
  },
}
</script>


<style lang="scss">
html,body{
  width: 100%;
  height: 100%;
  background: #868189;
}

.search {
  position: relative;
  .s1{
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    z-index: 10;
  }
  .s2{
    margin-top: 1.45rem;
  }
  .s3{
    width: 90%;
    margin: 0 auto;
    .one{
      display: flex;
      height: 1.2rem;
      line-height: 1.2rem;
      font-size: 0.35rem;
      border-bottom: 1px solid hsla(0,0%,100%,.1);
      color: #fff;
      .o1{
        width: 5%;
      }
      .o2{
        width: 54%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .o3{
        width: 18%;
        text-align: center;
        i{
          margin-top: 0.13rem;
        }
      }
      .o4{
        width: 23%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
}
</style>
