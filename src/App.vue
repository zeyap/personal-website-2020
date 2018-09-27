<template>
  <div id="app">
    <div class="page-banner" v-on:mouseover="onMouseoverFab"></div>
    <FAB class="fab" name="info" style="z-index:4" type="fade-through" border="true" color="#e26181" v-bind:position="fabPos">
      <div><v-icon name="envelope"/> zp82 @ cornell.edu </div>
      <div><span><v-icon name="brands/github"/> <a style="color:#e26181" href="github.com/zeyap">github.com/zeyap</a></span></div>
      <div style="height: 0.6em">&nbsp</div>
    </FAB>
    <div class="page-title">{{pageTitle}}</div>

    <TweenWrapper class="tweenbuttons" border="true" radius="20px" v-bind:color="colors" button_number="3" style="z-index:0" v-bind:position="{top:'40px',right:'40px'}"
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
      },
      lastScrollTop: [],
      fabPos: {left:'40px',top:'10px'}
    }
  },
  methods:{
    onMouseoverFab: function(){
      pageShrink();
    }
  },
  mounted(){
    // addScrollListener.bind(this)(this.$refs.routerview,0);
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

.page-banner{
  width: calc(100vw - 200px);
  height: 60px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
}

.page-title{
  color: #cccccc;
  z-index: 2;
  position: absolute;
  top: 25px;
  right: 160px;
  font-size: 28px;
  font-weight: bolder;
  transition: all 0.5s;
}

.router-wrapper{
  margin: 60px 0 0 0;
  position: absolute;
  top: 0px;
  width: calc(100vw);
  height: calc(100vh - 60px);
  overflow: auto;
  
  transition: all 0.5s;
}

.router-wrapper::-webkit-scrollbar{
  width: 0.5em;
  background-color: white;
}
.router-wrapper::-webkit-scrollbar-thumb{
  background-color: #cccccc;
}

.tweenbuttons{
  transition: all 0.2s;
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
