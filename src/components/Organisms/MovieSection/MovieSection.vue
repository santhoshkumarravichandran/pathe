<template>
  <div>
    <br />
    <control-bar :genre="genre"></control-bar>
   <div class="heading-wrapper">
      <heading :tite="category"></heading>
    </div>
    <horizontal-list :showInformation="showsByCategory"></horizontal-list>
  </div>
</template>
<script>
import { getAllStreamingsNow } from '../../../services/streamingService'
import shared from '../../../shared/shared'
import HorizontalList from '../../Molecules/HorizontalList/HorizontalList.vue'
import Heading from '../../Atoms/Heading/Heading.vue'
import ControlBar from '../ControlBar/ControlBar.vue'
export default {
  name: 'Section',
  components: {
    ControlBar,
    HorizontalList,
    Heading
  },
  props: {
    category: {
      type: String,
      default: ''
    }
  },
  data: function () {
    return {
      allShowsByCategory: [],
      showsByCategory: [],
      genre: [],
      rating: []
    }
  },
  methods: {
    /**
     *
     * @param {*} value
     */
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
.heading-wrapper {
  margin-top: 20px;
  margin-left: 40px;
  font-weight: bold;
  font-size: 14px;
}
</style>
