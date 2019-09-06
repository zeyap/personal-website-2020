<template>
  <div id="app">
    
    <div ref="routerview" class="router-wrapper">
      <router-view/>
    </div>
    
  </div>
</template>

<script>
import {addScrollListener, pageShrink, pageExpand, clearRouterviewComponent} from './util.js'

export default {
  name: 'App',
  data(){
    return {
      lastScrollTop: [],
    }
  },
  methods:{
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
  },
  mounted(){
    addScrollListener.bind(this)(this.$refs.routerview,1);
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


</style>
