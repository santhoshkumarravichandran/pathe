<template>
    <div class="main">
        <div class="wrapper">
            <div class="container" v-for="(movieInformation, index) in allShows" :key="index">
                <div class="content">
                    <b-img :src="`${movieInformation.image.original}`" fluid alt="Responsive image"></b-img>
                    <div class="movie-title">
                        {{ movieInformation.name }}
                    </div>
                    <div class="movie-subtitle">
                        {{ movieInformation.language }} | {{ movieInformation.runtime }} Minutes
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import HorizontalList from '../../Molecules/HorizontalList/HorizontalList.vue'
import Heading from '../../Atoms/Heading/Heading.vue'
import ControlBar from '../ControlBar/ControlBar.vue'
export default {
    name: 'Gallery',
    components: {
        ControlBar,
        HorizontalList,
        Heading
    },
    props: ['allShows']
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

@media screen and (max-width: 400px) {
    .image-grid {
        flex-direction: column;
        flex-wrap: no-wrap;
    }

    .image-grid div {
        width: 100%;
    }
}

.movie-title {
    font-weight: bold;
    font-size: 14px;

}

.movie-subtitle {
    font-size: 11px;
    background: #ffc426;
    max-width: 250px;
}
</style>
