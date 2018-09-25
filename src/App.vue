<template>
  <div id="app">
    <FAB style="z-index:2" type="fade-through" border="true" color="#e26181" v-bind:position="{left:'40px',top:'40px'}"><div>zp82 @ cornell.edu</div>
    <div>Ithaca NY</div></FAB>
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
export default {
  name: 'App',
  components:{
    TweenWrapper,
    FAB
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
  right: 80px;
  font-size: 28px;
}

.router-wrapper{
  margin: 120px 40px 80px 40px;
  position: absolute;
  top: 0px;
  width: calc(100vw - 80px);
  height: calc(100% - 200px);
  overflow: auto;
  /* display: flex;
  flex-flow: row-reverse wrap;
  justify-content: flex-start;
  align-items: flex-start; */
  
}
</style>
