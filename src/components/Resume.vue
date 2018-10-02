// eslint-disable-next-line
<template>
  <div class="resume" ref="resume">
    <div class="resume-col" ref="resume-col-l">
      <div class="plus objective" style="margin-top: 1em">
      <div>Hello! I am Zeya Peng.</div>
        <div>Looking for Software Engineering and Front-end Web Development Internship opportunities</div>
      </div>
      <div class="footer">
        <h1 class="h1-left" >CONTACT</h1>
      <div style="margin-top:0.2em;"><v-icon name="envelope"/> zp82 @ cornell.edu </div>
      <div><span><v-icon name="brands/github"/> github.com/zeyap</span></div>
      </div>

      <div v-for="(edu,key) in education" v-bind:key="'edu'+key" class="edu">
        <h1 class="h1-left" v-if="key==0">EDUCATION</h1>
        <h2>{{edu.name}}</h2>
        
        <div>{{edu.date}}</div>
        <div>{{edu.location}}</div>
        <div class="em">{{edu.degree}}</div>
        <div class="plus"><B>+ Related courses</B>
          <div class="enumerates">
        <div class="tag" v-for="(course, i) in edu.courses" v-bind:key="'course'+i">{{course}}</div>
        </div>
        </div>
        
      </div>

      <h1 class="h1-left">SKILLS</h1>
      <div v-for="(skillset,key) in skills" v-bind:key="'skillset'+key" class="skill">
        <div class="plus"><h2 class="h2-small">+ {{key}}</h2>
          <div class="enumerates">
          <div v-for="(skill, i) in skillset" v-bind:key="i" class="skill-item tag">{{skill}}</div>
          </div>
        </div>
      </div>
      </div>

      <div class="resume-col" ref="resume-col-r">
      <div v-for="(exp,key) in experience" v-bind:key="'exp'+key" class="exp">
        <h1 class="h1-right" v-if="key==0">EXPERIENCE</h1>
        <h2 class="h2-large">{{exp.name}}</h2>
        <div ><a v-bind:href="exp.link">{{'+ '+exp.project}}</a></div>
        <div >{{exp.date}}</div>
        <div > {{exp.location}}</div>
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
  padding: 3em 20px 1em 40px;
  background: #a2dae8;
  color: white;
}
.resume-col:first-of-type::-webkit-scrollbar{
  width: 0.5em;
  background-color:#a2dae8;
}
.resume-col:first-of-type::-webkit-scrollbar-thumb{
  background-color:#a2dae8;
}

.resume-col::-webkit-scrollbar{
  width: 0.5em;
  background-color: white;
}
.resume-col::-webkit-scrollbar-thumb{
  background-color: #dadada;
}

.edu{
  width: 100%;
}
.skill{
  width: 100%;
}

.skill-item{
  display: inline-block;
}
.plus{
  border: solid 1px white; 
  display: inline-block; 
  /* line-height: 1em;  */
  text-align:left;
  padding: 0.3em;
  transition: width 0.5s, height 0.5s;
  margin: 0.5em 0.5em 0.5em 0;
  box-shadow: 4px 4px #e7f6fa; 
}

.objective{
  /* outline: 1px solid white; */
  color: #ffa389;
  background: white;
  border: solid 1px #ffa389; 
  box-shadow: 6px 6px #ffbaa7; 
  transition: box-shadow 0.5s;
}

.objective:hover{
  box-shadow: -12px -12px #ffbaa7; 
}

.plus:hover .tag{
  opacity: 1;
  transition: opacity 0.5s;
  transition-delay: 0.3s;
}
.plus .tag{
  opacity: 0;
  transition: opacity 0.5s;
  transition-delay: 0.3s;
}
.enumerates{
  overflow: hidden;
}
.enumerates::-webkit-scrollbar{
  background: #a2dae8;
}
.enumerates::-webkit-scrollbar-thumb{
  background: #a2dae8;
}

.plus .enumerates{
  display: block;
  width: 0px;
  height: 0px;
  transition: width 0.5s, height 0.5s;
}
.plus:hover .enumerates{
  display: block;
  width:  280px;
  height: 80px;
  overflow-y:auto;
  transition: width 0.5s, height 0.5s;
}
.resume-col{
  height: 100vh;
  overflow: auto;
  padding: 3em 40px 1em 30px;
  transition: height 0.5s;

  /* background: #e7f6fa; */
}

h1{
  font-size: 1.2em;
  margin-bottom: 0;
  margin-top:1.2em;
  width: 100%;
  font-weight: bold;
}

.h1-left{
  color: #e7f6fa;
}
.h1-right{
  color: #a2dae8;
}
h2{
  font-size: 1.5em;
  margin-bottom: 0;
  margin-top:0.2em;
}
.h2-small{
  font-size: 1.2em;
}
.h2-large{
  color: #ffa389
}
.font-dark{
  color:#5a5a5a;
}

.em{
  display: block;
  width: 100%;
  font-weight: bold;
  font-style: italic;
}

.tag{
  /* border-bottom: solid 1px #a0a0a0; */
  /* color: #a2dae8; */
  padding: 0 0.3em;
  /* background: white; */
  opacity: 1;
  display: inline-block;
  margin: 0.2em 0.2em 0.2em 0;
}
.tag-dark{
  border: solid 1px #ffa389;
  color:#ffa389;
  padding: 0 0.2em;
}

.project{
  position: relative;
  width: 20em;
  padding: 1em;
  margin: 1em 1em 1em 0;
  border: solid 1px #a2dae8;
  /* box-shadow: 4px 4px #a2dae8; */
  background: white;
  transition: box-shadow 0.5s;
}
.project:after{
  content: '';
  position: absolute;
  top: 8px;
  left: 8px;
  right: -8px;
  bottom: -8px;
  border: solid 1px #a2dae8;
  background: #e7f6fa;
  transition: top 0.5s, left 0.5s, right 0.5s, bottom 0.5s;
  
  z-index: -1;
}
.project:hover:after{
  top: -8px;
  left: -8px;
  right: 8px;
  bottom: 8px;
  transition: top 0.5s, left 0.5s, right 0.5s, bottom 0.5s;
}
.project:hover{
  box-shadow: 0px 0px #a2dae8;
  transition: box-shadow 0.5s;
}

.exp{
  width: 100%;
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
  .resume-col:first-of-type{
    width: 100%;
    padding: 3em 40px 1em 40px;
  }
  .resume-col{
    width: 100%;
    padding: 1em 40px 1em 40px;
  }
  .resume{
    flex-flow: row wrap;
  }
  
}
@media (min-width: 870px){

}

.footer{
    display: block;
    width: 100%;
    margin-bottom: 0.2em;
    color:white;
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
  color:#ffa389;
  text-decoration: none;
  transition: text-decoration 0.5s
}
a:hover{
  color:#ffa389;
  text-decoration: none;
  border-bottom: 1px solid #ffbaa7;
  transition: border-bottom 0.5s;
}


</style>
