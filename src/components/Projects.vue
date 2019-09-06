// eslint-disable-next-line
<template>
  <div>
    <div class="inner-wrapper">

    <div id="section-me">
      <div class="headmargin">&nbsp</div>
      <p style="margin-bottom:0">Frontend Engineer passionate about creating friendly, pixel perfect & performant user interfaces</p>
      <p style="margin:0">2nd year Master student at Cornell Information Science</p>
      <p style="margin-top:0">Spent 18 years growing up in Changsha, China and went on for university at Hangzhou</p>
      
      <div>
        <a class="underline contact" href="mailto:zp82 @ cornell.edu">Email</a> 
        <a class="underline contact" href="https://github.com/zeyap">Github</a> 
        <a class="underline contact" target="_blank" href="https://zeyap.github.io/static/resume_zeyapeng_dev.pdf">Resume</a>
      </div>
    </div>
    <div id="section-projects">
      <div class="project" v-for="(project,key) in [...projects, ...other]" v-bind:key="'project-card'+key">
        <div>
          <h2 class="h2-small" style="color: #904e95">{{project.name}}</h2>
          <div><span class="tag" v-for="(tag, i) in project.tags" v-bind:key="'projtag'+i">{{tag}}</span></div>
        </div>
        
        <img v-bind:src="project.img" class="project-picture-img shadowed"/>
          
      </div>
    </div>
  </div>

  <div class="headmargin">&nbsp</div>
  <div class="headmargin">&nbsp</div>
  <div class="headmargin">&nbsp</div>
  </div>
</template>

<script>
import projects from '../assets/projects.json'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      projects: projects.projects,
      other:projects.other
    }
  },
  mounted(){
    window.title = "projects"
     document.querySelector("body").style.background = "#ffffff"
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
.contact{
  letter-spacing: 1px;
  margin-right: 5px;
}

.projects{
  overflow: auto;
  background: #eeeeee;
}
.project{
  opacity: 0;
}

</style>
