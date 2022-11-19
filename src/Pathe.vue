<template>
  <div id="pathe">
    <banner></banner>
    <pathe-header></pathe-header>
    <router-view/>
    <pathe-footer></pathe-footer>
  </div>
</template>

<script>
import PatheFooter from './components/PatheFooter/PatheFooter.vue'
import PatheHeader from './components/PatheHeader/PatheHeader.vue'
import Banner from './components/Banner/Banner.vue'
export default {
  name: 'pathe',
  components: {
    PatheFooter,
    PatheHeader,
    Banner
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');

#pathe {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
