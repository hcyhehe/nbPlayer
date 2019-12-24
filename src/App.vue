<template>
  <div id="app">
    <!-- <router-view/> -->
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>


<script>
import moment from 'moment'
import { aGet, aPost } from './utils/request.js'
import base from './utils/global.js'

export default {
  name: 'App',
  data(){
    return{

    }
  },
  methods:{
    
  },

  created(){
    
  },

  mounted(){
    
  },

  beforeDestroy(){
    
  },
}
</script>


<style lang="scss">

</style>
