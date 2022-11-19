<template>
    <div >
        <b-navbar toggleable="lg" type="dark" variant="warning">
            <b-navbar-brand href="#" class="custom-header" @click="navigateToHome()">
                <b-img src="https://www.pathe.nl/assets/favicons/favicon-32x32.png"></b-img>
            </b-navbar-brand>
            <div class="icon-content"  @click="navigateToHome()">
                <b-icon icon="camera-reels" style="width: 20px; height: 20px;" aria-hidden="true"></b-icon>
                <span> Movies</span>
            </div>
            <div class="icon-content">
                <b-icon icon="geo-alt-fill" style="width: 20px; height: 20px;" aria-hidden="true"></b-icon>
                <span>Locations </span>
            </div>
            <div class="icon-content">
                <b-icon icon="star-fill" style="width: 20px; height: 20px;" aria-hidden="true"></b-icon>
                <span>AllStar </span>
            </div>
            <div class="icon-content">
                <b-icon icon="journal-bookmark-fill" style="width: 20px; height: 20px;" aria-hidden="true"></b-icon>
                <span>Unlimited</span>
            </div>
        </b-navbar>
    </div>
</template>
<script>

export default {
  name: 'PatheHeader',
  methods: {
    navigateToHome: function () {
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
