<template>
  <main>
    <heading :tite="title"></heading>
    <br />
    <vue-horizontal ref="horizontal" class="horizontal" :button-between="false" @scroll-debounce="onScrollDebounce">
      <div class="wrapper" v-for="(movieInformation, index) in vfImages" :key="index">
        <div class="container">
          <b-img :src="`${movieInformation.image}`" fluid alt="Responsive image"></b-img>
          <p>
            {{movieInformation.name}}
          </p>
        </div>
        <div>

        </div>
      </div>
    </vue-horizontal>
  </main>
</template>

<script>
import { getTopStories } from '../../services/streamingService'
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
    }
  },
  data: function () {
    return {
      vfImages: [],
      width: 0,
      index: 0,
      pages: 0
    }
  },
  methods: {
    onScrollDebounce ({ scrollWidth, width, left }) {
      this.width = width
      this.index = Math.round(left / width)
      this.pages = Math.round(scrollWidth / width)
    },
    onPageClick (i) {
      if (i === this.pages - 1) {
        // If last page, always scroll to last item
        this.$refs.horizontal.scrollToIndex(this.vfImages.length - 1)
      } else {
        this.$refs.horizontal.scrollToLeft(i * this.width)
      }
    }
  },
  mounted: function () {
    this.$refs.horizontal.scrollToIndex(3)
    const imageCounter = Array.from(Array(20).keys())
    getTopStories().then((successResponse) => {
      imageCounter.forEach((value, index) => {
        const { image = { original: ''}, name = '', language = '', runtime = 0 } = successResponse[index]
        this.vfImages.push({
          image: image.original,
          name,
          language,
          runtime
        })
      })
    }).then((error) => {
      console.log('Erro happened', error)
    })
  }
}
</script>
<style scoped>
main {
  margin-left: 20px;
  margin-right: 20px;
}

img {
  max-width: 200px;
  max-height: 200px;
}

.wrapper {
width: auto;
height: 300px;
}
.container{
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
