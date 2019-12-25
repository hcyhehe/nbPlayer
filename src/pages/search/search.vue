<template>
  <div class="search">
    <div class="s1">
      <van-search
        v-model="keywords"
        placeholder="请输入歌曲或歌手的关键词"
        show-action
        @search="onSearch"
        @cancel="onCancel"
      />
    </div>

    <div class="s2" v-if="list.length>0">
      <van-tabs v-model="active" color="#aaa" title-active-color="#000" title-inactive-color="#666" @click="onClick">
        <van-tab title="网易云音乐"></van-tab>
        <van-tab title="QQ音乐"></van-tab>
      </van-tabs>
    </div>
    <div class="s2" v-if="list.length==0"></div>

    <div class="s3" v-if="list.length>0">
      <div class="one" v-for="(obj,index) in list" :key="index">
        <div class="o1" v-show="Index!==index">{{index+1}}.</div>
        <img class="o5" v-show="Index===index" src="../../assets/img/wave.gif" />
        <div class="o2">{{obj.name}}</div> 
        <div class="o3" @click="player(obj.id, index)">
          <van-icon v-show="Index!==index" name="play-circle-o" size="0.85rem" />
          <van-icon v-show="Index===index" name="pause-circle-o" size="0.85rem" />
        </div>
        <div class="o4">{{obj.artists[0].name}}</div>
      </div>
    </div>
    <div class="s3" v-if="list.length==0">
      <div class="text">欢迎使用“随搜听”音乐播放器</div>
    </div>

    <audio id="audio" class="s4" :src="href" loop="loop" controls></audio>
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
      audio: '',
      keywords: '',
      list: [],
      list0: [],
      list1: [],
      href: '',
      Index: '',
      active: 0,  //0为网易云，1为QQ
    }
  },
  methods: {
    onSearch(){
      let that = this
      if(!this.keywords){
        return Toast('关键词不能为空')
      }

      //清空当前播放
      that.Index = ''
      that.href = ''
      that.audio.pause()
      that.audio.currentTime = 0

      //获取网易云音乐
      aGet(api.net163Search, {keywords: this.keywords}).then(res=>{
        console.log('net163Search', res.data)
        if(res.data.status==200){
          that.list0 = res.data.body.result.songs
          if(that.active==0){
            that.list = that.list0
          }
        } else {
          Toast('网易云音乐获取失败')
        }
      }).catch(err=>{
        console.log(err)
      })

      //获取QQ音乐
      aGet(api.qqSearch, {key: this.keywords}).then(res=>{
        console.log('qqSearch', res.data)
        if(res.data.status==200){
          that.list1 = res.data.data
          if(that.active==1){
            that.list = that.list1
          }
        } else {
          Toast('QQ音乐获取失败')
        }
      }).catch(err=>{
        console.log(err)
      })
    },

    onClick(e){
      if(e==0) this.list = this.list0
      if(e==1) this.list = this.list1
    },

    onCancel(){
      this.keywords = ''
    },

    player(id, index){
      let that = this
      if(this.Index !== index){
        this.Index = index
        if(this.active == 0){
          this.href = 'https://music.163.com/song/media/outer/url?id='+id+'.mp3'
          console.log(this.href)
        }
        if(this.active == 1){
          aGet(api.qqGetUrls, {id:id}).then(res=>{
            console.log('qqGetUrls', res.data)
            if(res.data.status==200){
              that.href = res.data.data[id]
              console.log(that.href)
            } else {
              Toast('QQ音乐获取失败')
            }
          }).catch(err=>{
            console.log(err)
          })
        }
        setTimeout(()=>{
          that.audio.play()
        }, 100)
      } else {
        this.Index = ''
        this.audio.pause()
      }
    },
  },

  created(){
    
  },

  mounted(){
    this.audio = document.getElementById('audio')
  }
}
</script>


<style lang="scss">
html,body{
  width: 100%;
  height: 100%;
  background: #b2b2b2;
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
    margin-top: 1.31rem;
  }
  .s3{
    width: 92%;
    margin: 0 auto;
    padding-bottom: 1.28rem;
    .text{
      height: 2rem;
      line-height: 2.5rem;
      color: #fff;
      text-align: center;
      font-size: 0.43rem;
    }
    .one{
      display: flex;
      height: 1.2rem;
      line-height: 1.2rem;
      font-size: 0.35rem;
      border-bottom: 1px solid hsla(0,0%,100%,.1);
      color: #fff;
      .o1{
        width: 8%;
        text-align: center;
      }
      .o2{
        width: 55%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .o3{
        width: 15%;
        text-align: center;
        i{
          margin-top: 0.13rem;
        }
      }
      .o4{
        width: 22%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .o5{
        width: 4%;
        height: 0.5rem;
        margin-left: 2%;
        margin-right: 2%;
        margin-top: 0.3rem;
      }
    }
  }
  .s4{
    position: fixed;
    width: 100%;
    height: 1.2rem;
    left: 0;
    bottom: 0;
    z-index: 10;
  }
}
</style>
