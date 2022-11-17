<template>
 <div class="centerx">
    <vs-navbar
      :color="colorx"
      class="myNavbar">
      <vs-navbar-item index="0" >
        <a href="#">Home</a>
      </vs-navbar-item>
      <vs-navbar-item index="1">
        <a href="#">News</a>
      </vs-navbar-item>
      <vs-navbar-item index="2">
        <a href="#">Update</a>
      </vs-navbar-item>
    </vs-navbar>
  </div>
  </template>
<script>
export default {
  name: 'Menu',
  data: () => ({
    colorx: '#ffda74'
  })
}
</script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
 .input-color {
  margin-bottom: '10px';
  position: relative;
  display: block;
 }

.myNavbar {
  color: black;
  height: 50px;
}
  </style>
