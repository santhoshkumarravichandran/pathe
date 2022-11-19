<template>
    <div class="wrapper">
      <div class="content">
        <span class="icon-content">
          <b-icon icon="instagram" style="width: 30px; height: 30px;" aria-hidden="true"></b-icon>
        </span>
        <span class="icon-content">
          <b-icon icon="facebook" style="width: 30px; height: 30px;" aria-hidden="true"></b-icon>
        </span>
        <span class="icon-content">
          <b-icon icon="twitter" style="width: 30px; height: 30px;" aria-hidden="true"></b-icon>
        </span>
      </div>
    </div>
</template>
<script>

export default {
  name: 'PatheFooter',
  data: function () {
    return {
      footerMessage: 'Footer Message'
    }
  }
}
</script>
<style scoped>
.wrapper {
  position: absolute;
  bottom: 0;
  background: #ffc426;
  height: 80px;
  display: flex;
  width: 100%;
  justify-content: center;
  align-content: center;
}
.content {
  align-self: center;
}
.icon-content {
  margin-left: 30px;
}
</style>
