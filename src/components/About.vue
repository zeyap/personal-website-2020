// eslint-disable-next-line
<template>
  <div class="about" ref="about">
    <div class="about-left">
      <!-- <div style="height:100px; width:100px; background:#a2dae8; "></div> -->
     <div class='container container--realistic'>
      <div class='cube' ref="cubeani">
        <div class='face'></div>
        <div class='face'></div>
        <div class='face'></div>
        <div class='face'></div>
      </div>
    </div>
    </div>
   <div class="about-right">
     <div class="about-intro">
        <span class="h2-underline"><h2> Hi, I am Zeya Peng </h2></span>
        <div style="1em">&nbsp</div>
        <div>Currently a master student on Information Science at Cornell University.</div>
        <div style="1em">&nbsp</div>
        <div>I build websites and web apps with accessible and pixel-perfect UI.</div>
        <div>I mind scalability and performance behind the scene. </div>
        <div style="1em">&nbsp</div>
        <div v-for="(question, key) in questions" v-bind:key="'q'+key">
        <a v-bind:href="question.url" ref="about-q"><h2 class="about-q">{{question.q}}</h2></a>
        <!-- <div class="about-info" v-for="(item, i) in question.info" v-bind:key="'qinfo-'+i">{{item}}</div> -->
        </div>
      </div>
   </div>
    
  </div>
</template>

<script>

import questions from '../assets/questions.json'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      questions: questions.questions
    }
  },
  mounted(){
    
    setTimeout((function(){
      this.$refs.about.style.opacity = 1;
    }).bind(this),200);
    window.title = "about"

    document.querySelector("body").style.background = "#ffede8"

    this.$refs.cubeani.style.animation="rot 8s linear infinite";

    let that = this;
    this.$refs['about-q'].forEach((item,id)=>{
      switch(id){
        case 0:
        item.onmouseover = function(e){
          that.$refs.cubeani.style.animation="rotX-rev 8s linear infinite";
        }
        break;
        case 1:
        item.onmouseover = function(e){
          that.$refs.cubeani.style.animation="rotY 8s linear infinite";
        }
        break;
        default:
        item.onmouseover = function(e){
          that.$refs.cubeani.style.animation="rotX 8s linear infinite";
        }
        break;
      }

    })

    
  },
  created(){
    
  },
  beforeDestroy(){
    this.$refs.about.style.opacity = "0";
    this.$refs.about.style.transition = "opacity 1s";
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css">
@import 'style.css';

.container {
  /* margin-left:100px;
  margin-top:100px; */
}
.cube { 
  position: relative; 
  width: 5em; 
  height: 5em; 
  transform-style: preserve-3d; 
  transform: rotateY(10deg) rotateX(10deg); 
} 
.face {
  border:2px black solid;
  position: absolute; width: 100%; height: 100%; 
}
.face:nth-child(1) { 
  transform: rotateY(0deg) translateZ(2.5em); 
} 
.face:nth-child(2) { 
  transform: rotateY( 90deg) translateZ(2.5em); 
}
.face:nth-child(3) { 
  transform: rotateY(180deg) translateZ(2.5em); 
}
.face:nth-child(4) { 
  transform: rotateY(270deg) translateZ(2.5em); 
}
.cube--ani { animation: rotX 5s linear infinite; } 
@keyframes rot { 
  to { 
    transform: rotateY(-330deg) rotateX(370deg); 
  } 
}
@keyframes rotY { 
  to { 
    transform: rotateY(-360deg) rotateX(0); 
  } 
}
@keyframes rotX { 
  to { 
    transform: rotateY(0) rotateX(360deg); 
  } 
}
@keyframes rotX-rev { 
  to { 
    transform: rotateY(0) rotateX(-360deg); 
  } 
}
</style>
