<template>
    <div class="home">
      <navigation></navigation>
      <Menu></Menu>
      <!-- <div class="accordion">
        <accordion ></accordion>
      </div> -->
      <search-movie></search-movie>
    </div>
</template>
<script>

import { getTopStories } from '../services/streamingService'
import Menu from '../components/menu/Menu.vue'
import Navigation from '../components/navigation/Navigation.vue'
import Accordion from '../components/Accordion/Accordion.vue'
import SearchMovie from '../components/search-movie/SearchMovie.vue'

export default {
  name: 'Home',
  components: {
    Navigation,
    Menu,
    Accordion,
    SearchMovie
  },
  data () {
    return {
      stories: []
    }
  },
  created () {
    getTopStories().then((response) => {
      console.log(response)
    })
  }
}
</script>
<style scoped>
.content {
    /*no grid support*/
    float: left;
    width: 79.7872%;
    /* grid */
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    padding: 0 !important;
    margin: 30px;
}
.accordion {
  height: 400px;
}
.banner {
    display: flex;
    flex-direction: row;
    align-content: space-between;
    background-color: teal;
}

.header {
    font-weight: 900;
    margin: 4rem;
    width: 60%;
}

.home-img {
    width: 40%;
}
</style>
