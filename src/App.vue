<template>
  <div id="app">
    <!-- <div class="page-banner" v-on:mouseover="onMouseoverFab"></div> -->
    <a target="_blank" href="https://github.com/zeyap/zeyap.github.io/raw/dev/src/assets/resume_zeyapeng_dev.pdf"><FAB class="fab" name="paperclip" name_after="arrow-down" style="z-index:4" type="fade-through" border="true" color="#ffa389" v-bind:position="fabPos">
    </FAB></a>
    <div class="page-title" ref="page-title" v-on:mouseover="shownav">{{pageTitle}}</div>

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
import {addScrollListener, pageShrink, pageExpand, clearRouterviewComponent} from './util.js'

export default {
  name: 'App',
  components:{
    TweenWrapper,
    FAB
  },
  data(){
    return {
      colors:['#a2dae8','#ffffff','#ffede8'],//#e3c0c0
      urls:["/resume/","/project/","/about/"],
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
        this.pageTitle='ABOUT';
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
    },
    analytics: function(){
      (function (i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
            (i[r].q = i[r].q || []).push(arguments)
        }, i[r].l = 1 * new Date(); a = s.createElement(o),
        m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
        })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
        ga('create', 'UA-110465258-1', 'auto');
        ga('send', 'pageview');
    },
    shownav: function(){
      pageShrink();
    }
  },
  mounted(){
    this.$refs['page-title'].style.color = '#a2dae8';
    this.$refs['page-title'].style.border = 'solid 1px #a2dae8';
    this.$refs['page-title'].style['box-shadow']='2px 2px #a2dae8';
    addScrollListener.bind(this)(this.$refs.routerview,2);
    // window.document.querySelector('#app').style.background="#a2dae8";
    this.analytics()
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
  /* background: #a2dae8; */

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
  width: 0em;
  background-color: white;
}
.router-wrapper::-webkit-scrollbar-thumb{
  background-color: white;
}

.tweenbuttons{
  
}
@media (max-aspect-ratio: 1/1){
  .fab{
    opacity: 0;
    transition: 0.5s;
  }
}
@media (min-aspect-ratio: 1/1){
  .fab{
    opacity: 1;
    transition: 0.5s;
  }
}

.fab{
  font-size: 0.9em;
}


</style>
