<template>
    <div class="home">
        <div class="banner">
            <h2 class="header">Pathe</h2>
        </div>
        <storyItem v-for="(story, index) in stories" :key="index" :item="story" :index="index"></storyItem>
    </div>
</template>
<script>
import storyItem from '../components/singleitem.vue'
 import { getTopStories } from '../services/streamingService'
export default {
  name: 'Home',
  components: {
    storyItem
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
    // storiesWithItems().then(res => {
    //   this.stories = res.sort(sortByScore)
    // })
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
