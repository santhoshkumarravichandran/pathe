<template>
    <main>
      <vue-horizontal ref="horizontal" class="horizontal" :button-between="false" @scroll-debounce="onScrollDebounce">
        <div class="item wrapper" v-for="(movieInformation, index) in showInformation" :key="index"
          style="height:250px;" @click="loadMovieInformation(movieInformation.id)">
          <div class="container">
            <b-img :src="`${movieInformation.image.original}`" fluid alt="Responsive image"></b-img>
            <div class="movie-title">
              {{ movieInformation.name | trimShowTitle }}
            </div>
            <div class="movie-subtitle">
              {{ movieInformation.language }} | {{ movieInformation.runtime }} Minutes
            </div>
          </div>
        </div>
      </vue-horizontal>
    </main>
</template>

<script>

export default {
  name: 'HorizontalList',
  components: {
  },
  props: ['showInformation'],
  data: function () {
    return {
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
    /**
     * Route to the movie information page
     * @param {number} id
     */
    loadMovieInformation: function (id) {
      this.$router.push('/movie/' + id)
    }
  },
  mounted: function () {
    // bring the cursor to index 1
    this.$refs.horizontal.scrollToIndex(1)
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
