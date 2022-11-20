<template>
    <div class="main">
        <div class="wrapper">
            <div class="container" v-for="(showInformation, index) in allShows" :key="index">
                <div class="content" @click="onShowSelection(showInformation.id)">
                    <b-img :src="`${showInformation.image.original}`" fluid alt="Responsive image"></b-img>
                    <div class="show-title">
                        {{ showInformation.name }}
                    </div>
                    <div class="show-subtitle">
                        {{ showInformation.language }} | {{ showInformation.runtime }} Minutes |
                        {{ showInformation.genres.join() }}
                    </div>
                </div>
            </div>
        </div>
        <div v-if="allShows.length === 0">
            <no-show-available-vue></no-show-available-vue>
        </div>

    </div>
</template>
<script>

import NoShowAvailableVue from '../../Molecules/NoShowAvailable/NoShowAvailable.vue'
export default {
  name: 'Gallery',
  components: {
    NoShowAvailableVue
  },
  props: ['allShows'],
  methods: {
    onShowSelection (id) {
      this.$router.push(`movie/${id}`)
    }
  }
}
</script>

<style scoped>
.main {
    max-width: 1000px;
    margin: auto;
    align-content: center;
}

.container {
    float: left;
    width: 25%;
    cursor: pointer;
}

.wrapper:after {
    content: "";
    display: table;
    clear: both;
}

.content {
    background-color: white;
    padding: 10px;
    width: 200px;
}

img {
    max-width: 200px;
    max-height: 250px;
}

.heading-wrapper {
    margin-top: 20px;
    margin-left: 40px;
    font-weight: bold;
    font-size: 14px;
}

.show-title {
    margin-top: 10px;
    font-weight: bold;
    font-size: 14px;
    background: #ffc426;
    padding-left: 10px;
}

.show-subtitle {
    font-size: 10px;
    max-width: 250px;
}

@media screen and (max-width: 961px) {
    .wrapper {
        margin: 0 auto;

    }
    .container {
        float: left;
        width: 30%;
        cursor: pointer;
    }
}

@media screen and (max-width: 641px) {
    .wrapper {
        margin: 0 auto;

    }
    .container {
        float: left;
        width: 50%;
        cursor: pointer;
    }

}
</style>
