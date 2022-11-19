<template>
  <div id="pathe">
    <container></container>
    <pathe-header></pathe-header>
    <router-view/>
    <pathe-footer></pathe-footer>
  </div>
</template>

<script>
import PatheFooter from './components/PatheFooter/PatheFooter.vue'
import PatheHeader from './components/PatheHeader/PatheHeader.vue'
import Container from './components/Container/Container.vue'

export default {
  name: 'pathe',
  components: {
    PatheFooter,
    PatheHeader,
    Container
  }
}
</script>

<style>

#pathe {
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
