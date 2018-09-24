// eslint-disable-next-line
<template>
  <div id="app">
    <FAB style="z-index:2" type="fade-through" border="true" color="#f197a3" v-bind:position="{left:'30px',top:'30px'}"/>
    <TweenWrapper border="true" radius="20px" v-bind:color="colors" button_number="3" style="z-index:0" v-bind:position="{bottom:'40px'}">
      <router-view/>
    </TweenWrapper>
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
      colors:['#ffffff','#e3c0c0','#446594']
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
}
</style>
