<template>
    <div id="pathe">
        <container/>
        <pathe-header/>
        <router-view/>
        <pathe-footer/>
    </div>
</template>

<script>
import PatheFooter from './components/Atoms/PatheFooter/PatheFooter.vue'
import PatheHeader from './components/Atoms/PatheHeader/PatheHeader.vue'
import Container from './components/Atoms/Container/Container.vue'

export default {
    name: 'Pathe',
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
