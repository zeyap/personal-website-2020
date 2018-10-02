<template>
  <div id="app">
    <!-- <div class="page-banner" v-on:mouseover="onMouseoverFab"></div> -->
    <a target="_blank" href="https://github.com/zeyap/zeyap.github.io/raw/dev/src/assets/resume_zeyapeng_dev.pdf"><FAB class="fab" name="paperclip" name_after="arrow-down" style="z-index:4" type="fade-through" border="true" color="#ffa389" v-bind:position="fabPos">
    </FAB></a>
    <div class="page-title" ref="page-title">{{pageTitle}}</div>

    <TweenWrapper class="tweenbuttons" ref="tween" border="true" radius="20px" v-bind:color="colors" button_number="3" v-bind:position="{top:'40px',right:'40px'}"
    v-bind:urls="urls" v-bind:on_mouseover_fns="onMouseover">
    </TweenWrapper>

    <div ref="routerview" class="router-wrapper">
      <router-view/>
    </div>
    
  </div>
</template>

<script>
import {TweenWrapper,FAB} from '../../vue-material/src/index.js'
import {addScrollListener, pageShrink, clearRouterviewComponent} from './util.js'
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
      colors:['#ffffff','#ffede8','#a2dae8'],//#e3c0c0
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
      },
      lastScrollTop: [],
      fabPos: {right:'40px',bottom:'10px'}
    }
  },
  methods:{
    onMouseoverFab: function(){
      pageShrink();
    }
  },
  mounted(){
    // addScrollListener.bind(this)(this.$refs.routerview,0);
    this.$refs['page-title'].style.color = '#a2dae8';
    this.$refs['page-title'].style.border = 'solid 1px #a2dae8';
    this.$refs['page-title'].style['box-shadow']='2px 2px #a2dae8';

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 18px;
  color: #353535;
  /* background: #e7f6fa; */

  /* text-align:justify; */
}

.page-banner{
  width: calc(100vw - 200px);
  height: 60px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
}

.page-title{
  
  z-index: 2;
  position: absolute;
  top: 25px;
  right: 160px;
  font-size: 28px;
  background: white;
  padding: 0 0.3em;
  /* font-weight: bolder; */
}

.router-wrapper{
  margin: 0 0 0 0;
  position: absolute;
  top: 0px;
  width: 100vw;
  height: 100vh;
  overflow: auto;
  /* transition: all 0.5s; */
}

.router-wrapper::-webkit-scrollbar{
  width: 0.5em;
  background-color: white;
}
.router-wrapper::-webkit-scrollbar-thumb{
  background-color: #dadada;
}

.tweenbuttons{
  
}
@media (max-width: 870px){
  .fab{
    opacity: 0;
    transition: 0.5s;
  }
}
@media (min-width: 870px){
  .fab{
    opacity: 1;
    transition: 0.5s;
  }
}

.fab{
  font-size: 0.9em;
}


</style>
