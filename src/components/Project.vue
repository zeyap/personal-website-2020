// eslint-disable-next-line
<template>
<div>
    <div class="page-title" ref="page-title">
      <div>
        <span class="page-title-name">{{pageTitle}}</span>
      </div>
      <div>
        
      </div>
    </div>
    <img src="https://github.com/zeyap/zeyap.github.io/raw/dev/src/assets/images/cover-pokemon.png"/>
    <div class="inner-wrapper">
        <h1>Hello</h1>
        <p>HHHh</p>
    </div>
</div>
</template>

<script>
import projects from '../assets/projects.json'

export default {
  name: 'HelloWorld',
  data () {
    return {
      pageTitle:'haha'
    }
  },
  mounted(){
    
  },
  created(){
    
  },
  beforeDestroy(){
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css">
@import 'style.css';
img{
    width:100%;
}
</style>