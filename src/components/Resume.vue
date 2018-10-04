// eslint-disable-next-line
<template>
  <div class="resume" ref="resume">
    
    <div class="resume-col" ref="resume-col-l">
      <div class="headmargin">&nbsp</div>
      
      <!-- <div class="footer">
        <h1 class="h1-left" >CONTACT</h1>
      <div style="margin-top:0.2em;"><v-icon name="envelope"/> zp82 @ cornell.edu </div>
      <div><span><v-icon name="brands/github"/> github.com/zeyap</span></div>
      </div> -->

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

      <div style="height: 1em">&nbsp</div>
      </div>

      <div class="resume-col" ref="resume-col-r">
        <div class="headmargin">&nbsp</div>
      <div v-for="(exp,key) in experience" v-bind:key="'exp'+key" class="exp">
        <h1 class="h1-right" v-if="key==0">EXPERIENCE</h1>
        <h2 class="h2-large">{{exp.name}}</h2>
        <div ><a v-bind:href="exp.link">{{'+ '+exp.project}}</a></div>
        <div >{{exp.date}}</div>
        <div > {{exp.location}}</div>
        <div class="em">{{exp.title}}</div>
        <span class="bullet" v-for="(item, i) in exp.bullets" v-bind:key="'expbullet'+i">{{item}}</span>
      </div>

      <div class="plus objective">
        <div>Looking for Software Engineering & Front-end Internship opportunities</div>
        <div style="margin-top:0.2em;"><v-icon name="envelope"/> zp82 @ cornell.edu </div>
      <div><span><v-icon name="brands/github"/> github.com/zeyap</span></div>
      </div>
      
      <div style="height: 1em">&nbsp</div>

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
    this.$refs['resume'].style.opacity = "0";
    this.$refs['resume'].style.transition = "opacity 1s";
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css">
@import 'style.css';


</style>
