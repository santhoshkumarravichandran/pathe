<template>
    <div >
        <b-navbar toggleable="lg" type="dark" variant="warning" class="main">
            <b-navbar-brand href="/" class="custom-header">
                <b-img src="https://www.pathe.nl/assets/favicons/favicon-32x32.png"/>
            </b-navbar-brand>
        </b-navbar>
    </div>
</template>
<script>

export default {
    name: 'PatheHeader',
    methods: {
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
}
.icon-content {
    padding-left: 20px;
    padding-right: 20px;
}
</style>
