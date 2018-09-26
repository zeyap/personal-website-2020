<template>
  <div id="app">
    <div class="page-banner" v-on:mouseover="onMouseoverFab"></div>
    <FAB style="z-index:4" type="fade-through" border="true" color="#e26181" v-bind:position="{left:'40px',top:'15px'}">
      <div><v-icon name="envelope"/> zp82 @ cornell.edu</div>
      <div><span><v-icon name="brands/github"/> <a style="color:#e26181" href="github.com/zeyap">github.com/zeyap</a></span></div>
      </FAB>
    <div class="page-title">{{pageTitle}}</div>

    <TweenWrapper border="true" radius="20px" v-bind:color="colors" button_number="3" style="z-index:0" v-bind:position="{bottom:'30px'}"
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
      lastScrollTop: []
    }
  },
  methods:{
    onMouseoverFab: function(){
      console.log('1')
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
  width: 100%;
  height: 80px;
  position: absolute;
  top: 0;
  z-index: 3;
}

.page-title{
  color: #cccccc;
  z-index: 2;
  position: absolute;
  top: 40px;
  right: 40px;
  font-size: 28px;
  font-weight: bolder;
  transition: all 0.5s;
}

.router-wrapper{
  margin: 80px 0 50px 0;
  position: absolute;
  top: 0px;
  width: calc(100vw);
  height: calc(100vh - 130px);
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

</style>
