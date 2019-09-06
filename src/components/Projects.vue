// eslint-disable-next-line
<template>
  <div>
    <a target="_blank" href="https://zeyap.github.io/static/resume_zeyapeng_dev.pdf"><FAB class="fab" name="paperclip" name_after="arrow-down" style="z-index:4" type="fade-through" border="true" color="#904e95" v-bind:position="fabPos">
    </FAB></a>
      
    <div class="page-title" ref="page-title">
      <div>
        <span class="page-title-name">{{pageTitle}}</span>
      </div>
      <div>
        <span class="page-title-section" style="color: #e96443" id="button-me">ME</span>
        <span class="page-title-section" id="button-projects">PROJECTS</span>
      </div>
    </div>
    <div class="inner-wrapper">

    <div id="section-me">
      <div class="headmargin">&nbsp</div>
      <p style="margin-bottom:0">Frontend Engineer passionate about creating friendly, pixel perfect & performant user interfaces</p>
      <p style="margin:0">2nd year Master student at Cornell Information Science</p>
      <p style="margin-top:0">Spent 18 years growing up in Changsha, China and went on for university at Hangzhou</p>
      
      <div>
        <a class="underline contact" href="mailto:zp82 @ cornell.edu">Email</a> 
        <a class="underline contact" href="https://github.com/zeyap">Github</a> 
        <a class="underline contact" target="_blank" href="https://zeyap.github.io/raw/dev/static/resume_zeyapeng_dev.pdf">Resume</a>
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

    <div class="headmargin">&nbsp</div>
    <div class="headmargin">&nbsp</div>
    <div class="headmargin">&nbsp</div>
    </div>
  </div>
</template>

<script>
import {FAB} from '../../../vue-material/src/index.js'
import projects from '../assets/projects.json'

export default {
  name: 'Home',
  components:{
    FAB
  },
  data () {
    return {
      projects: projects.projects,
      other:projects.other,
      pageTitle: 'ZEYA PENG',
      fabPos: {right:'40px',bottom:'10px'}
    }
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
