<template>
    <div class="fill">
        <breadcrumb/>
        <div class="main">
            <show-information-card
                :title="showInformation.name"
                :imageurl="showInformation.image.original"
                :runtime="showInformation.runtime"
                :language="showInformation.language"
                :summary="showInformation.summary"
                :genres="showInformation.genres"
            />
            <br >
            <episode class="episode" :episode-information="episodeInformation"/>
        </div>
    </div>

</template>
<script>
import { getShowInformation, getEpisodeInformation } from '../services/streamingService'
import ShowInformationCard from '../components/Organisms/ShowInformationCard/ShowInformationCard.vue'
import Breadcrumb from '../components/Molecules/Breadcrumb/Breadcrumb.vue'
import Episode from '../components/Organisms/Episode/Episode.vue'
import Heading from '../components/Atoms/Heading/Heading.vue'
export default {
    name: 'ShowInformation',
    components: {
        ShowInformationCard,
        Breadcrumb,
        Episode,
        Heading
    },
    mounted: function() {
        const showId = this.$route.params.id

        if (showId > 0) {
            this.fetchShowInformation(showId)
            this.fetchEpisodeInformation(showId)
        } else {
            this.$router.push('/')
        }
    },
    data() {
        return {
            showInformation: {
                name: '',
                image: {
                    original: ''
                },
                runtime: 0,
                language: '',
                summary: '',
                genres: []
            },
            episodeInformation: []
        }
    },
    methods: {
        fetchShowInformation: function(showId) {
            // get the query movie id from the query param and load the movie information
            getShowInformation(showId).then((showDetails) => {
                const { image, name = 'No Movie Information',
                    rating, language, summary, runtime, id, genres = [] } = showDetails
                this.showInformation = {
                    image,
                    name,
                    language,
                    rating,
                    runtime,
                    summary,
                    id,
                    genres
                }
            }).catch((noShowInformation) => {
                console.log('Unable to load movie information, try again later', noShowInformation)
            })
        },
        fetchEpisodeInformation: function(showId) {
            getEpisodeInformation(showId).then((episodeInformation) => {
                episodeInformation.forEach((episode) => {
                    const { name, season, image, runtime } = episode
                    this.episodeInformation.push({name, season, image, runtime})
                })
            }).catch((noEpisodeInformation) => console.log('No Episode information found', noEpisodeInformation))
        }
    }
}
</script>
<style scoped>
.wrapper {
  display: flex;
}
.main {
    max-width: 1000px;
  margin: auto;
}
img {
  width: 300px;
}

.left-container {
  width: 150px;
}

.additional-information {
  color: red;
}

.right-container {
  flex: 1;
}

.fill {
    width: 100%;
}
</style>
