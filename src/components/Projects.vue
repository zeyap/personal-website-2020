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
        <span class="page-title-section"><a href="https://www.instagram.com/zeyapdraws/" target="_blank">ILLUSTRATION</a></span>
      </div>
    </div>
    <div class="inner-wrapper">

    <div id="section-me">
      <div class="headmargin">&nbsp</div>
      <p style="margin-bottom:0">Frontend Engineer at Facebook NYC, recent master graduate from Cornell, <a href="https://en.wikipedia.org/wiki/Zhejiang_University">ZJU</a> alumni</p>
      <p style="margin-top:0; margin-bottom:0">Spent first 18 years of my life in <a href="https://en.wikipedia.org/wiki/Changsha">Changsha, China</a></p>
      <p style="margin-top:0">In spare time I'm very into making graphic stuff <a href="https://www.instagram.com/zeyapdraws/">@zeyapdraws</a></p>
      
      <div>
        <a class="underline contact" href="mailto:zeyapeng@outlook.com">Email</a> 
        <a class="underline contact" href="https://github.com/zeyap">Github</a> 
        <a class="underline contact" target="_blank" href="https://zeyap.github.io/static/resume_zeyapeng_dev.pdf">Resume</a>
      </div>
    </div>
    <div id="section-projects">
      <div v-for="(project,key) in [...projects, ...other]" v-bind:key="'project-card'+key">
        <div>
          <a target="_blank" v-bind:href="project.link"><h2 class="h2-small" style="color: #904e95">{{project.name}}</h2></a>
          <div><span class="tag" v-for="(tag, i) in project.tags" v-bind:key="'projtag'+i">{{tag}}</span></div>
        </div>
        <img v-if="project.img" v-bind:src="project.img" class="project-picture-img shadowed"/>
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

</style>
