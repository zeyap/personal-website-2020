// eslint-disable-next-line
<template>
  <div class="resume" ref="resume">
    <div class="resume-col" ref="resume-col-l">
      <div class="footer">
        <h1 class="h1-left" >CONTACT</h1>
      <div style="margin-top:0.2em;"><v-icon name="envelope"/> zp82 @ cornell.edu </div>
      <div><span><v-icon name="brands/github"/> github.com/zeyap</a></span></div>
      </div>

      <div v-for="(edu,key) in education" v-bind:key="'edu'+key" class="edu">
        <h1 class="h1-left" v-if="key==0">EDUCATION</h1>
        <h2>{{edu.name}}</h2>
        <div>{{edu.date}}</div>
        <div>{{edu.location}}</div>
        <div class="em">{{edu.degree}}</div>
        <span class="tag" v-for="(course, i) in edu.courses" v-bind:key="'course'+i">{{course}}</span>
      </div>

      <h1 class="h1-left">SKILLS</h1>
      <div v-for="(skillset,key) in skills" v-bind:key="'skillset'+key" class="skill">
        <h2 class="h2-small">{{key}}</h2>
        <div v-for="(skill, i) in skillset" v-bind:key="i" class="skill-item tag">{{skill}}</div>
      </div>
      </div>

      <div class="resume-col" ref="resume-col-r">
      <div v-for="(exp,key) in experience" v-bind:key="'exp'+key" class="exp">
        <h1 class="h1-right" v-if="key==0">EXPERIENCE</h1>
        <h2 class="font-dark">{{exp.name}}</h2>
        <div class="font-dark"><a v-bind:href="exp.link">{{exp.project}}</a></div>
        <div class="font-dark">{{exp.date}}</div>
        <div class="font-dark"> {{exp.location}}</div>
        <div class="em">{{exp.title}}</div>
        <span class="bullet" v-for="(item, i) in exp.bullets" v-bind:key="'expbullet'+i">{{item}}</span>
      </div>
      
      <h1 class="h1-right">PROJECTS</h1>
      <div class="projects">
      <div v-for="(project,key) in projects" v-bind:key="'project'+key" class="project">
        
        <h2 class="h2-small font-dark"><a v-bind:href="project.link">{{project.name}}</a></h2>
        <div class="font-dark">{{project.date}}</div>
        <span class="tag tag-dark" v-for="(tag, i) in project.tags" v-bind:key="'projtag'+i">{{tag}}</span>
        <span class="bullet" v-for="(item, i) in project.bullets" v-bind:key="'projbullet'+i">{{item}}</span>
      </div>
      </div>

      </div>
    
  </div>
</template>

<script>
import resume from '../assets/resume.json'
import {addScrollListener,clearRouterviewComponent} from '../util.js'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'

export default {
  name: 'Resume',
  components:{
    'v-icon':Icon
  },
  data () {
    return {
      skills: resume.skills,
      education: resume.education,
      experience: resume.experience,
      projects: resume.projects,
      lastScrollTop:[]
    }
  },
  mounted(){
    [this.$refs['resume-col-r']].forEach((target,id)=>{//this.$refs['resume-col-l'],
      addScrollListener.bind(this)(target,id);
    })

    setTimeout((function(){
      this.$refs.resume.style.opacity = 1;
    }).bind(this),200)
  },
  beforeDestroy(){
    clearRouterviewComponent();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.resume{
  display: flex;
  flex-flow: row nowrap;
  justify-content:flex-start;
  align-items:flex-start;
  opacity: 0;
  transition: opacity 0.5s;
}

.resume-col:first-of-type{
  min-width: 18em;
  width: 50em;
  display: flex;
  flex-flow: row wrap;
  overflow: auto;
  padding: 0 20px 0 40px;
  background: #e26181;
  color: white;
}
.resume-col:first-of-type::-webkit-scrollbar{
  width: 0.5em;
  background-color:#e58ea3;
}
.resume-col:first-of-type::-webkit-scrollbar-thumb{
  background-color:#f2c9d2;
}

.resume-col::-webkit-scrollbar{
  width: 0.5em;
  background-color: white;
}
.resume-col::-webkit-scrollbar-thumb{
  background-color: #cccccc;
}

.skill-item{
  display: inline-block;
}
.resume-col{
  height: calc(100vh - 60px);
  overflow: auto;
  padding: 0 40px 0 30px;
  transition: all 0.5s;
}

h1{
  font-size: 1.2em;
  margin-bottom: 0;
  margin-top:1.2em;
  width: 100%;
  font-weight: bold;
}

.h1-left{
  color: #f2c9d2;
}
.h1-right{
  color: #aaaaaa;
}
h2{
  font-size: 1.5em;
  margin-bottom: 0;
  margin-top:0.2em;
}
.h2-small{
  font-size: 1.2em;
}
.font-dark{
  color:#446594;
}

.em{
  font-weight: bold;
  font-style: italic;
}

.tag{
  border-bottom: solid 1px #f2c9d2;
  color: #f2c9d2;
  display: inline-block;
  
  margin: 0.2em;
}
.tag-dark{
  border: solid 1px #e58ea3;
  color:#e58ea3;
  padding: 0 0.2em;
}
.exp{
  width: 100%;
}
.project{
  width: 20em;
  padding: 1em;
  margin: 1em 1em 1em 0;
  border: solid 1px #dddddd;
  box-shadow: 2px 4px 5px #eeeeee;
}

.bullet::before{
  content: '• ';
}
.bullet{
  display: block;
}
@media (max-width: 1280px){
  .project{
    display:block;
    width: 100%;
  }
  .projects{
    width: 100%;
    display:flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
    margin: 0 1em;
  }
}

@media (max-width: 870px){
  .resume-col{
    width: 100%;
    padding: 0 40px 0 40px;
  }
  .resume{
    flex-flow: row wrap;
  }
  .footer{
    display: block;
    width: 100%;
    margin-bottom: 0.2em;
    color:white;
  }
}
@media (min-width: 870px){
  .footer{
    display: none;
  }
}


@media (min-width: 1280px) {
  .projects{
    width:100%;
    columns: 2;
    column-gap: 0;
  }
  .project{
    display: inline-block;
  }
}

a, a:focus, a:visited,a:active{
  color:#446594;
}
a:hover{
  color:#e26181
}

</style>
