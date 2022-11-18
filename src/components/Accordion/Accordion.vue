<template>
    <div>
        <b-carousel id="carousel-1"
        v-model="slide"
        :interval="4000"
        fade
        img-height="100"
        style="text-shadow: 1px 1px 2px #333;">
            <div v-for="image in imageList" :key="image">
                <b-carousel-slide

                caption="First slide" text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                :img-src="`${image}`"></b-carousel-slide>
            </div>

        </b-carousel>
    </div>
</template>

<script>
import { getTopStories } from '../../services/streamingService'

export default {
  data () {
    return {
      slide: 0,
      imageList: []
    }
  },
  mounted: function () {
    const imageCounter = Array.from(Array(5).keys())

    getTopStories().then((successResponse) => {
      imageCounter.forEach((value, index) => {
        this.imageList.push(successResponse[index].image.original)
      })
    }).then((error) => {
      console.log('Erro happened', error)
    })
  },
  methods: {
  }
}
</script>
