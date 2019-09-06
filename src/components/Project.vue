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
    <div class="inner-wrapper">
        <h1>NYC Taxi Trip Real-time Prediction</h1>
        <p>Our application (as shown in screenrecording below) provides prediction to users on trip durations and taxi fares during any time of day in New York City, based on learning of the dataset of <a href="https://www1.nyc.gov/site/tlc/about/tlc-trip-record-data.page">NYC’s TLC Trip Record Data</a>. 
        The prediction is affected by real-time updates of rides data in New York City.</p>
    </div>
    <div style="width: 900px; margin: auto">
        <video width="900" autoplay="autoplay">
            <source src="https://github.com/zeyap/zeyap.github.io/raw/dev/src/assets/media/nyctaxiprediction.mov">
        </video>
    </div>
    <div class="inner-wrapper">
        <h3>Why useful?</h3>
        <p>Nowadays, the taxi fare problem is one of several real-world problems that are used as case studies in the series of courses. Such as google map, Lyft, and Uber are providing the estimate of the fare and duration of the taxi trips. However, all of them can only give users a prediction of a limited time scale.</p>
        <p>To expand the time scale, we took advantage of the past datasets to predict the taxi fare during any time of day in New York City. For users, a wider prediction could provide them with information to arrange their travel earlier.</p>
        
        <div class="headmargin">&nbsp</div>
        <a href="/">← Back to homepage</a>
        <div class="headmargin">&nbsp</div>
        <div class="headmargin">&nbsp</div>
        <div class="headmargin">&nbsp</div>
    </div>
</div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data () {
    return {
      pageTitle:'ZEYA PENG'
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