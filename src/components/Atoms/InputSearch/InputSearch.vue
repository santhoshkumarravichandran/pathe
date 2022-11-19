<template>
   <b-form-input class="custom-control" :id="`type-search`" :type="'search'" 
   v-model="keyword"
   placeholder="Search your fav show"></b-form-input>
</template>

<script>
export default {
  name: 'InputSearch',
  data: function() {
    return {
      keyword: ''
    }
  }
}
</script>
<style scoped>
.form-control{
    margin-left: 10px !important;
    height: 35px;
}
.form-control:focus {
  outline: none !important;
  box-shadow: 0 0 0 0.25rem #ffc426 !important;
  -webkit-box-shadow: 0 0 0 0.25rem #ffc426 !important;
  border-color: #ffc426 !important;
  outline: none !important;
}
</style>
