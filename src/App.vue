<template>
  <div id="app">
    <a target="_blank" href="https://zeyap.github.io/static/resume_zeyapeng_dev.pdf"><FAB class="fab" name="paperclip" name_after="arrow-down" style="z-index:4" type="fade-through" border="true" color="#904e95" v-bind:position="fabPos">
    </FAB></a>
    
    <div class="page-title" ref="page-title" v-on:mouseover="shownav">
      <div>
        <span class="page-title-name">{{pageTitle}}</span>
      </div>
      <div>
        <span class="page-title-section" style="color: #e96443" id="button-me">ME</span>
        <span class="page-title-section" id="button-projects">PROJECTS</span>
      </div>
    </div>
    <div ref="routerview" class="router-wrapper">
      <router-view/>
    </div>
    
  </div>
</template>

<script>
import {FAB} from '../../vue-material/src/index.js'
import {addScrollListener, pageShrink, pageExpand, clearRouterviewComponent} from './util.js'

export default {
  name: 'App',
  components:{
    FAB
  },
  data(){
    return {
      urls:["/project/"],
      pageTitle: 'ZEYA PENG',
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
    addScrollListener.bind(this)(this.$refs.routerview,2);
    // window.document.querySelector('#app').style.background="#e96443";
    this.analytics()
  }
}
</script>

<style>
body{
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
  color: #797979;
}

.page-title{
  padding: 15px 40px;
  z-index: 2;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  background: #f8f8f8;
}

.page-title-name{
  font-size: 1.2em; padding: 0 0.3em; background: white; color:#e96443; border: solid 1px #e96443; border-radius: 5px; box-shadow: 2px 2px #e96443
}

.page-title-section{
  letter-spacing: 2px;
  margin-left: 10px;
  cursor: pointer;
}

.router-wrapper{
  margin: 0 0 0 0;
  width: 100vw;
  height: calc(100vh - 52px);
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
