// eslint-disable-next-line
<template>
  <div class="projects" ref="projects">
    <div class="headmargin">&nbsp</div>
    <div class="headmargin">&nbsp</div>

    <div v-for="(project,key) in projects" v-bind:key="'project-card'+key" class="project">
      
      <img v-if="project.img && key%2===0" v-bind:src="project.img" class="project-picture-img shadowed"/>
        <div class="project-card" v-if="key%2===0">
          <div class="project-card-title">
          <h2 class="h2-small" style="color: #904e95">{{project.name}}</h2>
            <div><span class="tag tag-dark" v-for="(tag, i) in project.tags" v-bind:key="'projtag'+i">{{tag}}</span></div>
            </div>
            <div class="project-brief">
          <span v-for="(item, i) in project.bullets" v-bind:key="'projbullet'+i">{{item}}</span>
          </div>
          <span class="project-links"><a class="shadowed" v-if="project.github" target="_blank" v-bind:href="project.github"><v-icon name="brands/github"/></a>
            <a class="shadowed" v-if="project.link" target="_blank" v-bind:href="project.link"><v-icon name="external-link-alt"/> Try it</a></span>
          
        </div>
        
        

        <img v-if="project.img && key%2===1" v-bind:src="project.img" class="project-picture-img project-picture-right shadowed"/>

        <div class="project-card project-card-left" v-if="key%2===1">
          <div class="project-card-title">
          <h2 class="h2-small">{{project.name}}</h2>
          <div><span class="tag tag-dark" v-for="(tag, i) in project.tags" v-bind:key="'projtag'+i">{{tag}}</span></div>
          </div>
          <div class="project-brief">
          <span v-for="(item, i) in project.bullets" v-bind:key="'projbullet'+i">{{item}}</span>
          </div>
          <span class="project-links"><a class="shadowed" v-if="project.github" target="_blank" v-bind:href="project.github"><v-icon name="brands/github"/></a>
            <a class="shadowed" v-if="project.link" target="_blank" v-bind:href="project.link"><v-icon name="external-link-alt"/> Try it</a></span>
        </div>
        
        

    </div>

    <div class="projects-other" ref="projects-other">
    <div class="project projects-other-inner" style="height: auto">
      <div v-for="(project,key) in other"  v-bind:key="'otherproject'+key" class="project-other">
        <div>
          <B class="font-dark"><a v-bind:href="project.link">{{project.name}}</a></B>
          <div><span class="tag tag-dark" v-for="(tag, i) in project.tags" v-bind:key="'projtag'+i">{{tag}}</span></div>
          </div>
          <div class="project-other-brief">
          <span v-for="(item, i) in project.bullets" v-bind:key="'projbullet'+i">{{item}}</span>
          </div>
          <span class="project-other-links"><a  v-if="project.github" target="_blank" v-bind:href="project.github"><v-icon name="brands/github"/></a>&nbsp
            <a  v-if="project.link" target="_blank" v-bind:href="project.link"><v-icon name="external-link-alt"/></a></span>
      </div>
    </div>
    </div>

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
     
    setTimeout((function(){
      this.$refs.projects.style.opacity = 1;
    }).bind(this),200);
    window.title = "projects"
     document.querySelector("body").style.background = "#ffffff"
  },
  created(){
    
  },
  beforeDestroy(){
    this.$refs['projects'].style.opacity = "0";
    this.$refs['projects'].style.transition = "opacity 1s";
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css">
@import 'style.css';
.projects{
  opacity:0;
  transition: opacity 1s;
  overflow: auto;
  /* background: #eeeeee; */
}

</style>
