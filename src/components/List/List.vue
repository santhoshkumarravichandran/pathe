<template>
  <div>
    <div class="heading-wrapper">
      <heading :tite="title"></heading>
    </div>
    <main>
      <br />
      <vue-horizontal ref="horizontal" class="horizontal" :button-between="false" @scroll-debounce="onScrollDebounce">
        <div class="item wrapper" v-for="(movieInformation, index) in movieInformations" :key="index"
          style="height:250px;" @click="loadMovieInformation(movieInformation.id)">
          <div class="container">
            <b-img :src="`${movieInformation.image}`" fluid alt="Responsive image"></b-img>
            <div class="movie-title">
              {{ movieInformation.name | trimShowTitle }}
            </div>
            <div class="movie-subtitle">
              {{ movieInformation.language }} | {{ movieInformation.runtime }} Minutes
            </div>
          </div>
          </div>

          <div class="pagination">
            <div class="dot" :class="{ current: i - 1 === index }" v-for="i in pages" :key="i"
              @click="onPageClick(i - 1)">
            </div>
          </div>
      </vue-horizontal>
    </main>
  </div>

</template>

<script>
import { getAllStreamingsNow } from '../../services/streamingService'
import Heading from '../Heading/Heading.vue'

export default {
  name: 'List',
  components: {
    Heading
  },
  props: {
    title: {
      type: String,
      required: true
    },
    audience: {
      type: String,
      default: 'shows'
    }
  },
  data: function () {
    return {
      movieInformations: [],
      width: 0,
      index: 0,
      pages: 0
    }
  },
  filters: {
    trimShowTitle (title) {
      return title.length > 15 ? title.substring(0, 15) + '...' : title
    }
  },
  methods: {
    onScrollDebounce ({ scrollWidth, width, left }) {
      this.width = width
      this.index = Math.round(left / width)
      this.pages = Math.round(scrollWidth / width)
    },
    getAllShows () {
      getAllStreamingsNow(this.audience).then((successResponse) => {
        successResponse.forEach((value, index) => {
          const { image = {}, name = '', language = '', runtime = 0, id } = successResponse[index]
          this.movieInformations.push({
            id,
            image: image.original || '',
            name,
            language,
            runtime
          })
        })
      }).catch((error) => { console.log(error) })
    },
    loadMovieInformation: function (id) {
      this.$router.push('/movie/' + id)
    }
  },
  mounted: function () {
    this.$refs.horizontal.scrollToIndex(1)
    this.getAllShows()
  }
}
</script>
<style scoped>
main {
  margin-left: 20px;
  margin-right: 20px;
}

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #00000010;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 24px;
}

img {
  max-width: 200px;
  max-height: 200px;
}

.heading-wrapper {
  margin-top: 20px;
  margin-left: 40px;
  font-weight: bold;
  font-size: 14px;
}

.wrapper {
  width: auto;
  height: 300px;
  cursor: pointer;
}

.movie-title {
  font-weight: bold;
  font-size: 14px;
}

.movie-subtitle {
  font-size: 11px;
  background: #ffc426;
}

.container {
  width: auto;
  height: 200px;
  margin-left: 10px;
  font-size: 14px;
}
</style>

<style scoped>
.horizontal {
  --fixed: 220px;
  --count: 1;
  --gap: 12px;
  --margin: 24px;
}

@media (min-width: 768px) {
  .horizontal {
    --count: 3;
    --margin: 0;
  }
}

@media (min-width: 1024px) {
  .horizontal {
    --count: 4;
  }
}

@media (min-width: 1280px) {
  .horizontal {
    --gap: 24px;
    --count: 5;
  }
}

@media (min-width: 1536px) {
  .horizontal {
    --count: 6;
  }
}
</style>
<style scoped>
.content {
  background-position: center !important;
  background-size: cover !important;
  background-repeat: no-repeat !important;
  position: relative;
  border-radius: 5px;
  overflow: hidden;
}

.aspect-ratio {
  padding-top: 60%;
}

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #00000010;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 24px;
}
</style>
