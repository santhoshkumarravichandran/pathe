<template>
    <div class="fill">
        <div class="wrapper">
            <div class="content">
                <span class="icon-content">
                    <b-icon icon="instagram" style="width: 30px; height: 30px;" aria-hidden="true"/>
                </span>
                <span class="icon-content">
                    <b-icon icon="facebook" style="width: 30px; height: 30px;" aria-hidden="true"/>
                </span>
                <span class="icon-content">
                    <b-icon icon="twitter" style="width: 30px; height: 30px;" aria-hidden="true"/>
                </span>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: 'PatheFooter'
}
</script>
<style scoped>
.wrapper {
  background: #ffc426;
  height: 60px;
  display: flex;
  width: 100%;
  justify-content: center;
  align-content: center;
  bottom:0;
  max-width: 1000px;
margin: auto;
}
.content {
  align-self: center;
}
.icon-content {
  margin-left: 30px;
}

.fill {
    width: 100%;
    background: #ffc426;
}
</style>
