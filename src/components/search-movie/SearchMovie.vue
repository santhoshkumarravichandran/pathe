<template>
    <main>
        <heading :tite="title"></heading>
        <br />
        <vue-horizontal ref="horizontal" class="horizontal" :button-between="false" @scroll-debounce="onScrollDebounce">
            <div class="card item" v-for="(item, index) in vfImages" :key="index">
                <b-card title="Card Title" :img-src='`${item}`' img-alt="Image" img-top tag="article" no-body
                    style="max-width: 20rem;" class="mb-2 align-self-md-stretch">
                </b-card>

            </div>
        </vue-horizontal>

    </main>
</template>

<script>
import { getTopStories } from '../../services/streamingService'
import Heading from '../Heading/Heading.vue'

export default {
  name: 'SearchMovie',
  components: {
    Heading
  },
  data: function () {
    return {
      title: 'Now Streaming',
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
    this.$refs.horizontal.scrollToIndex(1)
    const imageCounter = Array.from(Array(10).keys())
    getTopStories().then((successResponse) => {
      imageCounter.forEach((value, index) => {
        this.vfImages.push(successResponse[index].image.original)
      })
    }).then((error) => {
      console.log('Erro happened', error)
    })
  }
}
</script>
<style scoped>
.item {
    width: 240px;

    background: #f1f1f1;
    margin-right: 8px;
}

.content {
    background-position: center !important;
    background-size: cover !important;
    background-repeat: no-repeat !important;
    position: relative;
    border-radius: 5px;
    overflow: hidden;
    padding-top: 60%;
}

.title {
    margin-top: 16px;
    display: flex;
    justify-content: center;
}
</style>

<!-- Pagination CSS -->
<style scoped>
.pagination {
    margin-top: 12px;
    display: flex;
    justify-content: center;
}

.dot {
    padding: 4px;
    cursor: pointer;
}

.dot>div {
    border-radius: 10px;
    width: 10px;
    height: 10px;
    background: #33333350;
}

.dot:hover>div {
    border: 1px solid black;
    background: white;
}

.dot.current>div {
    border: 3px solid black;
    background: white;
}
</style>

<!-- Parent CSS (Container) -->
<style scoped>
.v-card-text {
  height: 200px;
  overflow-y: auto;
}
</style>
