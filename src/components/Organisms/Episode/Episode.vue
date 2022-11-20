<template>
    <main>
        <div class="heading-wrapper">
            <heading :tite="episdoeTitle"/>
        </div>
        <horizontal-list :show-information="episodeInformation"/>
    </main>
</template>

<script>
import HorizontalList from '../../Molecules/HorizontalList/HorizontalList.vue'
import Heading from '../../Atoms/Heading/Heading.vue'
export default {
    name: 'Episode',
    components: {
        HorizontalList,
        Heading
    },
    props: {
        episodeInformation: {
            type: Array,
            default: () => ([])
        }
    },
    data: function() {
        return {
            episdoeTitle: 'Episodes'
        }
    }

}
</script>
