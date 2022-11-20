<template>
  <div class="wrapper">
    <br />
    <control-bar :genre="genre" :rating="rating"></control-bar>
    <br />
    <div class="heading-wrapper">
      <heading :tite="nowStreaming"></heading>
    </div>
    <br/>
    <gallery :all-shows="showsByCategory"></gallery>
  </div>
</template>
<script>

import ControlBar from '../components/Organisms/ControlBar/ControlBar.vue'
import Gallery from '../components/Organisms/Gallery/Gallery.vue'
import Heading from '../components/Atoms/Heading/Heading.vue'

// service import begins here
import { getAllStreamingsNow } from '../services/streamingService'
// shared
import shared from '../shared/shared'

export default {
  name: 'Dashboard',
  components: {
    ControlBar,
    Gallery,
    Heading
  },
  data: function () {
    return {
      nowStreaming: 'Now Streaming',
      allShowsByCategory: [],
      showsByCategory: [],
      genre: ['All'],
      rating: []
    }
  },
  methods: {
    onGenreFilterClick: function (value, source) {
      if (source === 'Genre') {
        this.showsByCategory = this.allShowsByCategory.filter((show) => {
          return show.genres.includes(value)
        })
      } else if (source === 'Rating') {
        this.showsByCategory = this.allShowsByCategory.filter((show) => {
          return show.rating > value
        })
      }
    },
    /**
             *
             */
    getShowsByCategory: function () {
      getAllStreamingsNow(this.category).then((showResponse) => {
        const allGeneres = shared.getGenreList(showResponse)
        this.genre = allGeneres
        // lets format the show information
        showResponse.forEach((value) => {
          this.allShowsByCategory.push({
            image: value.image,
            name: value.name,
            language: value.language,
            runtime: value.runtime,
            id: value.id,
            genres: value.genres,
            rating: value.rating.average
          })
          this.showsByCategory.push({
            image: value.image,
            name: value.name,
            language: value.language,
            runtime: value.runtime,
            id: value.id,
            genres: value.genres,
            rating: value.rating.average
          })
        })
      }).catch((error) => { console.log(error); return [] })
    }
  },
  mounted: function () {
    this.getShowsByCategory()
  }
}
</script>
<style scoped>
.wrapper {
  max-width: 1000px;
  margin: auto;
}
</style>
