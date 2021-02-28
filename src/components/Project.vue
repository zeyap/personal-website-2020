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
        <p>Our application provides prediction to users on trip durations and taxi fares during any time of day in New York City. </p>
        <p>We trained learning model on the dataset of <a href="https://www1.nyc.gov/site/tlc/about/tlc-trip-record-data.page">NYC’s TLC Trip Record Data</a>, which includes 10 years of taxi fare records during any time of day in New York City.
        </p>
    </div>
    <div style="width: 900px; margin: auto">
        <video width="900" autoplay="autoplay">
            <source src="https://github.com/zeyap/zeyap.github.io/raw/dev/src/assets/media/nyctaxiprediction.mov">
        </video>
    </div>
    <div class="inner-wrapper">
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