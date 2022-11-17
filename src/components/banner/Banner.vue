<template>
  <div>
    <vue-flux
   :options="vfOptions"
   :images="vfImages"
   :transitions="vfTransitions"
   ref="slider">
</vue-flux>
  </div>
</template>
<script>

import {
  VueFlux,
  FluxCaption,
  FluxControls,
  FluxIndex,
  FluxPagination,
  FluxPreloader
} from 'vue-flux'

import { getTopStories } from '../../services/streamingService'

export default {
  name: 'Banner',
  components: {
    VueFlux,
    FluxCaption,
    FluxControls,
    FluxIndex,
    FluxPagination,
    FluxPreloader
  },
  data: function () {
    return {
      myList: ['santhosh'],
      vfOptions: {
        autoplay: true,
        infinite: true,
        allowToSkipTransition: true
      },
      size:{
        width: 100,
        height: 100
      },
      vfImages: [],
      vfTransitions: [ 'fade', 'fade', 'fade' ]
    }
  },
  props: {
    name: {
      type: String,
      required: true
    },
    description: {
      type: String
    }
  },
  mounted: function () {
    const imageCounter = Array.from(Array(5).keys())

    getTopStories().then((successResponse) => {
      imageCounter.forEach((value, index) => {
        this.vfImages.push(successResponse[index].show.image.original)
      })
    }).then((error) => {
      console.log('Erro happened', error)
    })
  }

}
</script>
<style scoped>
img{
    max-width: 100% !important;
    height:auto 100% !important;
    display:block 100% !important;
}
</style>