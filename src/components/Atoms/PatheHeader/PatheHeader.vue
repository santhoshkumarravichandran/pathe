<template>
    <div class="fill">
        <div class="main">
            <b-navbar toggleable="lg" type="dark" variant="warning" class="main">
                <b-navbar-brand href="/" class="custom-header">
                    <b-img src="https://www.pathe.nl/assets/favicons/favicon-32x32.png"/>
                </b-navbar-brand>
            </b-navbar>
        </div>
    </div>
</template>
<script>

export default {
    name: 'PatheHeader',
    methods: {
        /**
         * A function to route to home page when logo is clicked
         */
        navigateToHome: function() {
            this.$router.push('/')
        }
    }
}
</script>
<style scoped>
b-navbar {
    list-style-type: none;
}
.custom-header {
    padding-left: 40px;
    max-width: 1000px;;
}
.main{
    max-width: 1000px;
    margin: auto;
}
.fill {
    width: 100%;
    background: #ffc426;
}
</style>
