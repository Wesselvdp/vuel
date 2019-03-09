<template>
  <div>
    <Navigation />
    <MastOne :pageID="pageID" />
    <FlexibleContent v-bind:key="item.id" :item="item" v-for="item in acf.FlexibleContent" :items="acf.flexibleContent" />
    
  </div>
</template>

<script>
//Bootstrap Css
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//components
  // Navigation
  import Navigation from './components/nav/Navigation.vue';
  
  // Mast
  import MastOne from './components/mast/MastOne.vue';

  //Flexible layout
  import FlexibleContent from './components/FlexibleContent.vue';


import axios from 'axios';

export default {
  name: 'app',
  components: {
    Navigation,
    MastOne,
    FlexibleContent,
  },
  data() {
    return {
      wp: {},
      acf: {},
      pageID: 211,
    }
  },
  async created() {
    try {
      const response = await axios.get(`https://grommit.nl/wp-json/wp/v2/pages/${this.pageID}`)
      this.wp = response.data
      this.acf = response.data.acf
    } catch(e) {
      this.errors.push(e)
    } 
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
