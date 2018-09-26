<template>
  <div id="app">
    <FAB style="z-index:2" type="fade-through" border="true" color="#e26181" v-bind:position="{left:'40px',top:'30px'}">
      <div ><v-icon name="envelope"/> zp82 @ cornell.edu</div>
      <div><v-icon name="link"/> zeyap.xyz</div>
      <div><v-icon name="brands/github"/> github.com/zeyap</div></FAB>
    <div class="page-title">{{pageTitle}}</div>

    <TweenWrapper border="true" radius="20px" v-bind:color="colors" button_number="3" style="z-index:0" v-bind:position="{bottom:'40px'}"
    v-bind:urls="urls" v-bind:on_mouseover_fns="onMouseover">
    </TweenWrapper>

    <div class="router-wrapper">
      <router-view/>
    </div>
    
  </div>
</template>

<script>
import {TweenWrapper,FAB} from '../../vue-material/src/index.js'

import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
export default {
  name: 'App',
  components:{
    TweenWrapper,
    FAB,
    'v-icon':Icon
  },
  data(){
    return {
      colors:['#ffffff','#e26181','#446594'],//#e3c0c0
      urls:["/","/project/","/contact/"],
      pageTitle: 'ZEYA PENG',
      mouseoverQueue: [],
      onMouseover:[(function(){
        this.pageTitle='RESUME';
        this.recoverName();
      }).bind(this),
      (function(){
        this.pageTitle='PROJECT';
        this.recoverName();
      }).bind(this),
      (function(){
        this.pageTitle='CONTACT';
        this.recoverName();
      }).bind(this)],
      recoverName:function(){
        while(this.mouseoverQueue.length>0){
          window.clearTimeout(this.mouseoverQueue.pop());
        }
        
        this.mouseoverQueue.push(window.setTimeout((function(){
          this.pageTitle = 'ZEYA PENG';
        }).bind(this),2000));
      }
    }
  },
  methods:{

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 18px;
  color: #444444;

  /* text-align:justify; */
}

.page-title{
  color: #cccccc;
  z-index: 2;
  position: absolute;
  top: 40px;
  right: 40px;
  font-size: 28px;
  font-weight: bolder;
}

.router-wrapper{
  margin: 120px 0 80px 0;
  position: absolute;
  top: 0px;
  width: calc(100vw);
  height: calc(100% - 200px);
  overflow: auto;
  
}

.router-wrapper::-webkit-scrollbar{
  width: 0.5em;
  background-color: white;
}
.router-wrapper::-webkit-scrollbar-thumb{
  background-color: #cccccc;
}

</style>
